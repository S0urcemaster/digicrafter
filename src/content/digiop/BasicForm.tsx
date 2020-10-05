import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button, Form, Input, InputNumber, Select, Typography} from "antd";
import {EndpointType} from "../../lib/data/digiop";
import NarrowForm from "../../components/NarrowForm";
import {Arg, CommandDef, Datatype, selfEP} from "../../lib/digiop/Endpoints";

const disabledStyle = {
    color: ''
}

export default function (props:PropsWithChildren<any>) {

    const [commandsDisabled, setCommandsDisabled] = useState(true)
    const [commands, setCommands] = useState <CommandDef[]>([])
    const [endpoint, setEndpoint] = useState <EndpointType>(EndpointType.self)

    useEffect(() => {
        setCommands(getCommands(endpoint))
        setCommandsDisabled(false)
    }, [endpoint])

    function getCommands (type: EndpointType) :CommandDef[] {
        switch (type) {
            case EndpointType.self:
                return selfEP.commands
            case EndpointType.local:

                break
            case EndpointType.remote:

                break
        }
        return commands
    }

    function endpointTypeChanged(type: EndpointType) {
        setCommands(getCommands(type))
        setEndpoint(type)
        setCommandsDisabled(false)
    }

    const Command = () => {

        const [presets, setPresets] = useState <string[]>([])
        const [command, setCommand] = useState <CommandDef>({name: 'select', args: []})

        const Payload = (props: {args:Arg[]}) => {

            const Prop = (props: {arg:Arg}) => {
                switch (props.arg.datatype) {
                    case Datatype.StringType:
                        return <Input.TextArea style={{height:'40px'}} rows={1} />
                    case Datatype.NumberType:
                        return <InputNumber style={{width:'50px'}} placeholder={'Weeks'} />
                    case Datatype.TimeType:
                        return <div style={{display:'flex', maxWidth:'20px!important', width:'20px!important'}}>
                            <InputNumber style={{maxWidth:'20px'}} placeholder={'Weeks'} />
                        </div>
                }
                return <></>
            }

            return (
                <>
                {props.args.map((arg:Arg) =>
                    <Form.Item
                        key={arg.name}
                        label={arg.name[0].toUpperCase() + arg.name.slice(1)}
                        rules={[{ required: true, message: <></> }]}
                    >
                        <Prop arg={arg}/>
                    </Form.Item>
                )}
                </>
            )
        }

        function commandChanged(name: string) {
            setCommand(commands.find(command => command.name === name)!)
        }

        return (
            // <div style={{marginLeft:'8px', marginRight:'8px'}}>
            <div>
                <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0', marginTop:'9px'}}>
                    <Typography.Title style={{marginBottom:'3px'}} level={3}>Actions</Typography.Title>
                    <div style={{display:'flex', alignSelf:'end', marginBottom:'2px'}}>
                        <Button style={{width:'30px', height:'30px', marginBottom:'2px', paddingBottom:'0', color:"red"}} size="small">-</Button>
                        <Button style={{width:'30px', height:'30px'}} size="small">·&lt;·</Button>
                        <Button style={{width:'30px', height:'30px'}} size="small">&lt;</Button>
                        <p style={{margin:'2px 5px 0 7px', lineHeight:'30px'}}>#1</p>
                        <Button style={{width:'30px', height:'30px'}} size="small">&gt;</Button>
                        <Button style={{width:'30px', height:'30px'}} size="small">·&gt;·</Button>
                        <Button style={{width:'30px', height:'30px', color:"green"}} size="small">+</Button>
                    </div>
                </div>
                <Form.Item
                    label="Operator"
                    rules={[{ required: true, message: ' ' }]}
                    initialValue= {endpoint}
                >
                    <Select style={{width:'100%'}} onChange={endpointTypeChanged}>
                        {Object.keys(EndpointType).map((key) => <Select.Option key={key} value={EndpointType[key as keyof typeof EndpointType]}>{EndpointType[key as keyof typeof EndpointType]}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Action"
                    rules={[{ required: true, message: ' ' }]}
                    initialValue={command.name}
                >
                    <Select style={{width:'100%'}} disabled={commandsDisabled} onChange={commandChanged}>
                        {commands.map((command) => <Select.Option key={command.name} value={command.name}>{command.name}</Select.Option>)}
                    </Select>
                </Form.Item>
                {/*<Form.Item*/}
                {/*    label="Preset"*/}
                {/*    initialValue={presets[0]}*/}
                {/*>*/}
                {/*    <Select style={{width:'100%'}} disabled={commandsDisabled}>*/}
                {/*        {presets.map((preset) => <Select.Option value={preset}>{preset}</Select.Option>)}*/}
                {/*    </Select>*/}
                {/*</Form.Item>*/}
                {/*<Typography.Title style={{marginBottom:'3px', marginTop:'9px'}} level={4}>Payload</Typography.Title>*/}
                <Payload args={command.args} />
                {/*<Form.Item wrapperCol={{ offset: 8, span: 16 }}>*/}
                {/*    <Button size={"small"} type="default">*/}
                {/*        Save Preset*/}
                {/*    </Button>*/}
                {/*    <Button size={"small"} type="default">*/}
                {/*        Add Command*/}
                {/*    </Button>*/}
                {/*</Form.Item>*/}
            </div>
        )
    }

    return (
        <NarrowForm>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol= {{ span: 16 }}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={props.onFinish}
                onFinishFailed={props.onFinishFailed}
                // style={{border: '2px solid #141414'}}
                style={{backgroundColor: '#1f1f1f'}}
            >
                <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]}>
                    <Input />
                </Form.Item>
                <Command />
                <div className={'form-spacer'}/>

                {/*{props.children}*/}

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>

            </Form>
        </NarrowForm>
    )

}