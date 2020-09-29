import React, {PropsWithChildren, useEffect, useState} from "react";
import '../css/ToggleButton.css'

export default function (props:PropsWithChildren<any>) {

    const [selected, setSelected] = useState (props.checked)
    const [classname, setClassname] = useState (props.checked)

    useEffect(() => {
        if (selected) {
            setClassname('checked')
        } else {
            setClassname('unchecked')
        }
        props.toggleChange(props.children, selected)
    }, [selected])

    function click() {
        setSelected(!selected)
    }

    return (
        <button className={`toggleButton ${classname}`} onClick={click}>
            {props.children}
        </button>
    )

}