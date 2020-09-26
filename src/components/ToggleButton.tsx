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
    }, [selected])

    function click() {
        setSelected(!selected)
        props.toggleChange(props.children, selected)
    }

    return (
        <button className={`toggleButton ${classname}`} onClick={click}>
            {props.children}
        </button>
    )

}