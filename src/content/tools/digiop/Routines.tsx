import React, {useState} from "react";
import {Broker, RemoteBroker, ResultAction, Routine, SelfBroker} from "../../../lib/model/DigiOp";
import {Button, Form, Input, Typography} from "antd";
import dbImage from "../../../img/db.png";
import Routines from "./Dashboard/Routines";
import RoutineForm from "./Dashboard/RoutineForm";

export default function (props:any) {

    const localBroker = new RemoteBroker('http://localhost:3000', 'local')
    localBroker.features = [
        {path:'info', label:'Info', broker:localBroker, resultAction:ResultAction.log, args:[]},
        {path:'runCmd', label:'Run Command', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'command', label:'Command', payload:''},
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'copyFile', label:'Copy File', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'from', label:'From Path', payload:''},
                {key:'to', label:'To Path', payload:''},
            ]},
        {path:'getDirectory', label:'Get Directory', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
                {key:'recursive', label:'Recursive', payload:''},
            ]},
        {path:'putDirectory', label:'Put Directory', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'getFile', label:'Get File', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'putFile', label:'Put File', broker:localBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
    ]

    const digiBroker = new RemoteBroker('https://digi-craft:3000', 'server')
    digiBroker.features = [
        {path:'info', label:'Info', broker:digiBroker, resultAction:ResultAction.log, args:[]},
        {path:'getFile', label:'Get File', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'putFile', label:'Put File', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'putDirectory', label:'Put Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'removeDirectory', label:'Remove Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'path', label:'Path', payload:''},
            ]},
        {path:'editPgHba', label:'Edit pg_hba', broker:digiBroker, resultAction:ResultAction.log, args:[]},
        {path:'chmod', label:'cdmod', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'file', label:'File', payload:''},
                {key:'directory', label:'Directory', payload:''},
                {key:'attributes', label:'Attributes', payload:''},
            ]},
        {path:'restartService', label:'systemctl restart', broker:digiBroker, resultAction:ResultAction.log, args:[
                {key:'service', label:'Service Name', payload:''},
            ]},
        {path:'observeDir', label:'Observe Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
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
            {path:'runCmd', label:'Run Command', broker:localBroker, resultAction:ResultAction.log, args:[
                    {key:'command', label:'Command', payload:'npm run build'},
                    {key:'path', label:'Path', payload:'c:/users/sebas/phpstormprojects/digicrafter'},
                ]},
            {path:'removeDirectory', label:'Remove Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
                    {key:'path', label:'Path', payload:'/var/www/html'},
                ]},
            {path:'getDirectory', label:'Get Directory Contents', broker:localBroker, resultAction:ResultAction.log, args:[
                    {key:'path', label:'Path', payload:'c:/users/sebas/phpstormprojects/digicrafter/build'},
                    {key:'recursive', label:'Recursive', payload:'true'},
                ]},
            {path:'putDirectory', label:'Put Directory', broker:digiBroker, resultAction:ResultAction.log, args:[
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
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </>

    return (
        <>
            <div style={{display:'grid', gridTemplateColumns:'50% 50%', height:'100%', alignContent:'start', overflowX:'scroll'}}>
                <div className="dclist">
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>Routines</Typography.Title>
                        <img src={dbImage} width={40} height={40} alt="Digi Ops"/>
                    </div>
                    <Routines data={routines} rowClick={routineSelected} />
                </div>
                <div className="dcform">
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Typography.Title level={3} style={{marginBottom:'5px'}}>digicrafter deployment</Typography.Title>
                        <Button onClick={newRoutine}>New</Button>
                    </div>
                    <RoutineForm key={currentRoutine.name} brokers={brokers} routine={currentRoutine} onSave={saveRoutine} />
                </div>
            </div>
        </>
    )

}