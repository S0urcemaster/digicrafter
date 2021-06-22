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
        main_cpp: "210318/Main.cpp",
    }

    const [mainCpp, setMainCpp] = useState<string>('');

    useEffect(() => {
        axios.get('https://digi-craft.de/cpp/' +paths.main_cpp, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setMainCpp(res.data)
            }).catch(() => {
        })
    },[])

    return (
        <Content>
            <Title date={'20.03.2021'} navPrev={Nav.cppTraining.items.helloworld.link} navNext={Nav.cppTraining.items.d210319.link}>{Nav.cppTraining.items.d210318.title}</Title>
            <Item>
                <ItemTitle>main.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {mainCpp}
                </SyntaxHighlighter>
            </Item>
        </Content>
    )

}