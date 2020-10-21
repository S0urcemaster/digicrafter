import React, {useState} from "react";
import Content from "../../../../components/Content";
import {SubHeadline} from "../../../../components/ContentMultiView";
import {Form, Input, Space, Table, Typography} from "antd";
import {Env, Routine} from "../../../../lib/model/DigiOp";
import {EyeOutlined} from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";
import AddDialog from "./AddBrokerDialog";


const routineEnvironment:Env[] = [
    {key:'home', value:'c:/users/sebas'},
    {key:'hosts file', value:'C:/windows/system32/etc/driver/hosts'},
    {key:'backup', value:'e:/'},
]

const outputsColumns = [{
    title: 'From',
    dataIndex: 'from',
}, {
    title: 'Abstract',
    dataIndex: 'abstract',
}, {
    title: 'Actions',
    render: () => <>
        <Space>
            <Typography.Link onClick={() => {}}>View</Typography.Link>
            <Typography.Link onClick={() => {}}>Copy</Typography.Link>
            <Typography.Link onClick={() => {}}>Save</Typography.Link>
        </Space>
    </>,
}]

const outputsTableData = [
    {key:'1', from:'http://localhost:3000/getFile/{httpd}', abstract:'# This is the main Apache HTTP server configuration file.  It contains the'},
    {key:'2', from:'http://localhost:3000/pushClient/{1}', abstract:'changed'},
    {key:'3', from:'http://localhost:3000/putFile/{2}', abstract:'File written'},
    {key:'4', from:'http://localhost:3000/checksum/{2}', abstract:'123456789'},
    {key:'5', from:'http://localhost:3000/getFile/{httpd}', abstract:'# This is the main Apache HTTP server configuration file.  It contains the'},
    {key:'6', from:'http://localhost:3000/checksum/{4}', abstract:'123456789'},
    {key:'7', from:'master:equals/{4}/{6}', abstract:'true'},
]

export default function  () {

    const [routine, setRoutine] = useState <Routine>({name:'', description:'', jobs:[]})
    const [environment, setEnvironment] = useState <Env[]>(routineEnvironment)
    const [envVisible, setEnvVisible] = useState(true)

    function save () {

    }

    function newVariable () {

    }

    function updateEnv (env:Env, value:string) {
        env.value = value
    }

    return (
        <>
            <SubHeadline actions={[{key:'save', title:'Save', onClick:save}]}>Routine</SubHeadline>
            <Form labelCol={{span:6}}>
                <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]} initialValue={routine.name}>
                    <Input value={routine.name} />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]} initialValue={routine.description}>
                    <Input value={routine.description} />
                </Form.Item>
                <Form.Item label="Master" name="master" rules={[{ required: true, message: ' ' }]} initialValue={routine.description}>
                    <Input value={routine.description} />
                </Form.Item>
            </Form>
            <SubHeadline actions={[{key:'new', title:'New', onClick:newVariable}, {key:'new', title:<EyeOutlined />, onClick:() => setEnvVisible(!envVisible)}]}>Environment</SubHeadline>
            <div style={{display:envVisible ? 'block' : 'none'}}>
                <Form labelCol={{span:6}}>
                    {environment.map(env =>
                        <FormItem label={env.key} labelCol={{span:6}}>
                            <Input.TextArea key={env.key} style={{height:'40px'}} rows={1} value={env.value}
                                            onChange={(event) => updateEnv(env, event.target.value)} />
                        </FormItem>
                    )}
                </Form>
            </div>
            <SubHeadline>Outputs</SubHeadline>
            <Table size='small' columns={outputsColumns} dataSource={outputsTableData}
            />
        </>
    )

}