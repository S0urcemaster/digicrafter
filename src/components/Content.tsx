import React, {PropsWithChildren} from "react";
import {Typography} from "antd";
import '../App.css'
import { Link } from "react-router-dom";

const {Title, Text} = Typography


export default function Content (props:PropsWithChildren<any>) {

    return (
        <>
            <Title level={1} style={{paddingTop:'20px', paddingBottom:'20px'}}>{props.title}</Title>
            <div className="content-content">
                {props.children}
            </div>
        </>
    )

}