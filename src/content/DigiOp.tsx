import React, {useEffect, useState, Suspense} from "react";
import '../css/DigiOp.css'
import {Button, Modal, Select, Space, Table, Typography} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import {Form, Input, Radio} from 'antd';
import {ColumnsType} from "antd/lib/table";
import {Nav} from "../lib/Nav";
import dbImage from "../img/db.png"
import {idb} from "../lib/data/idb";
import * as db from "../lib/data/digiop";
import BasicForm from "./digiop/BasicForm";
import {BrowserNotify, run} from "../lib/Programs";
import {selfEP} from "../lib/digiop/Endpoints";

enum FormTitle {
    new = 'New Operation', edit = 'Edit Operation'
}

enum ConnetctionButtonCaption {
    test = 'Test', save = 'Save'
}

// type FilteredInfo = {
//     name: string,
//     value: string,
//     address: string,
// }
//
// type SortedInfo = {
//     name: string,
//     columnKey: string,
//     order: string,
//     address: string,
//     age: string,
// }

type Program = {
    name: string,
    description: string,
    status: string,
    nextTimeout: Date | undefined,
    lastrun: Date,
    actions: string[]
}

type Connection = {
    name: string,
    description: string,
    path: string,
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
    const [connectionButtonCaption, setConnectionButtonCaption] = useState(ConnetctionButtonCaption.test)
    // const [sortedInfo, setSortedInfo] = useState <SortedInfo | null>(null)
    // const [filteredInfo, setFilteredInfo] = useState <FilteredInfo | null>(null)

    const programsColumns:ColumnsType<Program> = [
        {title: 'Name', dataIndex: 'name',
            sorter: (a:any, b:any) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {title: 'Description', dataIndex: 'description',
        },
        {title: 'Status', dataIndex: 'status',
            filters: [{text: 'Joe', value: 'Joe',}, {text: 'Jim', value: 'Jim',},],
            onFilter: (value:any, record:any) => record.name.indexOf(value) === 0,
            sorter: (a:any, b:any) => a.age - b.age,
            defaultSortOrder: 'ascend',
        },
        {title: 'Timeout', dataIndex: 'timeout',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {title: 'Last Run', dataIndex: 'lastrun',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {title: 'Actions',
            render: (record: Program) => <>
                <Space>
                    <Typography.Link onClick={() => runProgram(record)}>Run</Typography.Link>
                    <Typography.Link>Delete</Typography.Link>
                </Space>
            </>,
        },
    ];

    // let programs: DBProgram[] = []

    function runProgram (p: Program) {
        let programs: db.Program[] = []
        idb.dbPrograms.toArray().then((ps) => {
            programs = ps
        }).then(() => {
            const program = programs.find((program) => {
                return program.name === p.name
            })
            if (program) program.run()
            else alert(false)
        })
    }

    const connectionsColumns:ColumnsType<Connection> = [
        {title: 'Name', dataIndex: 'name',
            sorter: (a:any, b:any) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {title: 'Description', dataIndex: 'description',
        },
        {title: 'path', dataIndex: 'path',
            sorter: (a:any, b:any) => a.age - b.age,
            defaultSortOrder: 'ascend',
        },
        {title: 'Actions',
            render: () => <>
                <Space>
                    <Typography.Link>Connect</Typography.Link>
                    <Typography.Link>Disconnect</Typography.Link>
                </Space>
            </>,
        },
    ];

    const programsData:Program[] = [
        {name: 'notify:hello', description: 'Notify me!', status: 'inactive', nextTimeout: undefined, lastrun: new Date(), actions: ['Run', 'Delete'],},
        {name: 'sudo chmod', description: 'digicrafter> npm start', status: 'wait for timeout', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'push update', description: 'write update log and commit/push git', status: '', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'cold_start', description: 'Open all after os restart', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'gelbersack', description: 'Gelber Sack Termine', status: 'mailto', nextTimeout: new Date(), lastrun: new Date(), actions: [],},
        {name: 'digicrafter lines', description: 'count lines of code', status: 'sourcestats/lines', nextTimeout: undefined, lastrun: new Date(), actions: ['Run', 'Delete'],},
        {name: 'start_digi1', description: 'digicrafter> npm start', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'deploy_digicrafter1', description: 'Run build > copy server', status: 'sequence', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'cold_start1', description: 'Open all after os restart', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'gelbersack1', description: 'Gelber Sack Termine', status: 'mailto', nextTimeout: new Date(), lastrun: new Date(), actions: [],},
        {name: 'dump_words2', description: 'Make database backup', status: 'postgresDump', nextTimeout: undefined, lastrun: new Date(), actions: ['Run', 'Delete'],},
        {name: 'start_digi2', description: 'digicrafter> npm start', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'deploy_digicrafter2', description: 'Run build > copy server', status: 'sequence', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'cold_start2', description: 'Open all after os restart', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
        {name: 'gelbersack2', description: 'Gelber Sack Termine', status: 'mailto', nextTimeout: new Date(), lastrun: new Date(), actions: [],},
        // {name: '', description: '', command: '', nextTimeout: undefined, lastrun: false, actions: [],},
    ];

    const connectionsData:Connection[] = [
        {name: 'self', description: navigator.userAgent, path: '',},
        {name: 'local', description: 'c:/', path: 'http://localhost:3000',},
        {name: 'digi-craft', description: 'server', path: 'https://digi-craft.de:7000',},
        // {name: '', description: '', path: '',},
    ];

    function onProgramsChange(pagination:any, filters:any, sorter:any, extra:any) {
        console.log('params', pagination, filters, sorter, extra);
    }

    function commandSelected (value:string) {

    }

    function onConnectionsChange(pagination:any, filters:any, sorter:any, extra:any) {
        console.log('params', pagination, filters, sorter, extra);
    }

    function connectionSelected (value:string) {

    }

    function onFinishConnection() {

    }

    function onFinishFailedConnection() {

    }

    try {
        idb.delete()
        idb.open()
    } catch (ex) {
        console.error(ex)
    }

    idb.dbCommands.put({name:"BrowserNotify", path:"/browser/notify"}).then(() => {

    }).catch(function(error: string) {
        alert ("Put command: " + error);
    });

    const dbp = new db.Program("notify:hello", "Browsernotify", [])
    dbp.save()
    // dbp.save()
    // idb.dbPrograms.add(dbp).then((id) => {
    //     dbp.id = id
    //     idb.dbPrograms.toArray().then((ps) => {
    //         programs = ps
    //     })
    // }).catch(function(error: string) {
    //     alert ("Put program: " + error);
    // });


    idb.dbEndpoints.put({name: "local", description: "C:", type: db.EndpointType.local, path: "C:/"}).then (function() {
        return idb.dbEndpoints.get(1);
    }).then(function (dbConnection: db.IEndpoint | undefined) {
        // alert ("Nicolas has shoe size " + dbConnection? dbConnection!.path: '');
    }).catch(function(error: string) {
        alert ("Put connection: " + error);
    });

    // new BrowserNotify('x', 'y').run()
    selfEP.run({name: selfEP.commands[1].name, payload: {text: 'Hallo', number: 5}})

    const CommandSelect = () =>
        <>
            <Form.Item label="Command" name="command">
                <Select style={{width:'100%'}} value={Object.values(db.commands)[0].route} onChange={commandSelected}>
                    {Object.values(db.commands).map((command:db.UICommand) => <Select.Option key={command.name} value={command.route}>{command.name}</Select.Option>)}
                </Select>
            </Form.Item>
        </>

    const CommandForm = () =>
        <>
            <Suspense fallback={<div>Loading..</div>}>
                <Switch>
                    {Object.values(db.commands).map((command:db.UICommand) => {
                        const CmdForm = command.component
                        return (
                            <Route key={command.name} path={Nav.tools.items.digiboy.link+command.route}><CmdForm/></Route>)
                    })}
                    <Redirect from={Nav.tools.items.digiboy.link} to={Nav.tools.items.digiboy.link+Object.values(db.commands)[0].route} />
                </Switch>
            </Suspense>
        </>

    const ConnectionForm = () =>
        <>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol= {{ span: 16 }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinishConnection}
                onFinishFailed={onFinishFailedConnection}
            >
                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input a connection name!' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: false, message: 'Please input !' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Path" name="path" rules={[{ required: true, message: 'Please input a valid path !' }]}>
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        {connectionButtonCaption}
                    </Button>
                </Form.Item>
            </Form>
        </>

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
            <div style={{display:'grid', gridTemplateColumns:'70% 30%', height:'calc(100vh - 68px)', alignContent:'start'}}>
                <div className="dclist">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography.Title level={1}>Digi Ops</Typography.Title>
                        <img src={dbImage} width={40} height={40} alt="Digi Boy"/>
                        <Button className="infobutton" size="large" icon={<InfoCircleOutlined/>}
                                onClick={() => setInfoVisible(true)}/>
                    </div>
                    <Table rowKey="name" size="small" columns={programsColumns as any} dataSource={programsData} onChange={onProgramsChange}
                    pagination={{pageSize:10}}/>
                </div>
                <div className="dcform">
                    <Typography.Title level={1} style={{marginBottom:'5px'}}>{formTitle}</Typography.Title>
                    {/*<CommandSelect />*/}
                    {/*<div style={{marginTop:'20px'}} />*/}
                    <CommandForm />
                </div>
                <div className="dclist" style={{borderTop:'1px solid #061006'}}>
                    <Typography.Title level={1}>Operators</Typography.Title>
                    <Table rowKey="name" size="small" columns={connectionsColumns as any} dataSource={connectionsData} onChange={onConnectionsChange} />
                </div>
                <div className="dcform" style={{borderTop:'1px solid #061006'}}>
                    <Typography.Title level={1}>New Operator</Typography.Title>
                    <ConnectionForm />
                </div>
            </div>
        </>
    )

}