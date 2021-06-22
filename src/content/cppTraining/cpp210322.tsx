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

    const host = "https://digi-craft.de/";
    // const host = "http://localhost:3000/";

    const paths = {
        main_cpp: "210322/Main.cpp",
        kunde_h: "210322/Kunde.h",
        kunde_cpp: "210322/Kunde.cpp",
        bestellung_h: "210322/Bestellung.h",
        bestellung_cpp: "210322/Bestellung.cpp",
        artikel_h: "210322/Artikel.h",
        artikel_cpp: "210322/Artikel.cpp",
    }

    const [mainCpp, setMainCpp] = useState<string>('');
    const [kundeH, setKundeH] = useState<string>('');
    const [kundeCpp, setKundeCpp] = useState<string>('');
    const [bestellungH, setBestellungH] = useState<string>('');
    const [bestellungCpp, setBestellungCpp] = useState<string>('');
    const [artikelH, setArtikelH] = useState<string>('');
    const [artikelCpp, setArtikelCpp] = useState<string>('');

    useEffect(() => {
        axios.get(host +'cpp/' +paths.main_cpp)
            .then(res => {
                setMainCpp(res.data)
            }).catch(() => {
        })
        axios.get(host +'cpp/' +paths.kunde_h)
            .then(res => {
                setKundeH(res.data)
                console.log(host +'cpp/' +paths.kunde_h)
                console.log(res.data);
            }).catch(() => {

            })
        axios.get(host +'cpp/' +paths.kunde_cpp)
            .then(res => {
                setKundeCpp(res.data)
            }).catch(() => {
        })
        axios.get(host +'cpp/' +paths.bestellung_h)
            .then(res => {
                setBestellungH(res.data)
            }).catch(() => {
        })
        axios.get(host +'cpp/' +paths.bestellung_cpp)
            .then(res => {
                setBestellungCpp(res.data)
            }).catch(() => {
        })
        axios.get(host +'cpp/' +paths.artikel_h)
            .then(res => {
                setArtikelH(res.data)
            }).catch(() => {
        })
        axios.get(host +'cpp/' +paths.artikel_cpp)
            .then(res => {
                setArtikelCpp(res.data)
            }).catch(() => {
        })
    },[])

    return (
        <Content>
            <Title date={'22.03.2021'} navPrev={Nav.cppTraining.items.d210319.link} navNext={Nav.cppTraining.items.d210322.link}>
                    {Nav.cppTraining.items.d210322.title}</Title>
            <Item>
                <ItemTitle>main.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {mainCpp}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>kunde.h</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {kundeH}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>kunde.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {kundeCpp}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>bestellung.h</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {bestellungH}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>bestellung.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {bestellungCpp}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>artikel.h</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {artikelH}
                </SyntaxHighlighter>
            </Item>
            <Item>
                <ItemTitle>artikel.cpp</ItemTitle>
                <SyntaxHighlighter language="cpp" style={atomDark}>
                    {artikelCpp}
                </SyntaxHighlighter>
            </Item>
        </Content>
    )

}