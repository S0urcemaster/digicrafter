import React, {PropsWithChildren} from "react";
import {Button, Form, Input, Select, Space, Typography} from "antd";
import {Command, commands} from "../../lib/digiboy";

export default function (props:PropsWithChildren<any>) {

    return (
        <Form
            labelCol={{ span: 8 }}
            wrapperCol= {{ span: 16 }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: 'Please input program name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: false, message: 'Please leave a note.' }]}
            >
                <Input />
            </Form.Item>

            {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked">*/}
            {/*    <Checkbox>Remember me</Checkbox>*/}
            {/*</Form.Item>*/}

            {props.children}

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Create
                </Button>
            </Form.Item>

        </Form>
    )

}