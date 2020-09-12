import React, {PropsWithChildren} from "react";
import {Typography} from "antd";
import '../css/App.css'
import { Link } from "react-router-dom";

const {Title, Text} = Typography


export default function Content (props:PropsWithChildren<any>) {

    return (
        <>
            <Title level={1} style={{paddingTop:'20px', paddingLeft:'20px', marginBottom:'0'}}>{props.title}</Title>
            <div className="content-content">
                {props.children}
            </div>
        </>
    )

}