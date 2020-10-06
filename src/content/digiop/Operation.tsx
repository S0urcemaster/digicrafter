import React, {PropsWithChildren, useEffect, useState} from "react";
import '../../css/NarrowForm.css'
import {Button, Form, Input} from "antd";
import {EndpointType} from "../../lib/data/digiop";
import {Arg, ActionDef, selfOp, Action} from "../../lib/digiop/Operators";
import ActionList from "./ActionList";


export default function (props:PropsWithChildren<any>) {

    const [actionsDisabled, setActionsDisabled] = useState(true)
    const [endpoint, setEndpoint] = useState <EndpointType>(EndpointType.self)
    const [actions, setActions] = useState <Action[]>()

    useEffect(() => {
        setActionsDisabled(false)
    }, [endpoint])

    function getActions (type: EndpointType) :ActionDef[] {
        switch (type) {
            case EndpointType.self:
                return selfOp.actions
            case EndpointType.local:

                break
            case EndpointType.remote:

                break
        }
        return []
    }

    function endpointTypeChanged(type: EndpointType) {
        setEndpoint(type)
        setActionsDisabled(false)
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