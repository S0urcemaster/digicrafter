import React, {useEffect, useState, Suspense} from "react";
import '../css/DigiBoy.css'
import {Button, Col, Divider, Layout, Modal, Row, Select, Space, Table, Typography} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import {Route, Switch, Redirect, useHistory} from "react-router-dom";
import {Form, Input, Radio} from 'antd';
import {ColumnsType} from "antd/lib/table";
import {Command, CommandList, commands} from "../lib/digiboy";
import {Nav} from "../lib/Nav";
import dbImage from "../img/db.png"
import {idb, DBEndpoint, IDBEndpoint, IDBProgram, DBProgram} from "../lib/idb";
import BasicForm from "./digiboy/BasicForm";
import {BrowserNotify, run} from "../lib/Programs";

enum FormTitle {
    new = 'New Program', edit = 'Edit Program'
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
    command: string,
    nextTimeout: Date | undefined,
    repeat: boolean,
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
        {title: 'Command', dataIndex: 'command',
            filters: [{text: 'Joe', value: 'Joe',}, {text: 'Jim', value: 'Jim',},],
            onFilter: (value:any, record:any) => record.name.indexOf(value) === 0,
            sorter: (a:any, b:any) => a.age - b.age,
            defaultSortOrder: 'ascend',
        },
        {title: 'Timeout', dataIndex: 'timeout',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {title: 'Repeat', dataIndex: 'repeat',
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

    // let programs: IDBProgram[] = []

    function runProgram (p: Program) {
        // const program = programs.find((program) => {
        //     return program.name === p.name
        // })
        // console.log(p)
        // if (program) program.run()
        // else alert(false)
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
        {name: 'notify:hello', description: 'Notify me!', command: 'BrowserNotify', nextTimeout: undefined, repeat: false, actions: ['Run', 'Delete'],},
        {name: 'sudo chmod', description: 'digicrafter> npm start', command: 'runOS', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'push update', description: 'write update log and commit/push git', command: 'sequence', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'cold_start', description: 'Open all after os restart', command: 'runOS', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'gelbersack', description: 'Gelber Sack Termine', command: 'mailto', nextTimeout: new Date(), repeat: false, actions: [],},
        {name: 'digicrafter lines', description: 'count lines of code', command: 'sourcestats/lines', nextTimeout: undefined, repeat: false, actions: ['Run', 'Delete'],},
        {name: 'start_digi1', description: 'digicrafter> npm start', command: 'runOS', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'deploy_digicrafter1', description: 'Run build > copy server', command: 'sequence', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'cold_start1', description: 'Open all after os restart', command: 'runOS', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'gelbersack1', description: 'Gelber Sack Termine', command: 'mailto', nextTimeout: new Date(), repeat: false, actions: [],},
        {name: 'dump_words2', description: 'Make database backup', command: 'postgresDump', nextTimeout: undefined, repeat: false, actions: ['Run', 'Delete'],},
        {name: 'start_digi2', description: 'digicrafter> npm start', command: 'runOS', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'deploy_digicrafter2', description: 'Run build > copy server', command: 'sequence', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'cold_start2', description: 'Open all after os restart', command: 'runOS', nextTimeout: undefined, repeat: false, actions: [],},
        {name: 'gelbersack2', description: 'Gelber Sack Termine', command: 'mailto', nextTimeout: new Date(), repeat: false, actions: [],},
        // {name: '', description: '', command: '', nextTimeout: undefined, repeat: false, actions: [],},
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

    // idb.dbCommands.put({name:"BrowserNotify", path:"/browser/notify"}).then(() => {
    //
    // }).catch(function(error: string) {
    //     alert ("Put command: " + error);
    // });

    const dbp = new DBProgram("notify:hello", "Browsernotify")
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


    // idb.dbEndpoints.put({name: "local", description: "C:", path: "C:/"}).then (function() {
    //     return idb.dbEndpoints.get(1);
    // }).then(function (dbConnection: IDBEndpoint | undefined) {
    //     // alert ("Nicolas has shoe size " + dbConnection? dbConnection!.path: '');
    // }).catch(function(error: string) {
    //     alert ("Put connection: " + error);
    // });

    // console.log(Notification.permission);
    // if (Notification.permission === "granted") {
    //     // alert("we have permission");
    // } else if (Notification.permission !== "denied") {
    //     Notification.requestPermission().then(permission => {
    //         console.log(permission);
    //     });
    // }
    // new BrowserNotify('x', 'y').run()

    const CommandSelect = () =>
        <>
            <Form.Item label="Command" name="command">
                <Select style={{width:'100%'}} value={Object.values(commands)[0].route} onChange={commandSelected}>
                    {Object.values(commands).map((command:Command) => <Select.Option key={command.name} value={command.route}>{command.name}</Select.Option>)}
                </Select>
            </Form.Item>
        </>

    const CommandForm = () =>
        <>
            <Suspense fallback={<div>Loading..</div>}>
                <Switch>
                    {Object.values(commands).map((command:Command) => {
                        const Form = command.component
                        return (
                            <Route key={command.name} path={Nav.tools.items.digiboy.link+command.route}><Form/></Route>)
                    })}
                    <Redirect from={Nav.tools.items.digiboy.link} to={Nav.tools.items.digiboy.link+Object.values(commands)[0].route} />
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
                        <Typography.Title level={1}>Digiboy Programs</Typography.Title>
                        <img src={dbImage} width={40} height={40} alt="Digi Boy"/>
                        <Button className="infobutton" size="large" icon={<InfoCircleOutlined/>}
                                onClick={() => setInfoVisible(true)}/>
                    </div>
                    <Table rowKey="name" size="small" columns={programsColumns as any} dataSource={programsData} onChange={onProgramsChange}
                    pagination={{pageSize:10}}/>
                </div>
                <div className="dcform">
                    <Typography.Title level={1}>{formTitle}</Typography.Title>
                    <CommandSelect />
                    <div style={{marginTop:'20px'}} />
                    <CommandForm />
                </div>
                <div className="dclist" style={{borderTop:'1px solid #061006'}}>
                    <Typography.Title level={1}>Endpoints</Typography.Title>
                    <Table rowKey="name" size="small" columns={connectionsColumns as any} dataSource={connectionsData} onChange={onConnectionsChange} />
                </div>
                <div className="dcform" style={{borderTop:'1px solid #061006'}}>
                    <Typography.Title level={1}>New Endpoint</Typography.Title>
                    <ConnectionForm />
                </div>
            </div>
        </>
    )

}