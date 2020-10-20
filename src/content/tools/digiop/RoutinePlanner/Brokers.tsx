import React, {useEffect, useState} from "react";
import {Broker, Env} from "../../../../lib/model/DigiOp";
import {EyeOutlined} from '@ant-design/icons';
import {Input, Table} from 'antd';
import FormItem from "antd/lib/form/FormItem";
import {SubHeadline} from "../../../../components/ContentMultiView";
import AddDialog, {DialogBroker} from "./AddBrokerDialog";


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


export default function  (props:{
    brokers:Broker[]
    updateBroker:(path:string) => void
}) {

    const [currentBroker, setCurrentBroker] = useState <Broker> (props.brokers[0])
    const [environment, setEnvironment] = useState <Env[]>(currentBroker.environment)
    const [envVisible, setEnvVisible] = useState(true)
    const [brokersTableData, setBrokersTableData] = useState <{key:string, path:string, description:string, actions:any[]}[]>()
    const [rowSelection, setRowSelection] = useState <any> ([])
    const [addDialogVisible, setAddDialogVisible] = useState(false)
    const [newEnvVisible, setNewEnvVisible] = useState(false)
    const [newEnv, setNewEnv] = useState <Env> ({key:'', value:''})
    const [newEnvButtonLabel, setNewEnvButtonLabel] = useState('New')

    useEffect(() => {
        setBrokersTableData(makeTableData(props.brokers))
    }, [props.brokers])

    useEffect(() => {
        setRowSelection(makeRowKeys([currentBroker]))
    }, [currentBroker])

    useEffect(() => {
        if (newEnvVisible) {
            if (newEnv.key === '' && newEnv.value === '') {
                setNewEnvButtonLabel('Cancel')
            } else {
                setNewEnvButtonLabel('Save')
            }
        } else {
            setNewEnvButtonLabel('New')
        }
    }, [newEnv])

    function makeTableData (brokers:Broker[]) : any {
        return brokers.map((broker: Broker) => {
            return {key: broker.path, path: broker.path, description: broker.description, actions: []}
        })
    }

    function makeRowKeys (brokers:Broker[]) : any {
        return {selectedRowKeys:brokers.map((broker: Broker) => {
            return broker.path
        })}
    }

    function addVariable(key:string, value:string) {

    }

    function updateEnv (env:Env, value:string) {
        env.value = value
    }

    function addBroker () {
        setAddDialogVisible(true)
    }

    function reloadBrokers() {

    }

    function newVariable () {
        switch (newEnvButtonLabel) {
            case 'New':
                setNewEnvVisible(true)
                setNewEnvButtonLabel('Cancel')
                break
            case 'Cancel':
                setNewEnvVisible(false)
                setNewEnvButtonLabel('New')
                break
            case 'Save':
                setNewEnvVisible(false)
                setNewEnv({key:'', value:''})
                setEnvironment(environment.concat(newEnv))

        }
    }

    function brokerClicked (broker:any) {
        setCurrentBroker(props.brokers.find(pb => pb.path === broker.path)!)
    }

    function evalBroker (broker:DialogBroker) : string | undefined {
        if (broker.path === '') {
            return 'Path is required'
        }
        const testPassed = () => {
            return broker.path !== ''
        }
        if (testPassed()) {
            return undefined
        }
        return 'Test failed'
    }

    return (
        <>
            <AddDialog visible={addDialogVisible} onCancel={() => setAddDialogVisible(false)}
                       evalTest={evalBroker} onOk={() => setAddDialogVisible(false)} />
            <SubHeadline actions={[{key:'add', title:'Add', onClick:addBroker}, {key:'reload', title:'Reload', onClick:reloadBrokers}]}>Brokers</SubHeadline>
            <Table size='small' columns={brokersColumns} dataSource={brokersTableData}
                   onRow={(record) => ({
                       onClick: () => brokerClicked(record)
                   })}
                   rowSelection={{type:'radio',...rowSelection}}
            />
            <SubHeadline actions={[{key:'new', title: newEnvButtonLabel, onClick:newVariable}, {key:'new', title:<EyeOutlined />, onClick:() => setEnvVisible(!envVisible)}]}>Environment</SubHeadline>
            {newEnvVisible &&
            <FormItem label={<Input value={newEnv.key} onChange={(event) => setNewEnv({...newEnv, key:event.target.value})}/>} labelCol={{span:6}}>
                <Input.TextArea key={newEnv.key} style={{height:'40px'}} rows={1} value={newEnv.value}
                                onChange={(event) => setNewEnv({...newEnv, value:event.target.value})} />
            </FormItem>}
            <div style={{display:envVisible ? 'block' : 'none'}}>
                {currentBroker.environment.map(env =>
                    <FormItem label={env.key} labelCol={{span:6}}>
                        <Input.TextArea key={env.key} style={{height:'40px'}} rows={1} value={env.value}
                                        onChange={(event) => updateEnv(env, event.target.value)} />
                    </FormItem>
                )}
            </div>
        </>
    )

}