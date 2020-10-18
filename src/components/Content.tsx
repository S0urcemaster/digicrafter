import React, {PropsWithChildren} from "react";
import {Typography} from "antd";
import {LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons'
import '../css/App.css'
import InternalLink from "./InternalLink";

export const TitleRoutedContent = (props:PropsWithChildren<any>) => {

}

export const Title = (props:PropsWithChildren<any> & {date:string, navPrev:string, navNext:string}) => {
    return (
        <Item style={{...props.style}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:'end'}}>
                <div style={{display:"flex"}}>
                    {props.navPrev && <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>
                        <InternalLink to={props.navPrev}><LeftCircleOutlined style={{color:'#666666', paddingTop:'3px'}} />&nbsp;</InternalLink>
                    </Typography.Title>}
                    <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>{props.children}</Typography.Title>
                    {props.navNext && <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>
                        <InternalLink to={props.navNext}>&nbsp;<RightCircleOutlined style={{color:'#666666', paddingTop:'3px'}} /></InternalLink>
                    </Typography.Title>}
                </div>
                <Typography.Title style={{marginBottom:'2px', marginTop:'0', color:'#555555'}} level={4}>{props.date}</Typography.Title>
            </div>
        </Item>
    )
}

export const Subtitle = (props:PropsWithChildren<any> & {date:string}) => {
    return (
        <Item>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:'end'}}>
                <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={2}>{props.children}</Typography.Title>
                <Typography.Title style={{marginBottom:'2px', marginTop:'0', color:'#555555'}} level={4}>{props.date}</Typography.Title>
            </div>
        </Item>
    )
}

export const ItemTitle = (props:PropsWithChildren<any> & {date:string}) => {
    return (
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:'15px', alignItems:'end'}}>
                <Typography.Title style={{marginBottom:'0'}} level={3}>{props.children}</Typography.Title>
                <Typography.Title style={{marginBottom:'2px', marginTop:'0', color:'#555555'}} level={5}>{props.date}</Typography.Title>
            </div>
    )
}

export const Item = (props:PropsWithChildren<any>) => {
    return (
        <div className="content-item" style={{marginLeft:'1px', marginTop:'1px', ...props.style}}>
            {props.children}
        </div>
    )
}

export const Columns = (props: PropsWithChildren<any>) => {
    return (
        <div style={{display:'flex', flexBasis:'1',}}>
            {props.children.map((child:any, index:number) => (
                <div key={index} style={{flexGrow:1, marginBottom:'1px', flexBasis:'0',}}>{child}</div>
            ))}
        </div>
    )
}

export default function Content (props:PropsWithChildren<any>) {

    return (
        <div>
            {props.children}
        </div>
    )

}