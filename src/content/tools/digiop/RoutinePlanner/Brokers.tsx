import React, {PropsWithChildren, useEffect, useState} from "react";
import {Broker, Env} from "../../../../lib/model/DigiOp";
import {EyeOutlined} from '@ant-design/icons';
import {Button, Form, Input, Table} from 'antd';
import FormItem from "antd/lib/form/FormItem";
import {SubHeadline} from "../../../../components/ContentMultiView";


const brokersColumns = [{
    title: 'Path',
    dataIndex: 'path',
}, {
    title: 'Description',
    dataIndex: 'description',
}, {
    title: 'Actions',
    dataIndex: 'actions',
}]

const brokersTableData = [{
    key: 1,
    path: 'http://localhost',
    description: '',
    actions:''
}, {
    key: 2,
    path: 'https://digi-craft.de',
    description: 'Web Server',
    actions:[<Button key={1} size='small'>Make Master</Button>, <Button key={2} size='small'>Delete</Button>]
}]

const localEnvironment:Env[] = [
    {key:'home', value:'c:/users/sebas'},
    {key:'hosts file', value:'C:/windows/system32/etc/driver/hosts'},
    {key:'backup', value:'e:/'},
]

const webEnvironment:Env[] = [
    {key:'webroot', value:'/var/www'},
    {key:'pg_hba', value:'/etc/postgresql/11/main/pg_hba.conf'},
    {key:'apache aliases', value:'/etc/apache2/mods-enabled/alias.conf'},
]

export default function  (props:{
    brokers:Broker[]
    updateBroker:(path:string) => void
}) {

    const [currentBroker, setCurrentBroker] = useState(props.brokers[0])
    const [environment, setEnvironment] = useState <Env[]>(webEnvironment)

    const [envVisible, setEnvVisible] = useState(true)

    function addVariable(key:string, value:string) {

    }

    function updateEnv (env:Env, value:string) {
        env.value = value
    }

    function newBroker () {
        console.log('test')
    }

    function reloadBrokers() {

    }

    function newVariable () {

    }

    return (
        <>
            <SubHeadline actions={[{key:'add', title:'Add', onClick:newBroker}, {key:'reload', title:'Reload', onClick:reloadBrokers}]}>Brokers</SubHeadline>
            <Table size='small' columns={brokersColumns} dataSource={brokersTableData} />
            <SubHeadline actions={[{key:'new', title:'New', onClick:newVariable}, {key:'new', title:<EyeOutlined />, onClick:() => setEnvVisible(!envVisible)}]}>Environment</SubHeadline>
            <div style={{display:envVisible ? 'block' : 'none'}}>
                {environment.map(env =>
                    <FormItem label={env.key} labelCol={{span:6}}>
                        <Input.TextArea key={env.key} style={{height:'40px'}} rows={1} value={env.value}
                                        onChange={(event) => updateEnv(env, event.target.value)} />
                    </FormItem>
                )}
            </div>
        </>
    )

}