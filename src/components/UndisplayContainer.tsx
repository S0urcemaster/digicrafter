import React, {PropsWithChildren} from "react";


export default function (props:PropsWithChildren<any>) {

    return (
        <div style={{...props.style, display:props.visible?'block':'none'}}>
            {props.children}
        </div>
    )

}