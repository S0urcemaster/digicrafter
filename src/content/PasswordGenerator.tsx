import React, {useEffect, useState} from "react";
import '../css/PGenerator.css'
import {Button, Divider, Layout, Menu, Space, Tabs, Typography} from "antd";
import {Form, Input, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch,} from 'antd';
import axios from "axios";
import ContentTabs from "../components/ContentTabs";
import ProjectsOverview from "./projects/Overview";
import UpdateLogs from "./projects/UpdateLogs";
import Todo from "./projects/Todo";
import SiderTabs from "../components/SiderTabs";
import {RadioChangeEvent} from "antd/lib/radio";

const {Title, Text} = Typography
const {Sider} = Layout

enum spacing {
    none, spaces, random
}

enum wordLength {
    short = 'short', medium = 'medium', long = 'long', all = 'all'
}

export default function PasswordGenerator() {

    const [sentences, setSentences] = useState <string[]>([])
    const [sentence, setSentence] = useState()
    const [passwords, setPasswords] = useState <string[]>([])
    const [passwordHistory, setPasswordhistory] = useState <string[]>([])

    const [optionSpacing, setOptionSpacing] = useState(spacing.none)
    const [optionWordLength, setOptionWordLength] = useState(wordLength.medium)

    const [pwdResponse, setPwdResponse] = useState <string[]>([])

    useEffect(() => {
        if(pwdResponse.length === 5) {
            setSentences(pwdResponse.slice(0, pwdResponse.length))
            setPwdResponse([])
        }
    }, [pwdResponse])

    useEffect(() => {
        if (sentence === undefined) return
        if(sentences.length > 4) {
            setSentences(sentences.concat(sentence).slice(1, 6))
        } else {
            setSentences(sentences.concat(sentence).slice(0, 5))
        }
        console.log(sentences)
    }, [sentence])

    let pwdRes:string[] = []

    function evalResponse(res:string) {
        pwdRes.push(res)
        setSentence(res)
        if(pwdRes.length === 5) {
            setPasswordhistory(passwordHistory.concat(passwords.slice(0, passwords.length)))
            genPasswords(pwdRes)
            pwdRes = []
        }
    }

    function genPasswords(pwds: string[]) {
        setPasswords(pwdRes.map(pwd => {
            if (optionSpacing === spacing.none) {
                return pwd.replace(/\s/g, '')
            } else if (optionSpacing === spacing.spaces) {
                return pwd
            } else if (optionSpacing === spacing.random) {
                return pwd
            }
            return ''
        }))
    }

    function generate() {
        for (let i = 0; i < 5; i++) {
            axios.get('http://localhost:8000/api/sentence/' +optionWordLength)
                .then(res => {
                    let sent = ''
                    Object.values(res.data).forEach((item) => {
                        sent += item +' '
                    })
                    sent = sent.trimEnd()
                    evalResponse(sent)
                }).catch(() => {
            })
        }
    }

    function changeSentence (event: React.ChangeEvent<HTMLInputElement>, n:number) {
        let sents = sentences.slice(0, sentences.length)
        sents[n] = event.target.value!
        setSentences(sents)
        genPasswords(passwords)
    }

    function changeSpacing(event: RadioChangeEvent) {
        switch (event.target.value) {
            case spacing.none:
                setPasswords(sentences.map(sent => {
                    return sent.replace(/\s/g, '')
                }))
                break;
            case spacing.spaces:
                setPasswords(sentences.map(sent => {
                    return sent
                }))
                break;
            case spacing.random:

                break;
        }
    }

    const Pwds = () => <>
        {Object.values(passwords).map((pwd, index) =>
            <>
                <div key={index}>
                    <Title style={{marginBottom:'2px'}} level={4}>{pwd}</Title>
                    <p style={{fontSize:'13px'}}>{sentences[index]}</p>
                </div>
            </>
        )}
        <Divider />
        {Object.values(passwordHistory).map((pwd, index) =>
            <>
                <div key={index}>
                    <Title style={{marginBottom:'2px'}} level={4}>{pwd}</Title>
                </div>
            </>
        )}
    </>

    return (
        <>
            <Layout>
                <div className="pgsider">
                    <>
                        <Divider orientation="left" style={{marginTop:'8px', color:'lightgreen'}}>Wortbasis</Divider>
                        <Space direction='vertical' style={{width:'100%'}}>
                            <Input placeholder="Eingabe oder generieren" value={sentences[0]}
                                   onChange={(event) => changeSentence(event, 0)}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[1]}
                                   onChange={(event) => changeSentence(event, 1)}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[2]}
                                   onChange={(event) => changeSentence(event, 2)}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[3]}
                                   onChange={(event) => changeSentence(event, 3)}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[4]}
                                   onChange={(event) => changeSentence(event, 4)}/>
                        </Space>
                        <Divider orientation="left">Wortgenerator</Divider>
                        <Form
                            labelCol={{span: 6}}
                            wrapperCol={{span: 16}}
                            layout="horizontal"
                        >
                            <Form.Item label="Generator Modus" name="mode">
                                <Radio.Group defaultValue='spelling'>
                                    <Radio.Button value="large">Zufällig</Radio.Button>
                                    <Radio.Button value="spelling">Satzbau</Radio.Button>
                                    <Radio.Button value="camelcase">Eigenname</Radio.Button>
                                    <Radio.Button value="random">Stil</Radio.Button>
                                    <Radio.Button value="random">Wortart</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Generator Modus" name="mode">
                                <Radio.Group defaultValue='spelling'>
                                    <Radio.Button value="large">Zufällig</Radio.Button>
                                    <Radio.Button value="spelling">Satzbau 1</Radio.Button>
                                    <Radio.Button value="camelcase">Satzbau 2</Radio.Button>
                                    <Radio.Button value="random">Satzbau 3</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Wortlänge" name="length">
                                <Radio.Group defaultValue={wordLength.medium} onChange={(event) =>setOptionWordLength(event.target.value)}>
                                    <Radio.Button value={wordLength.short}>kurz</Radio.Button>
                                    <Radio.Button value={wordLength.medium}>mittel</Radio.Button>
                                    <Radio.Button value={wordLength.long}>lang</Radio.Button>
                                    <Radio.Button value={wordLength.all}>alle</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Generator Optionen" name="options">
                                <Radio.Group defaultValue='alliteration'>
                                    <Radio.Button value="alliteration">Alliteration</Radio.Button>
                                    <Radio.Button value="5">CamelCase</Radio.Button>
                                    <Radio.Button value="random">Zufällig groß</Radio.Button>
                                    <Radio.Button value="large">Large</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Generieren">
                                <Button style={{marginBottom: '10px'}} onClick={generate}>Generieren</Button>
                            </Form.Item>
                        </Form>
                        <Divider orientation="left">Passwortoptionen</Divider>
                        <Form
                            labelCol={{span: 6}}
                            wrapperCol={{span: 16}}
                            layout="horizontal"
                        >
                            <Form.Item label="Worttrennung" name="size">
                                <Radio.Group defaultValue={spacing.none} onChange={changeSpacing}>
                                    <Radio.Button value={spacing.none}>Nein</Radio.Button>
                                    <Radio.Button value={spacing.spaces}>Leerzeichen</Radio.Button>
                                    <Radio.Button value={spacing.random}>Zufälliges Sonderzeichen</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Groß-/Kleinschreibung" name="size">
                                <Radio.Group defaultValue='spelling'>
                                    <Radio.Button value="spelling">Rechtschreibung</Radio.Button>
                                    <Radio.Button value="camelcase">CamelCase</Radio.Button>
                                    <Radio.Button value="random">Zufällig groß</Radio.Button>
                                    <Radio.Button value="large">Large</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Form Size" name="size">
                                <Radio.Group>
                                    <Radio.Button value="small">Small</Radio.Button>
                                    <Radio.Button value="default">Default</Radio.Button>
                                    <Radio.Button value="large">Large</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Select">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                            <Form.Item label="InputNumber">
                                <InputNumber/>
                            </Form.Item>
                            <Form.Item label="Alliteration">
                                <Switch/>
                            </Form.Item>
                            <Form.Item label="Switch">
                                <Switch/>
                            </Form.Item>
                        </Form>

                    </>
                </div>
            </Layout>
            <Layout>
                <div className="pgcontent">
                    <Pwds />
                </div>
            </Layout>
        </>
    )

}