import React, {PropsWithChildren} from "react";
import {Typography} from "antd";
import ExternalSvg from '../img/external-link.svg'

const {Link} = Typography

export default function (props: PropsWithChildren<any> & {href:string}) {
    return (
        <Link href={props.href} target="_blank" style={{...props.style, color:'#c3b21b'}}>
            {props.children} <img alt={props.children} src={ExternalSvg} style={{height: '12px', paddingBottom: '2px'}} color='white'/>
        </Link>
    )
}