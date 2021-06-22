import React, {PropsWithChildren, useEffect, useState} from "react";
import {Space, Typography, Collapse} from "antd";
import '../../css/App.css'
import Content, {Columns, Item, ItemTitle, Subtitle, Title} from "../../components/Content";
import {Nav} from "../../lib/Nav";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";

const {Text} = Typography

export default function Cpp210318 () {

    const paths = {
        main_cpp: "210319/Main.cpp",
        lib_h: "210319/lib.h",
        lib_cpp: "210319/lib.cpp",
        rechner_h: "210319/rechner.h",
        rechner_cpp: "210319/rechner.cpp",
    }

    const [mainCpp, setMainCpp] = useState<string>('');
    const [libH, setLibH] = useState<string>('');
    const [libCpp, setLibCpp] = useState<string>('');
    const [rechnerH, setRechnerH] = useState<string>('');
    const [rechnerCpp, setRechnerCpp] = useState<string>('');

    useEffect(() => {
        axios.get('https://digi-craft.de/cpp/' +paths.main_cpp, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setMainCpp(res.data)
            }).catch(() => {
        })
        axios.get('https://digi-craft.de/cpp/' +paths.rechner_h, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setRechnerH(res.data)
            }).catch(() => {
        })
        axios.get('https://digi-craft.de/cpp/' +paths.rechner_cpp, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setRechnerCpp(res.data)
            }).catch(() => {
        })
        axios.get('https://digi-craft.de/cpp/' +paths.lib_h, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setLibH(res.data)
            }).catch(() => {
        })
        axios.get('https://digi-craft.de/cpp/' +paths.lib_cpp, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setLibCpp(res.data)
            }).catch(() => {
        })
    },[])

    return (
        <Content>
            <Title date={'20.03.2021'} navPrev={Nav.cppTraining.items.d210318.link} navNext={Nav.cppTraining.items.d210322.link}>
                    {Nav.cppTraining.items.d210319.title}</Title>
            <Item>
                <ItemTitle>main.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {mainCpp}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>rechner.h</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {rechnerH}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>rechner.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {rechnerCpp}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>lib.h</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {libH}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>lib.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {libCpp}
                </SyntaxHighlighter>
            </Item>
        </Content>
    )

}