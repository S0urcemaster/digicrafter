import React, {useEffect, useState} from "react";
import '../css/DigiBoy.css'
import {Button, Col, Divider, Layout, Modal, Row, Space, Table, Typography} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import {Form, Input, Radio} from 'antd';
import axios from "axios";
import ButtonCheckboxRow from "../components/ButtonCheckboxRow";
import UndisplayContainer from "../components/UndisplayContainer";
import {ColumnsType} from "antd/lib/table";
import ExternalLink from "../components/ExternalLink";
import InternalLink from "../components/InternalLink";

enum FormTitle {
    new = 'New Task', edit = 'Edit Task'
}

type FilteredInfo = {
    name: string,
    value: string,
    address: string,
}

type SortedInfo = {
    name: string,
    columnKey: string,
    order: string,
    address: string,
    age: string,
}

type Task = {
    name: string,
    description: string,
    command: string,
    nextTimeout: Date | undefined,
    repeat: boolean,
    actions: string[]
}

// type FilteredInfo = {
//     name: string | null,
//     value: string | null,
//     address: string | null,
// }
//
// type SortedInfo = {
//     name: string | null,
//     columnKey: string | null,
//     order: string | null,
//     address: string | null,
//     age: string | null,
// }

export default function () {

    const [infoVisible, setInfoVisible] = useState(false)
    const [formTitle, setFormTitle] = useState(FormTitle.new)
    // const [sortedInfo, setSortedInfo] = useState <SortedInfo | null>(null)
    // const [filteredInfo, setFilteredInfo] = useState <FilteredInfo | null>(null)
    const columns:ColumnsType<Task> = [
        {
            title: 'Name',
            dataIndex: 'name',
            // specify the condition of filtering result
            // here is that finding the name started with `value`
            sorter: (a:any, b:any) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Command',
            dataIndex: 'command',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
            ],
            onFilter: (value:any, record:any) => record.name.indexOf(value) === 0,
            sorter: (a:any, b:any) => a.age - b.age,
            defaultSortOrder: 'ascend',
        },
        {
            title: 'Timeout',
            dataIndex: 'timeout',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Repeat',
            dataIndex: 'repeat',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
        },
    ];

    const data:Task[] = [
        {
            name: 'dump_words',
            description: 'Make database backup',
            command: 'postgresDump',
            nextTimeout: undefined,
            repeat: false,
            actions: ['Run', 'Delete'],
        },
        {
            name: 'start_digi',
            description: 'digicrafter> npm start',
            command: 'runOS',
            nextTimeout: undefined,
            repeat: false,
            actions: [],
        },
        {
            name: 'deploy_digicrafter',
            description: 'Run build > copy server',
            command: '',
            nextTimeout: undefined,
            repeat: false,
            actions: [],
        },
        {
            name: 'cold_start',
            description: 'Open all after os restart',
            command: 'runOS',
            nextTimeout: undefined,
            repeat: false,
            actions: [],
        },
        {
            name: 'gelbersack',
            description: 'Gelber Sack Termine',
            command: 'mailto',
            nextTimeout: new Date(),
            repeat: false,
            actions: [],
        },
        // {
        //     name: '',
        //     description: '',
        //     command: '',
        //     timeout: undefined,
        //     repeat: false,
        //     actions: [],
        // },
    ];

    function onChange(pagination:any, filters:any, sorter:any, extra:any) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <>
            <Modal
                visible={infoVisible}
                title="Digi Commander Info"
                onOk={() => setInfoVisible(false)}
                onCancel={() => setInfoVisible(false)}
                footer={[
                    <Button key="ok" type="primary" onClick={() => setInfoVisible(false)}>
                        OK
                    </Button>,
                ]}
            >
                <p>test</p>
            </Modal>
                <div className="dclist">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography.Title level={1}>Digi Boy Programs</Typography.Title>
                        <Button className="infobutton" size="large" icon={<InfoCircleOutlined/>}
                                onClick={() => setInfoVisible(true)}/>
                    </div>
                    <Table size="small" columns={columns as any} dataSource={data} onChange={onChange} />
                </div>
                <div className="dcform">
                    <Typography.Title level={1}>{formTitle}</Typography.Title>
                    {/*<Space direction='vertical' style={{width: '100%'}}>*/}
                    {/*    <Input placeholder="Eingabe oder generieren" value={sentences[0]}*/}
                    {/*           onChange={(event) => changeSentence(event, 0)}/>*/}
                    {/*    <Input placeholder="Eingabe oder generieren" value={sentences[1]}*/}
                    {/*           onChange={(event) => changeSentence(event, 1)}/>*/}
                    {/*    <Input placeholder="Eingabe oder generieren" value={sentences[2]}*/}
                    {/*           onChange={(event) => changeSentence(event, 2)}/>*/}
                    {/*    <Input placeholder="Eingabe oder generieren" value={sentences[3]}*/}
                    {/*           onChange={(event) => changeSentence(event, 3)}/>*/}
                    {/*    <Input placeholder="Eingabe oder generieren" value={sentences[4]}*/}
                    {/*           onChange={(event) => changeSentence(event, 4)}/>*/}
                    {/*</Space>*/}
                    {/*<Divider orientation="left">Wortgenerator</Divider>*/}
                    {/*<Form*/}
                    {/*    labelCol={{span: 6}}*/}
                    {/*    wrapperCol={{span: 16}}*/}
                    {/*    layout="horizontal"*/}
                    {/*>*/}
                    {/*    <Form.Item label="Generator Modus" name="mode">*/}
                    {/*        <Radio.Group defaultValue='Satzbau' options={modeOptions} optionType="button"/>*/}
                    {/*    </Form.Item>*/}
                    {/*    <UndisplayContainer visible={true}>*/}
                    {/*        <Row style={{marginBottom: '10px'}}>*/}
                    {/*            <Col span={6}/>*/}
                    {/*            <Col span={16}>*/}
                    {/*                <Radio.Group defaultValue='Satzbau 1' options={syntaxOptions} optionType="button"/>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </UndisplayContainer>*/}
                    {/*    <Form.Item label="Wortlänge" name="length">*/}
                    {/*        <Radio.Group defaultValue={wordLength.medium}*/}
                    {/*                     onChange={(event) => setOptionWordLength(event.target.value)}>*/}
                    {/*            <Radio.Button value={wordLength.short}>kurz</Radio.Button>*/}
                    {/*            <Radio.Button value={wordLength.medium}>mittel</Radio.Button>*/}
                    {/*            <Radio.Button value={wordLength.long}>lang</Radio.Button>*/}
                    {/*            <Radio.Button value={wordLength.all}>alle</Radio.Button>*/}
                    {/*        </Radio.Group>*/}
                    {/*    </Form.Item>*/}
                    {/*    /!*<Form.Item label="Generator Optionen" name="options">*!/*/}
                    {/*    /!*    <Radio.Group defaultValue='alliteration'>*!/*/}
                    {/*    /!*        <Radio.Button value="alliteration">Alliteration</Radio.Button>*!/*/}
                    {/*    /!*        <Radio.Button value="5">CamelCase</Radio.Button>*!/*/}
                    {/*    /!*        <Radio.Button value="random">Zufällig groß</Radio.Button>*!/*/}
                    {/*    /!*        <Radio.Button value="large">Large</Radio.Button>*!/*/}
                    {/*    /!*    </Radio.Group>*!/*/}
                    {/*    /!*</Form.Item>*!/*/}
                    {/*    <Form.Item label="Generieren">*/}
                    {/*        <Button style={{marginBottom: '10px', color: '#5cd61f'}}*/}
                    {/*                onClick={generate}>Generieren</Button>*/}
                    {/*    </Form.Item>*/}
                    {/*</Form>*/}
                    <Divider orientation="left">Passwortoptionen</Divider>
                    {/*<Form*/}
                    {/*    labelCol={{span: 6}}*/}
                    {/*    wrapperCol={{span: 16}}*/}
                    {/*    layout="horizontal"*/}
                    {/*>*/}
                    {/*    <Form.Item label="Worttrennung" name="spacing">*/}
                    {/*        <Radio.Group defaultValue={spacing.none} onChange={changeSpacing}>*/}
                    {/*            <Radio.Button value={spacing.none}>Ohne</Radio.Button>*/}
                    {/*            <Radio.Button value={spacing.spaces}>Leerzeichen</Radio.Button>*/}
                    {/*            <Radio.Button value={spacing.user}>Eigene Zeichen</Radio.Button>*/}
                    {/*            <Radio.Button value={spacing.specialChars}>Sonderzeichen</Radio.Button>*/}
                    {/*        </Radio.Group>*/}
                    {/*    </Form.Item>*/}
                    {/*    <UndisplayContainer visible={displayDigits}>*/}
                    {/*        <Row style={{marginBottom:'10px'}}>*/}
                    {/*            <Col span={6}/>*/}
                    {/*            <Col span={16}>*/}
                    {/*                <Radio.Group defaultValue='Folge' options={numbersOptions} optionType="button"/>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*        <Row style={{marginBottom:'10px'}}>*/}
                    {/*            <Col span={6}/>*/}
                    {/*            <Col span={16}>*/}
                    {/*                <Input placeholder="Eingabe" onChange={changeChars} value={userChars} />*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </UndisplayContainer>*/}
                    {/*    <UndisplayContainer visible={displaySpecial}>*/}
                    {/*        <Row style={{marginBottom:'10px'}}>*/}
                    {/*            <Col span={6}/>*/}
                    {/*            <Col span={16}>*/}
                    {/*                <ButtonCheckboxRow selected={specialSelected} items={specialChars}/>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </UndisplayContainer>*/}
                    {/*    <Form.Item label="Groß-/Kleinschreibung" name="capitals">*/}
                    {/*        <Radio.Group defaultValue={capitals.spelling} onChange={changeCapitals}>*/}
                    {/*            <Radio.Button value={capitals.spelling}>Wie Eingabe</Radio.Button>*/}
                    {/*            <Radio.Button value={capitals.camelcase}>CamelCase</Radio.Button>*/}
                    {/*            <Radio.Button value={capitals.random}>Zufällig</Radio.Button>*/}
                    {/*        </Radio.Group>*/}
                    {/*    </Form.Item>*/}
                    {/*    <Form.Item label="Ersetzungen" name="size">*/}
                    {/*        <Col span={16}>*/}
                    {/*            <ButtonCheckboxRow selected={replacementsSelected} items={replacements}/>*/}
                    {/*        </Col>*/}
                    {/*    </Form.Item>*/}
                    {/*</Form>*/}
                </div>
        </>
    )

}