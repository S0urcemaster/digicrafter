import React, {useEffect, useState} from "react";
import {Modal, Button, Input, Form} from 'antd';

export type DialogBroker = {path:string, description:string}

export default function (props:{
    evalTest:(broker:DialogBroker) => string | undefined
    onCancel:() => void
    onOk:() => void
    visible:boolean
}) {

    const [broker, setBroker] = useState <DialogBroker> ({path:'', description:''})
    const [okLabel, setOkLabel] = useState ('Test')
    const [errMsg, setErrMsg] = useState <string> ()

    useEffect(() => {
        setOkLabel('Test')
    }, [broker])

    function evalTest (broker:DialogBroker) {
        const res = props.evalTest(broker)
        if (!res) {
            setErrMsg(undefined)
            setOkLabel('Ok')
        } else {
            setErrMsg(res)
        }
    }

    return (
        <>
            <Modal
                visible={props.visible}
                title="Add Broker"
                // onOk={evalOk}
                onCancel={props.onCancel}
                footer={[
                    <Button key="back" onClick={props.onCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={okLabel === 'Test' ? () => evalTest(broker) : props.onOk}>
                        {okLabel}
                    </Button>,
                ]}
            >
                <Form labelCol={{span:6}}>
                    <Form.Item label="Path" name="path" rules={[{ required: true, message: ' ' }]}>
                        <Input value={broker.path} onChange={(event) => setBroker({...broker, path:event.target.value})} />
                    </Form.Item>
                    <Form.Item label="Description" name="description">
                        <Input value={broker.description} onChange={(event) => setBroker({...broker, description:event.target.value})} />
                    </Form.Item>
                </Form>
                <p style={{padding:'10px 0 10px 0', margin:'0', color:'#aa3333'}}>{errMsg ?? <>&nbsp;</>}</p>
            </Modal>
        </>
    )

}