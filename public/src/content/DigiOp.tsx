import React, {useState} from "react";
import '../css/DigiOp.css'
import {Button, Form, Input, Modal, Typography} from "antd";
import {InfoCircleOutlined, LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons';
import dbImage from "../img/db.png"
import RoutineForm from "./digiop/RoutineForm";
import Brokers from "./digiop/Brokers";
import {Broker, RemoteBroker, ResultAction, Routine, SelfBroker} from "../lib/model/DigiOp";
import Routines from "./digiop/Routines";
import InternalLink from "../components/InternalLink";
import {Nav} from "../lib/Nav";

enum FormTitle {
    new = 'Routine', edit = 'Edit Routine'
}

enum ConnetctionButtonCaption {
    test = 'Test', save = 'Save'
}

export default function (props:any) {

    const [infoVisible, setInfoVisible] = useState(false)
    const [formTitle, setFormTitle] = useState(FormTitle.new)
    const [connectionButtonCaption, setConnectionButtonCaption] = useState(ConnetctionButtonCaption.test)

    const localBroker = new RemoteBroker('http://localhost:3000', 'local')
    localBroker.features = [
        {key:'info', label:'Info', broker:localBroker, resultAction:ResultAction.log, args:[]},
        {key:'runCmd', label:'Run Command', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'command', label:'Command', payload:''},
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'copyFile', label:'Copy File', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'from', label:'From Path', payload:''},
                {key:'to', label:'To Path', payload:''},
            ]},
        {key:'getDirectory', label:'Get Directory', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
                {key:'recursive', label:'Recursive', payload:''},
            ]},
        {key:'putDirectory', label:'Put Directory', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'getFile', label:'Get File', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'putFile', label:'Put File', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
    ]

    const digiBroker = new RemoteBroker('https://digi-craft:3000', 'server')
    digiBroker.features = [
        {key:'info', label:'Info', broker:digiBroker, resultAction:ResultAction.log, args:[]},
        {key:'getFile', label:'Get File', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'putFile', label:'Put File', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'putDirectory', label:'Put Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'removeDirectory', label:'Remove Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {key:'editPgHba', label:'Edit pg_hba', broker:digiBroker, resultAction:ResultAction.log, args:[]},
        {key:'chmod', label:'cdmod', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'file', label:'File', payload:''},
                {key:'directory', label:'Directory', payload:''},
                {key:'attributes', label:'Attributes', payload:''},
            ]},
        {key:'restartService', label:'systemctl restart', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'service', label:'Service Name', payload:''},
            ]},
        {key:'observeDir', label:'Observe Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
                {key:'frequency', label:'Frequency', payload:''},
            ]},
    ]

    const deploymentRoutine:Routine = {
        name: 'digicrafter deployment',
        description: '',
        status: '',
        nextTimeout: '',
        lastRun: '',
        jobs: [
            {key:'runCmd', label:'Run Command', broker:localBroker, resultAction:ResultAction.log, args:[
                    {key:'command', label:'Command', payload:'npm run build'},
                    {key:'path', label:'Path', payload:'c:/users/sebas/phpstormprojects/digicrafter'},
                ]},
            {key:'removeDirectory', label:'Remove Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                    {key:'path', label:'Path', payload:'/var/www/html'},
                ]},
            {key:'getDirectory', label:'Get Directory Contents', broker:localBroker, resultAction:ResultAction.log, args:[
                    {key:'path', label:'Path', payload:'c:/users/sebas/phpstormprojects/digicrafter/build'},
                    {key:'recursive', label:'Recursive', payload:'true'},
                ]},
            {key:'putDirectory', label:'Put Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                    {key:'path', label:'Path', payload:'/var/www/html'},
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

    function newRoutine () {
        const rout:Routine = {
            description: "", name: "", jobs: []
        }
        setCurrentRoutine(rout)
    }

    function saveRoutine (routine: Routine) {
        console.log(routine)
        props.saveRoutine(routine)
    }

    const BrokerForm = () =>
        <>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol= {{ span: 16 }}
                name="basic"
                initialValues={{ remember: true }}
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
                <p>Digi Op stands for 'Digital Operations' and is related to the term 'Dev Ops'.</p>
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
                        <div style={{display:"flex", justifyContent:"space-between", alignItems:'end'}}>
                            <div style={{display:"flex"}}>
                                {<Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>
                                    <InternalLink to={Nav.tools.items.passwordGenerator.link}><LeftCircleOutlined style={{color:'#666666', paddingTop:'3px'}} />&nbsp;</InternalLink>
                                </Typography.Title>}
                                <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>Digi Ops</Typography.Title>
                                {<Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>
                                    <InternalLink to={Nav.tools.items.edit.link}>&nbsp;<RightCircleOutlined style={{color:'#666666', paddingTop:'3px'}} /></InternalLink>
                                </Typography.Title>}
                            </div>
                            <Typography.Title style={{marginBottom:'2px', marginTop:'0', color:'#555555'}} level={4}>{props.date}</Typography.Title>
                        </div>
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