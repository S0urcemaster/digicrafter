import React, {PropsWithChildren, useEffect, useState} from "react";
import {Space, Typography, Collapse} from "antd";
import '../../css/App.css'
import Content, {Columns, Item, ItemTitle, Subtitle, Title} from "../../components/Content";
import {Nav} from "../../lib/Nav";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";
import InternalLink from "../../components/InternalLink";
import ExternalLink from "../../components/ExternalLink";

const {Text} = Typography

export default function Cpp210318 () {

    const paths = {
        main_cpp: "210318/Main.cpp",
    }

    const [mainCpp, setMainCpp] = useState<string>('');

    useEffect(() => {
        axios.get('http://localhost:3000/cpp/' +paths.main_cpp, {headers:{'Content-type':'text/plain;charset=ISO-8859-1'}})
            .then(res => {
                setMainCpp(res.data)
                console.log(res.data)
            }).catch(() => {
        })
    },[])

    return (
        <Content>
            <Title date={'20.03.2021'} navPrev={Nav.cppTraining.items.d210318.link} navNext={Nav.cppTraining.items.d210318.link}>{Nav.cppTraining.items.helloworld.title}</Title>
            <Item>
                <ItemTitle date="20.03.2021">"Perfektion ist nicht dann erreicht, wenn es nichts mehr hinzuzufügen gibt, sondern wenn man nichts mehr weglassen kann."</ItemTitle>
                <Space direction='vertical'>
                    <InternalLink to={Nav.cppTraining.items.d210318.link}>{Nav.cppTraining.items.d210318.title}</InternalLink>
                    <InternalLink to={Nav.cppTraining.items.d210319.link}>{Nav.cppTraining.items.d210319.title}</InternalLink>
                </Space>
            </Item>
            <Item>
                <ItemTitle date="25.03.2021">"How often have I said to you that when you have eliminated the impossible, whatever remains, however improbable, must be the truth?"</ItemTitle>
            </Item>
            <Item>
                <ExternalLink href="https://digi-craft.de/coding-exercises">Coding Exercises</ExternalLink>
            </Item>
                        
        </Content>
    )

}