import React, {PropsWithChildren, useEffect, useState} from "react";
import '../../css/NarrowForm.css'
import {Button, Form, Input} from "antd";
import {EndpointType} from "../../lib/data/digiop";
import {ArgDef, selfOp, Action} from "../../lib/digiop/Operators";
import ActionList from "./ActionList";
import ToggleButton from "../../components/ToggleButton";

enum TimeoutType {
    at = 'At', in = 'In'
}

export default function (props:PropsWithChildren<any>) {

    const [actionsDisabled, setActionsDisabled] = useState(true)
    const [timeoutType, setTimeoutType] = useState(TimeoutType.in)
    const [day, setDay] = useState(1)

    useEffect(() => {
        setActionsDisabled(false)
    }, [])

    function endpointTypeChanged(type: EndpointType) {
        setActionsDisabled(false)
    }

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
        // repeatId = setTimeout(keyRepeat, 1000)
    }

    function upRelease () {
        repeat = false
        clearInterval(repeatId)
    }

    function rightClick () {
        setDay(day -1)
    }

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol= {{ span: 16 }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
            // style={{border: '2px solid #141414'}}
            style={{backgroundColor: '#1f1f1f'}}
        >
            <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Start" name="start" rules={[{ required: false, message: ' ' }]}>
                <div style={{display:'flex'}}>
                    <Button style={{width:'40px'}} onClick={timeoutTypeChange}>{timeoutType}</Button>
                    <Button onContextMenu={rightClick} onMouseDown={upHold} onMouseUp={upRelease} style={{width:'40px', paddingLeft:'9px'}}>{day}</Button>
                    -
                    <Button style={{width:'40px', paddingLeft:'9px'}}>01</Button>
                    -
                    <Button style={{width:'50px', paddingLeft:'7px'}}>2020</Button>
                    &nbsp;
                    <Button style={{width:'40px', paddingLeft:'9px'}}>23</Button>
                    :
                    <Button style={{width:'40px', paddingLeft:'9px'}}>59</Button>
                </div>
            </Form.Item>
            <Form.Item label="Repeat" name="repeat" rules={[{ required: false, message: ' ' }]}>
                <div style={{display:'flex'}}>
                    <Button>hr</Button>
                    <Button>dy</Button>
                    <Button>wk</Button>
                    <Button>mo</Button>
                    <Button>yr</Button>
                    <Button>off</Button>
                </div>
            </Form.Item>
            <ActionList operator={props.operator} />
            <div className={'form-spacer'}/>

            {/*{props.children}*/}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>

        </Form>
    )

}