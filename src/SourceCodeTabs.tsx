import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button, Drawer, Radio} from "antd";
import './css/App.css'
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";


export default function (props:PropsWithChildren<any>) {

    const [paths, setPaths] = useState <string[]>(props.paths)
    const [source, setSource] = useState <string>('')

    useEffect(() => {
        loadSource(paths[0])
    },[paths])

    function loadSource (path:string) {
        //   // const path = 'https://digi-craft.de/src' +source
        // const path = 'http://localhost:3001/src' +paths.find((path) => source === path)
        // axios.defaults.headers = {
        //     'Cache-Control': 'no-cache',
        //     'Pragma': 'no-cache',
        //     'Expires': '0',
        // }
        axios.get('https://digi-craft.de/src' +path)
        // axios.get('http://localhost:3001/src' +path)
            .then(res => {
                setSource(res.data)
            }).catch(() => {
        })
    }

    return (
        <Drawer
            title={
                <Radio.Group onChange={(event) => loadSource(event.target.value)} defaultValue={paths[0]}>
                    {paths.map((path) => <Radio.Button value={path}>{path.slice(path.lastIndexOf('/')+1, path.length)}</Radio.Button>)}
                </Radio.Group>}
            placement="right"
            closable={false}
            visible={props.visible}
            getContainer={false}
            style={{ position: 'absolute' }}
            width={768}
        >
            <SyntaxHighlighter language="tsx" style={atomDark}>
                {source}
            </SyntaxHighlighter>
        </Drawer>
    )

}