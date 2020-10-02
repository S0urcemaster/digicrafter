import React, {useEffect, useState} from "react";
import '../css/PGenerator.css'
import {Button, Col, Divider, Layout, Modal, Row, Space, Typography} from "antd";
import { InfoCircleOutlined } from '@ant-design/icons';
import {Form, Input, Radio} from 'antd';
import axios from "axios";
import {RadioChangeEvent} from "antd/lib/radio";
import ButtonCheckboxRow from "../components/ButtonCheckboxRow";
import UndisplayContainer from "../components/UndisplayContainer";
import {random} from "../lib/random";
import ExternalLink from "../components/ExternalLink";

const {Title} = Typography

enum spacing {
    none, spaces, specialChars,
    numbers, user
}

enum capitals {
    spelling, camelcase, random
}

enum wordLength {
    short = 'short', medium = 'medium', long = 'long', all = 'all'
}

export default function () {

    const [sentences, setSentences] = useState <string[]>([])
    const [sentence, setSentence] = useState()
    const [passwords, setPasswords] = useState <string[]>([])
    const [passwordHistory, setPasswordhistory] = useState <string[]>([])

    const [optionSpacing, setOptionSpacing] = useState(spacing.none)
    const [optionCapitals, setOptionCapitals] = useState(capitals.spelling)
    const [optionWordLength, setOptionWordLength] = useState(wordLength.medium)
    const [displaySpecial, setDisplaySpecial] = useState(false)
    const [displayDigits, setDisplayDigits] = useState(false)

    const specialChars = new Map([['_', true], ['!', false], ['"', false], ['#', false], ['$', false], ['%', false], ['&', false], ["'", false], ['(', false], [')', false], ['*', false], ['+', false], ['-', false], ['/', false]])
    const [specialActive, setSpecialActive] = useState <string[]>([])

    const [userChars, setUserChars] = useState ('12345678')

    const replacements = new Map([['B > 3', false], ['l > 1', false], ['A > 4', false], ['O > 0', false], ['G > 6', false], ['g > 9', false], ["T > 7", false], ['Z > 2', false]])
    const [replacementsActive, setReplacementsActive] = useState <string[]>([])

    const [pwdResponse, setPwdResponse] = useState <string[]>([])

    const [infoVisible, setInfoVisible] = useState(false)

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
        { label: 'Zufällig', value: 'Zufällig', disabled: true },
        { label: 'Folge', value: 'Folge'},
    ];
    const replaceOptions = [
        { label: 'B > 3' },
    ];

    useEffect(() => {
        generate()
    }, [])

    useEffect(() => {
        genPasswords(sentences)
    }, [specialActive])

    useEffect(() => {
        genPasswords(sentences)
    }, [replacementsActive])

    useEffect(() => {
        genPasswords(sentences)
    }, [sentences])

    useEffect(() => {
        genPasswords(sentences)
    }, [userChars])

    useEffect(() => {
        genPasswords(sentences)
    }, [optionSpacing])

    useEffect(() => {
        genPasswords(sentences)
    }, [optionCapitals])

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

    let sentRes:string[] = []

    function evalResponse(res:string) {
        const sent = res[0].toUpperCase() +res.slice(1)
        sentRes.push(sent)
        setSentence(sent)
        if(sentRes.length === 5) {
            setPasswordhistory(passwordHistory.concat(passwords.slice(0, passwords.length)))
            genPasswords(sentRes)
            sentRes = []
        }
    }

    function genPasswords(sent: string[]) {
        setPasswords(sent.map(sent => {
            switch (optionCapitals) {
                case capitals.spelling:
                    return sent
                case capitals.camelcase:
                    return capitalsCamelCase(sent)
                case capitals.random:
                    return capitalsRandom(sent)
                default:
                    return ''
            }}).map(sent => {
                return replaceLetters(sent)
            }).map(sent => {
            switch (optionSpacing) {
                case spacing.none:
                    return sent.replace(/\s/g, '')
                case spacing.spaces:
                    return sent
                case spacing.specialChars:
                    return spacingSpecial(sent)
                case spacing.numbers:
                    return sent
                case spacing.user:
                    return spacingUser(sent)
                default:
                    return ''
            }})
        )
    }

    function replaceLetters (sent: string) : string {
        return sent.split(' ').map(word => {
            return word.split('').map(letter => {
                let repl = letter
                if (replacementsActive.length > 0) {
                    replacementsActive.forEach(rep => {
                        if (letter !== ' ' && rep.includes(letter)) repl = rep.slice(4, 5)
                    })
                }
                return repl
            }).join('')
        }).join(' ')
    }

    function capitalsCamelCase(sent: string) : string {
        return sent.split(' ').map(word => {
            return word[0].toUpperCase() + word.slice(1)
        }).join(' ')
    }

    function capitalsRandom(sent: string) : string {
        return sent.split(' ').map(word => {
            return word.split('').map(letter => {
                return random(1, 2) === 1 ? letter.toUpperCase() : letter.toLowerCase()
            }).join('')
        }).join(' ')
    }

    function spacingUser (sent: string) :string {
        if(userChars.length === 0) return sent
        let charRot = 0
        let pwd = ''
        for(let i = 0; i<sent.length; i++) {
            if(sent[i] === ' ') {
                pwd += userChars[charRot++]
                if (charRot === userChars.length) charRot = 0
                continue
            }
            pwd += sent[i]
        }
        return pwd
    }

    // function nextUserChar

    function spacingSpecial (sent: string) :string {
        if(specialActive.length === 0) return sent
        let pwd = ''
        for(let i = 0; i<sent.length; i++) {
            if(sent[i] === ' ') {
                pwd += specialActive[random(0, specialActive.length-1)]
                continue
            }
            pwd += sent[i]
        }
        return pwd
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
            case spacing.user:
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

    function changeCapitals(event: RadioChangeEvent) {
        switch (event.target.value) {
            case capitals.spelling:
                break;
            case capitals.camelcase:
                break;
            case capitals.random:
                break;
        }
        setOptionCapitals(event.target.value)
    }

    function specialSelected(selected: string[]) {
        setSpecialActive(selected)
    }

    function replacementsSelected(selected: string[]) {
        setReplacementsActive(selected)
    }

    function digitSelected(selected: Map<string, boolean>) {

    }

    function changeChars(event:React.ChangeEvent<HTMLInputElement>) {
        setUserChars(event.target.value)
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
            <Modal
                visible={infoVisible}
                title="Hinweise zu Passwörtern"
                onOk={() => setInfoVisible(false)}
                onCancel={() => setInfoVisible(false)}
                footer={[
                    <Button key="ok" type="primary" onClick={() => setInfoVisible(false)}>
                        OK
                    </Button>,
                ]}
            >
                <p>Die bislang geltenden Regeln für sichere Passwörter gelten als überholt:</p>
                <ExternalLink href="https://www.deutschlandfunknova.de/beitrag/bill-burr-unsere-passwort-regeln-taugen-nichts">https://www.deutschlandfunknova.de/beitrag/bill-burr-unsere-passwort-regeln-taugen-nichts</ExternalLink>
                <br />
                <p style={{paddingTop:'14px'}}>Ein Passwort mit 8 Zeichen, Klein-/Großbuchstaben, Zahlen, Sonderzeichen hat etwa 70^8 = 576 Billionen Kobinationen.</p>
                <p>Ein Passwort mit 5 Wörtern aus einem minimalen Wortpool von 1000 Wörtern (Deutsch hat 75.000 Wörter) hat bereits 1000^5 = 1 Billiarde Kombinationen,
                also fast doppelt so viele, wie das schwer zu merkende und schreibende Passwort mit 8 Zeichen.</p>
                <p>(Mit 75.000 Wörtern sind das 2,3 Quadrillionen Kombinationen, 4 Milliarden mal mehr als ein kryptisches 8-Zeichen Passwort.)</p>
                <p>Ein Passwort mit 5 willkürlichen Wörtern ist auch schwer zu merken, es ist aber besser zu lesen und zu schreiben.
                Die Browser machen es einem leicht, indem sie verwendete Passwörter zwischenspeichern und ein verlorenes Passwort kann man leicht über den
                Email Account wieder herstellen. In höher gesicherten Umgebungen wie Server oder Online Banking Zugängen ist das jedoch nicht empfehlenswert.</p>
                <p>Bringt man Wörter in eine sinnvolle, besser zu merkende Abfolge, verringert das die Zahl der möglichen Kombinationen (sofern man
                    weiß, welche Abfolge verwendet wurde). Man bedenke jedoch,
                dass besser gesicherte Zugänge die Zahl der Fehlversuche begrenzen. Meistens ist nach 3 Fehleingaben Schluss und der Zugang wird blockiert.
                Deshalb ist ein 4-stelliges Passwort, bestehend nur aus Zahlen, für den Banking-Zugang völlig ausreichend, während die Bitcoin-Wallet Passphrase,
                bestehend aus 39 Zeichen, die man endlos durchprobieren könnte, mit einem heutigen Computer, nicht in Milliarden Jahren geknackt werden kann.</p>
                <ExternalLink href="https://www.betterbuys.com/estimating-password-cracking-times/">https://www.betterbuys.com/estimating-password-cracking-times/</ExternalLink>
                <p style={{paddingTop:'14px'}}>Die Länge eines Passworts ist also maßgebend für die Sicherheit. Dabei kann man sich noch eine Weile den Luxus leisten, ein bestimmtes Schema,
                nämlich bekannte Wörter zu verwenden, um den "Passwortkomfort" zu erhöhen. Zusätzlich noch Zahlen und Sonderzeichen hinzufügen sollte
                man nur dann, wenn es die Lesbarkeit nicht wesentlich erschwert.</p>
                <ExternalLink href="https://password.kaspersky.com/de/">https://password.kaspersky.com/de/</ExternalLink><br />
                <ExternalLink href="https://www.my1login.com/resources/password-strength-test/">https://www.my1login.com/resources/password-strength-test/</ExternalLink>
            </Modal>
            <Layout>
                <div className="pgsider">
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Title level={1}>Readable Password Generator</Title>
                        <Button size="large" icon={<InfoCircleOutlined />} onClick={() => setInfoVisible(true)} />
                    </div>
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
                                <Radio.Button value={spacing.user}>Eigene Zeichen</Radio.Button>
                                <Radio.Button value={spacing.specialChars}>Sonderzeichen</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <UndisplayContainer visible={displayDigits}>
                            <Row style={{marginBottom:'10px'}}>
                                <Col span={6}/>
                                <Col span={16}>
                                    <Radio.Group defaultValue='Folge' options={numbersOptions} optionType="button"/>
                                </Col>
                            </Row>
                            <Row style={{marginBottom:'10px'}}>
                                <Col span={6}/>
                                <Col span={16}>
                                    <Input placeholder="Eingabe" onChange={changeChars} value={userChars} />
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
                            <Radio.Group defaultValue={capitals.spelling} onChange={changeCapitals}>
                                <Radio.Button value={capitals.spelling}>Wie Eingabe</Radio.Button>
                                <Radio.Button value={capitals.camelcase}>CamelCase</Radio.Button>
                                <Radio.Button value={capitals.random}>Zufällig</Radio.Button>
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
                </div>
            </Layout>
            <Layout>
                <div className="pgcontent">
                    <Title level={1}>Output</Title>
                    <Pwds />
                </div>
            </Layout>
        </>
    )

}