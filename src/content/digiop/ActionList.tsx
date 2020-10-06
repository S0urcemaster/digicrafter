import React, {useState} from "react";
import {Action, ActionDef, Arg, Datatype, Operator, selfOp} from "../../lib/digiop/Operators";
import {Form, Input, InputNumber, Select, Typography} from "antd";
import ListNavigator from "../../components/ListNavigator";
import {EndpointType} from "../../lib/data/digiop";

export default (props:any) => {

    const [actionDef, setActionDef] = useState <ActionDef>({name: 'select', args: []})
    const [operator, setOperator] = useState <Operator>(selfOp)
    const [actions, setActions] = useState <Action[]>([] as Action[])
    const [currentAction, setCurrentAction] = useState <Action>({} as Action)

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

    function actionChanged (name: string) {
        setActionDef(operator.actions.find(action => action.name === name)!)
    }

    function changeActions (actions:Action[]) {
        setActions(actions)
    }

    function changeCurrentAction (action:Action) {
        setCurrentAction(action)
    }

    return (
        // <div style={{marginLeft:'8px', marginRight:'8px'}}>
        <div>
            <div style={{display:'flex', justifyContent:'space-between', marginBottom:'0', marginTop:'9px'}}>
                <Typography.Title style={{marginBottom:'3px'}} level={3}>Actions</Typography.Title>
                <ListNavigator list={actions} onChangeList={changeActions} onChangeCurrent={changeCurrentAction} />
            </div>
            <Form.Item
                label="Operator"
                rules={[{ required: true, message: ' ' }]}
                initialValue= {currentAction.operator}
            >
                <Select style={{width:'100%'}}>
                    {Object.keys(EndpointType).map((key) => <Select.Option key={key} value={EndpointType[key as keyof typeof EndpointType]}>{EndpointType[key as keyof typeof EndpointType]}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item
                label="Action"
                rules={[{ required: true, message: ' ' }]}
                initialValue={actionDef.name}
            >
                <Select style={{width:'100%'}} onChange={actionChanged}>
                    {operator && operator.actions.map((action) => <Select.Option key={action.name} value={action.name}>{action.name}</Select.Option>)}
                </Select>
            </Form.Item>
            <Payload args={actionDef.args} />
        </div>
    )
}
