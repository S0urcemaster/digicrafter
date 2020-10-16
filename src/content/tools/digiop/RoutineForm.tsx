import React, {PropsWithChildren, useEffect, useState} from "react";
import '../../../css/NarrowForm.css'
import {Button, Form, Input} from "antd";
import JobList from "./JobList";
import {Broker, Feature, Routine} from "../../../lib/model/DigiOp";

enum TimeoutType {
    at = 'At', in = 'In'
}

export default function (props:PropsWithChildren<any>) {

    const [routine, setRoutine] = useState <Routine>(props.routine)
    const [timeoutType, setTimeoutType] = useState(TimeoutType.in)
    const [day, setDay] = useState(1)

    const brokers:Broker[] = props.brokers

    function timeoutTypeChange () {
        setTimeoutType(timeoutType === TimeoutType.in ? TimeoutType.at : TimeoutType.in)
    }

    let repeat = false
    let repeatId: NodeJS.Timeout

    function keyRepeat () {
        repeat = true
        while (repeat) {
            setDay(day+1)
            setTimeout(() => {}, 100)
        }
    }

    function upHold () {
        setDay(day +1)
    }

    function upRelease () {
        repeat = false
        clearInterval(repeatId)
    }

    function rightClick () {
        setDay(day -1)
    }

    function jobsChanged(jobs: Feature[]) {
        setRoutine({...routine, jobs:jobs})
        // routine.jobs = jobs
    }

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol= {{ span: 16 }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
            style={{backgroundColor: '#1f1f1f'}}
        >
            <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]} initialValue={routine.name}>
                <Input value={routine.name} />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]} initialValue={routine.description}>
                <Input value={routine.description} />
            </Form.Item>
            <Form.Item label="Start" name="start" rules={[{ required: false, message: ' ' }]}>
                <div style={{display:'flex'}}>
                    <Button disabled style={{width:'40px'}} onClick={timeoutTypeChange}>{timeoutType}</Button>
                    <Button disabled onContextMenu={rightClick} onMouseDown={upHold} onMouseUp={upRelease} style={{width:'40px', paddingLeft:'9px'}}>{day}</Button>
                    -
                    <Button disabled style={{width:'40px', paddingLeft:'9px'}}>01</Button>
                    -
                    <Button disabled style={{width:'50px', paddingLeft:'7px'}}>2020</Button>
                    &nbsp;
                    <Button disabled style={{width:'40px', paddingLeft:'9px'}}>23</Button>
                    :
                    <Button disabled style={{width:'40px', paddingLeft:'9px'}}>59</Button>
                </div>
            </Form.Item>
            <Form.Item label="Repeat" name="repeat" rules={[{ required: false, message: ' ' }]}>
                <div style={{display:'flex'}}>
                    <Button disabled>hr</Button>
                    <Button disabled>dy</Button>
                    <Button disabled>wk</Button>
                    <Button disabled>mo</Button>
                    <Button disabled>yr</Button>
                    <Button disabled>off</Button>
                </div>
            </Form.Item>
            <JobList brokers={brokers} jobs={routine.jobs} jobsChanged={jobsChanged} />
            <div className={'form-spacer'}/>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={() => props.onSave(routine)}>
                    Save
                </Button>
            </Form.Item>

        </Form>
    )

}