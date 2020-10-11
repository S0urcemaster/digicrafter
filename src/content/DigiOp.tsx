import React, {useEffect, useState} from "react";
import '../css/DigiOp.css'
import {Button, Modal, Space, Table, Typography} from "antd";
import {InfoCircleOutlined} from '@ant-design/icons';
import {Form, Input} from 'antd';
import dbImage from "../img/db.png"
import RoutineForm from "./digiop/RoutineForm";
import Brokers from "./digiop/Brokers";
import {Broker, Datatype, Job, RemoteBroker, Routine, SelfBroker} from "../lib/digiop/Broker";
import Routines from "./digiop/Routines";

enum FormTitle {
    new = 'Routine', edit = 'Edit Routine'
}

enum ConnetctionButtonCaption {
    test = 'Test', save = 'Save'
}

export default function () {

    const [infoVisible, setInfoVisible] = useState(false)
    const [formTitle, setFormTitle] = useState(FormTitle.new)
    const [connectionButtonCaption, setConnectionButtonCaption] = useState(ConnetctionButtonCaption.test)

    const localBroker = new RemoteBroker('http://localhost:3000', 'local')
    localBroker.features = [
        {key:'info', label:'Info', broker:localBroker, args:[]},
        {key:'runCmd', label:'Run Command', broker:localBroker, args:[
                {key:'command', label:'Command', datatype:Datatype.String, payload:''},
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'copyFile', label:'Copy File', broker:localBroker, args:[
                {key:'from', label:'From Path', datatype:Datatype.String, payload:''},
                {key:'to', label:'To Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'getDirectory', label:'Get Directory', broker:localBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
                {key:'recursive', label:'Recursive', datatype:Datatype.String, payload:''},
            ]},
        {key:'putDirectory', label:'Put Directory', broker:localBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'getFile', label:'Get File', broker:localBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'putFile', label:'Put File', broker:localBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
    ]

    const digiBroker = new RemoteBroker('https://digi-craft:3000', 'server')
    digiBroker.features = [
        {key:'info', label:'Info', broker:digiBroker, args:[]},
        {key:'getFile', label:'Get File', broker:digiBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'putFile', label:'Put File', broker:digiBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'putDirectory', label:'Put Directory', broker:digiBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'removeDirectory', label:'Remove Directory', broker:digiBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
            ]},
        {key:'editPgHba', label:'Edit pg_hba', broker:digiBroker, args:[]},
        {key:'chmod', label:'cdmod', broker:digiBroker, args:[
                {key:'file', label:'File', datatype:Datatype.String, payload:''},
                {key:'directory', label:'Directory', datatype:Datatype.String, payload:''},
                {key:'attributes', label:'Attributes', datatype:Datatype.String, payload:''},
            ]},
        {key:'restartService', label:'systemctl restart', broker:digiBroker, args:[
                {key:'service', label:'Service Name', datatype:Datatype.String, payload:''},
            ]},
        {key:'observeDir', label:'Observe Directory', broker:digiBroker, args:[
                {key:'path', label:'Path', datatype:Datatype.String, payload:''},
                {key:'frequency', label:'Frequency', datatype:Datatype.Number, payload:''},
            ]},
    ]

    const deploymentRoutine:Routine = {
        name: 'digicrafter deployment',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: [
            {key:'runCmd', label:'Run Command', broker:localBroker, args:[
                    {key:'command', label:'Command', datatype:Datatype.String, payload:'npm run build'},
                    {key:'path', label:'Path', datatype:Datatype.String, payload:'c:/users/sebas/phpstormprojects/digicrafter'},
                ]},
            {key:'removeDirectory', label:'Remove Directory', broker:digiBroker, args:[
                    {key:'path', label:'Path', datatype:Datatype.String, payload:'/var/www/html'},
                ]},
            {key:'getDirectory', label:'Get Directory Contents', broker:localBroker, args:[
                    {key:'path', label:'Path', datatype:Datatype.String, payload:'c:/users/sebas/phpstormprojects/digicrafter/build'},
                    {key:'recursive', label:'Recursive', datatype:Datatype.String, payload:'true'},
                ]},
            {key:'putDirectory', label:'Put Directory', broker:digiBroker, args:[
                    {key:'path', label:'Path', datatype:Datatype.String, payload:'/var/www/html'},
                ]},
        ]
    }

    const installRoutine:Routine = {
        name: 'Server Fresh Setup',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: []
    }

    const employeeRoutine:Routine = {
        name: 'Neuer Mitarbeiter',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: []
    }

    const virtualHostRoutine:Routine = {
        name: 'Neuer VirtualHost',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: []
    }

    const localBackupRoutine:Routine = {
        name: 'Lokales Backup',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: []
    }

    const publishLaravelRoutine:Routine = {
        name: 'Publish Laravel',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: []
    }

    const editPghbaRoutine:Routine = {
        name: 'Edit pg_hba',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: []
    }

    const [brokers, setBrokers] = useState <Broker[]>([new SelfBroker(), localBroker, digiBroker])
    const [routines, setRoutines] = useState <Routine[]>([deploymentRoutine, installRoutine,
        employeeRoutine, virtualHostRoutine, localBackupRoutine, publishLaravelRoutine, editPghbaRoutine])
    const [currentRoutine, setCurrentRoutine] = useState(deploymentRoutine)

    function routineSelected (index: number) {
        setCurrentRoutine(routines[index])
    }

    function onFinishConnection() {

    }

    function onFinishFailedConnection() {

    }

    function newRoutine () {
        const rout:Routine = {
            description: "", name: "", jobs: []
        }
        setCurrentRoutine(rout)
    }

    function saveRoutine (routine: Routine) {

    }

    // try {
    //     idb.delete()
    //     idb.open()
    // } catch (ex) {
    //     console.error(ex)
    // }
    //
    // idb.dbCommands.put({name:"BrowserNotify", path:"/browser/notify"}).then(() => {
    //
    // }).catch(function(error: string) {
    //     alert ("Put command: " + error);
    // });
    //
    // const dbp = new db.Program("notify:hello", "Browsernotify", [])
    // dbp.save()
    // // dbp.save()
    // // idb.dbPrograms.add(dbp).then((id) => {
    // //     dbp.id = id
    // //     idb.dbPrograms.toArray().then((ps) => {
    // //         programs = ps
    // //     })
    // // }).catch(function(error: string) {
    // //     alert ("Put program: " + error);
    // // });
    //
    //
    // idb.dbEndpoints.put({name: "local", description: "C:", type: db.EndpointType.local, path: "C:/"}).then (function() {
    //     return idb.dbEndpoints.get(1);
    // }).then(function (dbConnection: db.IEndpoint | undefined) {
    //     // alert ("Nicolas has shoe size " + dbConnection? dbConnection!.path: '');
    // }).catch(function(error: string) {
    //     alert ("Put connection: " + error);
    // });

    const BrokerForm = () =>
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
                title="Digi Op Info"
                onOk={() => setInfoVisible(false)}
                onCancel={() => setInfoVisible(false)}
                footer={[
                    <Button key="ok" type="primary" onClick={() => setInfoVisible(false)}>
                        OK
                    </Button>,
                ]}
            >
                <p>(I released this projects's state as it will take longer than expected and I need to get more content onto my page fast.
                    Nothing is working here yet except for the Actions list navigator.)</p>
                <p>Digi Op stands for 'Digital Operator' and is related to the term 'Dev Op'.</p>
                <p>It's purpose is to be a manager for all kinds of operations a developer, admin or both: a DevOp needs to do during his day's work.</p>
                <p>While a web app isn't allowed to do much on a workstation or server, it can be a manager of backend services, though.
                And backend services <i>do</i> have access to the operating system as much as you like. They can send Emails, copy files, edit
                configuration files, run a deployment script, check the status of a service or daemon - do all the stuff you need to do every day
                    with one click.</p>
                <p>Don't write a wiki entry - write an operation that is doing what you'd just documented instead.
                    Next time you don't look up in the wiki and repeat what you'd written down manually,
                    you just look up for the operation you created, possibly make some changes to it and press "run".</p>
            </Modal>
            <div style={{display:'grid', gridTemplateColumns:'70% 30%', height:'calc(100vh - 68px)', alignContent:'start'}}>
                <div className="dclist">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography.Title level={1}>Digi Ops</Typography.Title>
                        <img src={dbImage} width={40} height={40} alt="Digi Boy"/>
                        <Button className="infobutton" size="large" icon={<InfoCircleOutlined/>}
                                onClick={() => setInfoVisible(true)}/>
                    </div>
                    <Routines data={routines} rowClick={routineSelected} />
                </div>
                <div className="dcform">
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography.Title level={1} style={{marginBottom:'5px'}}>{formTitle}</Typography.Title>
                        <Button onClick={newRoutine}>New</Button>
                    </div>
                    <RoutineForm key={currentRoutine.name} brokers={brokers} routine={currentRoutine} onSave={saveRoutine} />
                </div>
                <div className="dclist" style={{borderTop:'1px solid #061006'}}>
                    <Typography.Title level={1}>Brokers</Typography.Title>
                    <Brokers data={brokers} />
                </div>
                <div className="dcform" style={{borderTop:'1px solid #061006'}}>
                    <Typography.Title level={1}>Broker</Typography.Title>
                    <BrokerForm />
                </div>
            </div>
        </>
    )
}