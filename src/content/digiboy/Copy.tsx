import React from "react";
import {Button, Form, Input, Select, Space, Typography} from "antd";
import BasicForm from "./BasicForm";
import {Copy, programs} from "../../lib/Programs";

export default function () {

    function connectionSelected (value: string) {
        console.log('value')
    }

    const onFinish = (values: any) => {
        // programs.push(values as Copy)
        console.log(programs);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <BasicForm
                onFinish = {onFinish}
                onFinshFailed = {onFinishFailed}
            >
                <Form.Item
                    label="From"
                    name="from"
                    rules={[{ required: true, message: <></> }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="To"
                    name="to"
                    rules={[{ required: true, message: <></> }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </BasicForm>
        </>
    )

}