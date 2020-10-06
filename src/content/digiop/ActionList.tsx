import React, {useEffect, useState} from "react";
import {Action, ArgDef, Datatype, Operator, selfOp} from "../../lib/digiop/Operators";
import {Form, Input, InputNumber, Select, Typography} from "antd";
import ListNavigator from "../../components/ListNavigator";
import {EndpointType} from "../../lib/data/digiop";

export default (props:any) => {

    const [actions, setActions] = useState <Action[]>([props.operator.actionDefs[0]])
    const [currentActionId, setCurrentActionId] = useState (0)

    // useEffect(() => {
    //     console.log(currentActionId)
    // }, [currentActionId])
    //
    useEffect(() => {
        console.log(actions)
    }, [actions])

    function actionSelected (name: string) {
        const actionId = props.operator.actionDefs.findIndex((action: Action) => action.name === name)
        const res = actions.slice(0)
        res[currentActionId] = props.operator.actionDefs[actionId]
        setActions(res)
    }

    function addToActions (insertActionCallback:Function) {
        setActions(insertActionCallback(props.operator.actionDefs[0]))
    }

    function changeActions (actions:Action[]) {
        setActions(actions)
    }

    function changeCurrentAction (id: number) {
        setCurrentActionId(id)
    }

    const Payload = (props:{action:Action}) => {

        const Prop = (props: {arg:ArgDef, payload:any}) => {
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
                {props.action.args.map((arg:ArgDef, index) =>
                    <Form.Item
                        key={arg.name}
                        label={arg.name[0].toUpperCase() + arg.name.slice(1)}
                        rules={[{ required: true, message: <></> }]}
                    >
                        <Prop arg={arg} payload={props.action.payload[index]}/>
                    </Form.Item>
                )}
            </>
        )
    }

    return (
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0', marginTop:'9px'}}>
                <Typography.Title style={{marginBottom:'3px'}} level={3}>Actions</Typography.Title>
                <ListNavigator
                    key={currentActionId}
                    list={actions}
                    currentId={currentActionId}
                    onAddToList={addToActions}
                    onListChanged={changeActions}
                    onChangeCurrent={changeCurrentAction} />
            </div>
            <Form.Item
                label="Operator"
                rules={[{ required: true, message: ' ' }]}
                initialValue={props.operator}
            >
                <Select style={{width:'100%'}}>
                    {Object.keys(EndpointType).map((key) => <Select.Option key={key} value={EndpointType[key as keyof typeof EndpointType]}>{EndpointType[key as keyof typeof EndpointType]}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item
                label="Action"
                rules={[{ required: true, message: ' ' }]}
                initialValue={actions[currentActionId].name}
            >
                <Select style={{width:'100%'}} onChange={actionSelected} value={actions[currentActionId].name}>
                    {props.operator.actionDefs.map((action:Action) => <Select.Option key={action.name} value={action.name}>{action.name}</Select.Option>)}
                </Select>
            </Form.Item>
            <Payload key={actions[currentActionId].name} action={actions[currentActionId]}/>
        </div>
    )
}
