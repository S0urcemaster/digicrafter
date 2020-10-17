import React, {useState} from "react";
import {Broker, Env} from "../../../../lib/model/DigiOp";
import {Columns} from "../../../../components/Content";
import {Form, Input, Table} from 'antd';
import FormItem from "antd/lib/form/FormItem";


const brokersColumns = [{
    title: 'Path',
    dataIndex: 'path',
}, {
    title: 'Description',
    dataIndex: 'description',
}]

const brokersTableData = [{
    key: 1,
    path: 'John Brown',
    description: 32,
}, {
    key: 2,
    path: 'John Brown',
    description: 32,
}]

export default function  (props:{
    brokers:Broker[]
    updateBroker:(path:string) => void
}) {

    const [currentBroker, setCurrentBroker] = useState(props.brokers[0])
    // const [environment, setEnvironment] = useState <Env[]>props.brokers[0].environment)

    function addVariable(key:string, value:string) {

    }

    function updateEnv (env:Env, value:string) {
        env.value = value
    }

    const EnvVariable = (props:{env:Env, updateEnv:(value:string) => void}) => <>
        <FormItem label={props.env.key}>
            <Input.TextArea key={props.env.key} style={{height:'40px'}} autoSize rows={1} value={props.env.value}
                            onChange={(event) => props.updateEnv(event.target.value)} />
        </FormItem>
    </>

    return (
        <>
            <Columns>
                <Table />
                <Form>
                    {currentBroker && currentBroker.environment.map(env => <EnvVariable env={env} updateEnv={value => {updateEnv(env, value)}} />)}
                </Form>
            </Columns>
        </>
    )

}