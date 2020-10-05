import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button, Form, Input, InputNumber, Select} from "antd";
import {EndpointType} from "../../lib/data/digiboy";
import NarrowForm from "../../components/NarrowForm";
import {Arg, CommandDef, Datatype, selfEP} from "../../lib/digiboy/Endpoints";

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
                        return <Input.TextArea autoSize />
                    case Datatype.NumberType:
                        return <InputNumber />
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
            <>
                <Form.Item
                    label="Endpoint"
                    rules={[{ required: true, message: ' ' }]}
                    initialValue= {endpoint}
                >
                    <Select style={{width:'100%'}} onChange={endpointTypeChanged}>
                        {Object.keys(EndpointType).map((key) => <Select.Option key={key} value={EndpointType[key as keyof typeof EndpointType]}>{EndpointType[key as keyof typeof EndpointType]}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Command"
                    rules={[{ required: true, message: ' ' }]}
                    initialValue={command.name}
                >
                    <Select style={{width:'100%'}} disabled={commandsDisabled} onChange={commandChanged}>
                        {commands.map((command) => <Select.Option key={command.name} value={command.name}>{command.name}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Form.Item
                    label="Preset"
                    initialValue={presets[0]}
                >
                    <Select style={{width:'100%'}} disabled={commandsDisabled}>
                        {presets.map((preset) => <Select.Option value={preset}>{preset}</Select.Option>)}
                    </Select>
                </Form.Item>
                <Payload args={command.args} />
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button size={"small"} type="default">
                        Save Preset
                    </Button>
                    <Button size={"small"} type="default">
                        Add Command
                    </Button>
                </Form.Item>
            </>
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
            >
                <Form.Item style={{margin:0}} label="Name" name="name" rules={[{ required: true, message: ' ' }]}>
                    <Input />
                </Form.Item>
                <Form.Item label="Description" name="description" rules={[{ required: false, message: ' ' }]}>
                    <Input />
                </Form.Item>
                <div style={{marginTop: '15px'}}/>
                <Command />
                <div style={{marginTop: '15px'}}/>

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