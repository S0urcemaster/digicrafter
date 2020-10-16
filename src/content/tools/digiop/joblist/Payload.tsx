import React from "react";
import {Arg} from "../../../../lib/model/DigiOp";
import {Input} from "antd";

export default (props: {arg:Arg, payloadChanged:Function}) => {

    return (
        <>
            <Input.TextArea key={props.arg.key} style={{height:'40px'}} autoSize rows={1} value={props.arg.payload as string}
                            onChange={(event) => props.payloadChanged(event.target.value)} />
        </>
    )
        // const renderSwitch = () =>
        //     {switch (props.arg.datatype) {
        //     case ArgType.String:
        //         return <Input.TextArea key={props.arg.key} style={{height:'40px'}} autoSize rows={1} value={props.arg.payload as string}
        //                                onChange={(event) => props.payloadChanged(event.target.value)} />
        //     case ArgType.Number:
        //         return <InputNumber style={{width:'50px'}} placeholder={'Weeks'} />
        //     case ArgType.Time:
        //         return <div style={{display:'flex', maxWidth:'20px!important', width:'20px!important'}}>
        //             <InputNumber style={{maxWidth:'20px'}} placeholder={'Weeks'} />
        //         </div>
        // }
        // return <></>}
}