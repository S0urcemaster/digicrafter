import React, {useState} from "react";
import Content from "../../../../components/Content";
import {SubHeadline} from "../../../../components/ContentMultiView";
import {Form, Input, Table} from "antd";
import {Env, Routine} from "../../../../lib/model/DigiOp";
import {EyeOutlined} from "@ant-design/icons";
import FormItem from "antd/lib/form/FormItem";


const routineEnvironment:Env[] = [
    {key:'home', value:'c:/users/sebas'},
    {key:'hosts file', value:'C:/windows/system32/etc/driver/hosts'},
    {key:'backup', value:'e:/'},
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
            <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]} initialValue={routine.name} labelCol={{span:6}}>
                <Input value={routine.name} />
            </Form.Item>
            <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]} initialValue={routine.description} labelCol={{span:6}}>
                <Input value={routine.description} />
            </Form.Item>
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