import React, {useState} from "react";
import '../css/PGenerator.css'
import {Button, Divider, Layout, Menu, Space, Tabs, Typography} from "antd";
import {Form, Input, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch,} from 'antd';
import axios from "axios";
import ContentTabs from "../components/ContentTabs";
import ProjectsOverview from "./projects/Overview";
import UpdateLogs from "./projects/UpdateLogs";
import Todo from "./projects/Todo";
import SiderTabs from "../components/SiderTabs";

const {Title, Text} = Typography
const {Sider} = Layout


export default function PasswordGenerator() {

    const [sentences, setSentences] = useState <string[]>([])
    const [passwords, setPasswords] = useState <string[]>([])

    function menuClicked() {
        let array = new Uint8Array(1);
        window.crypto.getRandomValues(array);
        console.log(array)
    }

    function generate() {
        for (let i = 0; i < 5; i++) {
            axios.get('http://localhost:8000/api/sentence')
                .then(res => {
                    let sent = ''
                    Object.values(res.data).forEach((item) => {
                        sent += item +' '
                    })
                    sent = sent.trimEnd()
                    setSentences(items => {
                        const sents = [...items]
                        sents[i] = sent
                        return sents
                    })
                }).catch(() => {
            })
        }
    }

    function makePasswords () {

    }

    return (
        <>
            <Layout>
                <div className="pgsider">
                    <>
                        <Divider orientation="left" style={{marginTop:'8px', color:'lightgreen'}}>Wortbasis</Divider>
                        <Space direction='vertical' style={{width:'100%'}}>
                            <Input placeholder="Eingabe oder generieren" value={sentences[0]}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[1]}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[2]}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[3]}/>
                            <Input placeholder="Eingabe oder generieren" value={sentences[4]}/>
                        </Space>
                        <Divider orientation="left">Wortgenerator</Divider>
                        <Form
                            labelCol={{span: 6}}
                            wrapperCol={{span: 16}}
                            layout="horizontal"
                        >
                            <Form.Item label="Generator Modus" name="size">
                                <Radio.Group defaultValue='spelling'>
                                    <Radio.Button value="spelling">Satzbau 1</Radio.Button>
                                    <Radio.Button value="camelcase">Satzbau 2</Radio.Button>
                                    <Radio.Button value="random">Satzbau 3</Radio.Button>
                                    <Radio.Button value="large">Zufällig</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Generator Optionen" name="size">
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
                                <Radio.Group defaultValue="none">
                                    <Radio.Button value="none">Keine</Radio.Button>
                                    <Radio.Button value="spaces">Leerzeichen</Radio.Button>
                                    <Radio.Button value="random">Zufälliges Sonderzeichen</Radio.Button>
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
                    <div> </div>
                </div>
            </Layout>
        </>
    )

}