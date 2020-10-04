import React, {PropsWithChildren} from "react";
import '../css/NarrowForm.css'

export default function (props:PropsWithChildren<any>) {
    return (
        <>
            {props.children}
        </>
    )
}