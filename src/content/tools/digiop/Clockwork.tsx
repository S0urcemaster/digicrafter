import React, {useState} from "react";
import {Broker, RemoteBroker, ResultAction, Routine, SelfBroker} from "../../../lib/model/DigiOp";
import {Button, Form, Input, Typography} from "antd";
import dbImage from "../../../img/db.png";
import Routines from "./Dashboard/Routines";
import RoutineForm from "./Dashboard/RoutineForm";
import Brokers from "./Dashboard/Brokers";
import io from "socket.io-client";
import {Item} from "../../../components/Content";

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

    const [brokers, setBrokers] = useState <Broker[]>([new SelfBroker(), localBroker, digiBroker])

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
            <Item>
                <div style={{display:'flex'}}>
                    <span>Clockwork: {props.socket && props.socket.io.uri}</span>
                    <div style={{width:'5px'}}></div>
                    <span>{props.connected?'connected':'not connected'}</span>
                </div>
            </Item>
            <div style={{display:'grid', gridTemplateColumns:'50% 50%', height:'100%', alignContent:'start', overflowX:'scroll'}}>
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