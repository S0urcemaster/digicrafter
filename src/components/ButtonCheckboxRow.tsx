import React, {PropsWithChildren, useEffect, useState} from "react";
import '../css/App.css'
import ToggleButton from "./ToggleButton";


export default function (props:PropsWithChildren<any>) {

    const [selected, setSelected] = useState <Map<string, boolean>>(props.items)

    function click(key:string, value: boolean) {
        selected.set(key, value)
        setSelected(new Map(selected))
        props.selected(selected)
    }

    return (
        <div style={{...props.style, whiteSpace:'normal', display:'flex', flexWrap:'wrap', justifyContent:'flex-start'}}>
            {Array.from(selected.keys()).map((key: string) =>
                <ToggleButton
                    checked={selected.get(key)} key={key}
                    toggleChange={click}>
                    {key}
                </ToggleButton>
            )}
        </div>
    )

}