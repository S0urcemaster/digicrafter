import React, {useEffect, useState} from "react";
import '../css/PGenerator.css'
import {Button, Col, Divider, Layout, Row, Space, Typography} from "antd";
import {Form, Input, Radio} from 'antd';
import axios from "axios";
import {RadioChangeEvent} from "antd/lib/radio";
import ButtonCheckboxRow from "../components/ButtonCheckboxRow";
import UndisplayContainer from "../components/UndisplayContainer";
import {random} from "../lib/random";

const {Title} = Typography

enum spacing {
    none, spaces, specialChars,
    numbers, digits
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
    const [displaySpecial, setDisplaySpecial] = useState(false)
    const [displayDigits, setDisplayDigits] = useState(false)

    const [specialChars, setSpecialChars] = useState <Map<string, boolean>>(new Map(
        [['!', true], ['"', true], ['#', true], ['$', true], ['%', true], ['&', true], ["'", true], ['(', true], [')', true], ['*', true], ['+', true], ['-', true], ['/', true]]))

    const [replacements, setReplacements] = useState <Map<string, boolean>>(new Map(
        [['B > 3', true], ['l > 1', true], ['A > 4', true], ['O > 0', true], ['G > 6', true], ['g > 9', true], ["T > 7", true], ['Z > 2', true]]))

    const [pwdResponse, setPwdResponse] = useState <string[]>([])

    const modeOptions = [
        { label: 'Zufällig', value: 'Zufällig', disabled: true },
        { label: 'Satzbau', value: 'Satzbau' },
        { label: 'Eigenname', value: 'Eigenname', disabled: true },
        { label: 'Stil', value: 'Stil', disabled: true },
        { label: 'Wortart', value: 'Wortart', disabled: true },
    ];
    const syntaxOptions = [
        { label: 'Zufällig', value: 'Zufällig', disabled: true },
        { label: 'Satzbau 1', value: 'Satzbau 1' },
        { label: 'Satzbau 2', value: 'Satzbau 2', disabled: true },
        { label: 'Satzbau 3', value: 'Satzbau 3', disabled: true },
    ];
    const numbersOptions = [
        { label: 'Eigene', value: 'Eigene'},
        { label: 'Folge', value: 'Folge', disabled: true },
    ];
    const replaceOptions = [
        { label: 'B > 3' },
    ];

    useEffect(() => {
        const specialActive:string[] = []
        specialChars.forEach((value, key) => {
            if(value) {
                specialActive.push(key)
            }
        })
        setPasswords(sentences.map(sent => {
            let ret = ''
            for(let i = 0; i<sent.length; i++) {
                if(sent[i] === ' ') {
                    ret += specialActive[random(0, specialActive.length-1)]
                    continue
                }
                ret += sent[i]
            }
            return ret
        }))
    }, [specialChars])

    useEffect(() => {
        genPasswords(sentences)
    }, [sentences])

