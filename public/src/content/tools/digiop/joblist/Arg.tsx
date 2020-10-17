import React from "react";
import {Form} from "antd";
import Payload from "./Payload";
import {Arg as Argument} from "../../../../lib/model/DigiOp"

export default function  (props:{arg:Argument, argChanged:Function}) {


    function payloadChanged (payload:string|number) {
        props.arg.payload = payload
        props.argChanged(props.arg)
    }

    return (
        <Form.Item
            key={props.arg.key}
            label={props.arg.label[0].toUpperCase() + props.arg.label.slice(1)}
            rules={[{ required: true, message: <></> }]}
            initialValue={props.arg.payload}
        >
            <Payload key={props.arg.key} arg={props.arg} payloadChanged={(payload:string|number) => payloadChanged(payload)}/>
        </Form.Item>
    )

}