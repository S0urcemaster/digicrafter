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

    useEffect(() => {
        setActionsDisabled(false)
    }, [])

    // function getActions (type: EndpointType) :ActionDef[] {
    //     switch (type) {
    //         case EndpointType.self:
    //             return selfOp.actionDefs
    //         case EndpointType.local:
    //
    //             break
    //         case EndpointType.remote:
    //
    //             break
    //     }
    //     return []
    // }

    function endpointTypeChanged(type: EndpointType) {
        setActionsDisabled(false)
    }

    function timeoutTypeChange () {
        setTimeoutType(timeoutType === TimeoutType.in ? TimeoutType.at : TimeoutType.in)
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
            <Form.Item label="Timeout" name="timeout" rules={[{ required: false, message: ' ' }]}>
                <div style={{display:'flex'}}>
                    <Button onClick={timeoutTypeChange}>{timeoutType}</Button>
                    <Input />
                </div>
            </Form.Item>
            <Form.Item label="Repeat" name="repeat" rules={[{ required: false, message: ' ' }]}>
                <Input />
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