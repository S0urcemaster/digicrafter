import React, {useState} from "react";
import '../../css/DigiOp.css'
import {Button, Modal} from "antd";
import {Nav} from "../../lib/Nav";
import ContentMultiView from "../../components/ContentMultiView";
import Dashboard from "./digiop/Dashboard";
import RoutinePlanner from "./digiop/RoutinePlanner";
import DigiOpsInfo from "../../modals/DigiOpsInfo";
import {InfoCircleOutlined} from '@ant-design/icons';
import {Env, RemoteBroker, ResultAction} from "../../lib/model/DigiOp";

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
localBroker.environment = [
    {key:'userHome', value:'c:/users/sebas'},
    {key:'httpd', value:'c:/Apache24/conf/httpd.conf'},
    {key:'hosts', value:'c:/windows/system32/drivers/etc/hosts'},
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
digiBroker.environment = [
    {key:'webroot', value:'/var/www'},
    {key:'pg_hba', value:'/etc/postgresql/11/main/pg_hba.conf'},
    {key:'apache aliases', value:'/etc/apache2/mods-enabled/alias.conf'},
]

export default function (props:any) {

    const [infoVisible, setInfoVisible] = useState(false)

    return (
        <>
            <DigiOpsInfo visible={infoVisible} setVisible={setInfoVisible} />
            <ContentMultiView title={<div style={{display:'flex', alignContent:'middle'}}>DigiOps&nbsp;<Button className="infobutton" size='small' style={{paddingBottom:'20px'}} icon={<InfoCircleOutlined />} onClick={() => setInfoVisible(true)}/></div>}
                              navPrev={Nav.tools.items.passwordGenerator.link} navNext={Nav.tools.items.edit.link}
                              routeMappings={[
                                  {title:'Dashboard', path:'/dashboard', component:() => <Dashboard />},
                                  {title:'Routine Planner', path:'/planner', component:() => <RoutinePlanner brokers={[localBroker, digiBroker]} />},
                              ]}

            >
            </ContentMultiView>
        </>
    )
}