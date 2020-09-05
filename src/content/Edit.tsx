
import React, { useEffect, useMemo, useState } from "react";

import { createEditor } from 'slate'

import { Slate, Editable, withReact } from 'slate-react'

import {Typography} from 'antd'
import '../css/edit.css'

const {Title} = Typography


export default function Edit () {

    const editor = useMemo(() => withReact(createEditor()), [])

    // Keep track of state for the value of the editor.
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: 'A line of text in a paragraph.' }],
        },
    ])

    return (
        <Slate editor={editor} value={value} onChange={newValue => {
        // @ts-ignore
        setValue(newValue);
        }}>
            <Editable />
        </Slate>
    )

}