    useEffect(() => {
        genPasswords(sentences)
    }, [optionSpacing])

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
        setPasswords(pwds.map(pwd => {
            switch (optionSpacing) {
                case spacing.none:
                    return pwd.replace(/\s/g, '')
                case spacing.spaces:
                    return pwd
                case spacing.specialChars:
                    setSpecialChars(new Map(specialChars))
                    return pwd
                case spacing.numbers:
                    return pwd
                case spacing.digits:
                    return pwd
                default:
                    return ''
            }
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
    }

    function changeSpacing(event: RadioChangeEvent) {
        switch (event.target.value) {
            case spacing.none:
                setDisplaySpecial(false)
                setDisplayDigits(false)
                break;
            case spacing.spaces:
                setDisplaySpecial(false)
                setDisplayDigits(false)
                break;
            case spacing.digits:
                setDisplayDigits(true)
                setDisplaySpecial(false)
                break;
            case spacing.specialChars:
                setDisplayDigits(false)
                setDisplaySpecial(true)
                break;
        }
        setOptionSpacing(event.target.value)
    }

    function specialSelected(selected: Map<string, boolean>) {
        setSpecialChars(selected)
    }

    function replacementsSelected(selected: Map<string, boolean>) {
        setReplacements(selected)
    }

    function digitSelected(selected: Map<string, boolean>) {

    }

    function changeChars(event:React.ChangeEvent<HTMLInputElement>) {

    }

    const Pwds = () => <>
        {Object.values(passwords).map((pwd, index) =>
            <div key={index}>
                <Title style={{marginBottom:'2px'}} level={4}>{pwd}</Title>
                <p style={{fontSize:'13px'}}>{sentences[index]}</p>
            </div>
        )}
        <Divider />
        {Object.values(passwordHistory).map((pwd, index) =>
            <div key={index}>
                <Title style={{marginBottom:'2px'}} level={4}>{pwd}</Title>
            </div>
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
                                <Radio.Group defaultValue='Satzbau' options={modeOptions} optionType="button"/>
                            </Form.Item>
                            <UndisplayContainer visible={true}>
                                <Row style={{marginBottom:'10px'}}>
                                    <Col span={6}/>
                                    <Col span={16}>
                                        <Radio.Group defaultValue='Satzbau 1' options={syntaxOptions} optionType="button"/>
                                    </Col>
                                </Row>
                            </UndisplayContainer>
                            <Form.Item label="Wortlänge" name="length">
                                <Radio.Group defaultValue={wordLength.medium} onChange={(event) =>setOptionWordLength(event.target.value)}>
                                    <Radio.Button value={wordLength.short}>kurz</Radio.Button>
                                    <Radio.Button value={wordLength.medium}>mittel</Radio.Button>
                                    <Radio.Button value={wordLength.long}>lang</Radio.Button>
                                    <Radio.Button value={wordLength.all}>alle</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            {/*<Form.Item label="Generator Optionen" name="options">*/}
                            {/*    <Radio.Group defaultValue='alliteration'>*/}
                            {/*        <Radio.Button value="alliteration">Alliteration</Radio.Button>*/}
                            {/*        <Radio.Button value="5">CamelCase</Radio.Button>*/}
                            {/*        <Radio.Button value="random">Zufällig groß</Radio.Button>*/}
                            {/*        <Radio.Button value="large">Large</Radio.Button>*/}
                            {/*    </Radio.Group>*/}
                            {/*</Form.Item>*/}
                            <Form.Item label="Generieren">
                                <Button style={{marginBottom: '10px', color:'#5cd61f'}} onClick={generate}>Generieren</Button>
                            </Form.Item>
                        </Form>
                        <Divider orientation="left">Passwortoptionen</Divider>
                        <Form
                            labelCol={{span: 6}}
                            wrapperCol={{span: 16}}
                            layout="horizontal"
                        >
                            <Form.Item label="Worttrennung" name="spacing">
                                <Radio.Group defaultValue={spacing.none} onChange={changeSpacing}>
                                    <Radio.Button value={spacing.none}>Ohne</Radio.Button>
                                    <Radio.Button value={spacing.spaces}>Leerzeichen</Radio.Button>
                                    <Radio.Button value={spacing.digits}>Eigene Zeichen</Radio.Button>
                                    <Radio.Button value={spacing.specialChars}>Sonderzeichen</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <UndisplayContainer visible={displayDigits}>
                                <Row style={{marginBottom:'10px'}}>
                                    <Col span={6}/>
                                    <Col span={16}>
                                        <Radio.Group defaultValue='Eigene' options={numbersOptions} optionType="button"/>
                                    </Col>
                                </Row>
                                <Row style={{marginBottom:'10px'}}>
                                    <Col span={6}/>
                                    <Col span={16}>
                                        <Input placeholder="Eingabe" onChange={changeChars} />
                                    </Col>
                                </Row>
                            </UndisplayContainer>
                            <UndisplayContainer visible={displaySpecial}>
                                <Row style={{marginBottom:'10px'}}>
                                    <Col span={6}/>
                                    <Col span={16}>
                                        <ButtonCheckboxRow selected={specialSelected} items={specialChars}/>
                                    </Col>
                                </Row>
                            </UndisplayContainer>
                            <Form.Item label="Groß-/Kleinschreibung" name="capitals">
                                <Radio.Group defaultValue='spelling'>
                                    <Radio.Button value="spelling">Rechtschreibung</Radio.Button>
                                    <Radio.Button value="camelcase">CamelCase</Radio.Button>
                                    <Radio.Button value="random">Zufällig</Radio.Button>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Ersetzungen" name="size">
                                    <Col span={16}>
                                        <ButtonCheckboxRow selected={replacementsSelected} items={replacements}/>
                                    </Col>
                            </Form.Item>
                            {/*<Form.Item label="Form Size" name="size">*/}
                            {/*    <Radio.Group>*/}
                            {/*        <Radio.Button value="small">Small</Radio.Button>*/}
                            {/*        <Radio.Button value="default">Default</Radio.Button>*/}
                            {/*        <Radio.Button value="large">Large</Radio.Button>*/}
                            {/*    </Radio.Group>*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item label="Select">*/}
                            {/*    <Select>*/}
                            {/*        <Select.Option value="demo">Demo</Select.Option>*/}
                            {/*    </Select>*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item label="InputNumber">*/}
                            {/*    <InputNumber/>*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item label="Alliteration">*/}
                            {/*    <Switch/>*/}
                            {/*</Form.Item>*/}
                            {/*<Form.Item label="Switch">*/}
                            {/*    <Switch/>*/}
                            {/*</Form.Item>*/}
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