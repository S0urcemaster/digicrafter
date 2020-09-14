import React, {PropsWithChildren} from "react";
import {Typography} from "antd";
import { Row, Col } from 'antd';
import '../css/App.css'



export const Title = (props:PropsWithChildren<any>) => {
    return (
        <Item>
            <Typography.Title level={1} style={{marginBottom:'0'}}>{props.children}</Typography.Title>
        </Item>
    )
}

export const Subtitle = (props:PropsWithChildren<any>) => {
    return (
        <Item>
            <Typography.Title level={2} style={{marginBottom:'0', marginTop:'0'}}>{props.children}</Typography.Title>
        </Item>
    )
}

export const Item = (props:PropsWithChildren<any>) => {
    return (
        <div className="content-item" style={{borderTop:'1px solid #235d32', marginRight:'1px'}}>
            {props.children}
        </div>
    )
}

export const Columns = (props: PropsWithChildren<any>) => {
    return (
        <div style={{display:'flex', alignItems:'stretch'}}>
            {props.children.map((child:any) => (
                <div style={{flexGrow:1}}>{child}</div>
            ))}
        </div>
    )
}

export default function Content (props:PropsWithChildren<any>) {

    return (
        <>
            <div style={{marginTop:'16px', marginLeft:'16px', marginRight:'16px', }}>
                {props.children}
            </div>
        </>
    )

}