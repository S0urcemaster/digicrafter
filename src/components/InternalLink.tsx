import React, {PropsWithChildren} from "react";
import {Link} from "react-router-dom";

export default function InternalLink (props: PropsWithChildren<any>) {
    return (
        <Link to={props.to}>{props.children}</Link>
    )
}