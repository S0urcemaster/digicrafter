import React, {PropsWithChildren} from "react";
import {Button, Form, Input, Select, Space, Typography} from "antd";
import {Command, commands} from "../../lib/digiboy";
import NarrowForm from "../../components/NarrowForm";

export default function (props:PropsWithChildren<any>) {

    return (
        <NarrowForm>
        <Form
            labelCol={{ span: 8 }}
            wrapperCol= {{ span: 16 }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={props.onFinish}
            onFinishFailed={props.onFinishFailed}
        >
            <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]}>
                <Input />
            </Form.Item>

            <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]}>
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
        </NarrowForm>
    )

}