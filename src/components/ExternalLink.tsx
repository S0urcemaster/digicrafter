import React, {PropsWithChildren} from "react";
import {Typography} from "antd";
import ExternalSvg from '../img/external-link.svg'

const {Link} = Typography

export default function ExternalLink (props: PropsWithChildren<any>) {
    return (
        <Link href={props.href} target="_blank" style={{...props.style}}>
            {props.children} <img src={ExternalSvg} style={{height: '12px', paddingBottom: '2px'}} color='white'/>
        </Link>
    )
}