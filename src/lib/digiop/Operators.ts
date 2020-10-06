import {ICommand} from "../data/digiop";
import {Type} from "typescript";

export enum Datatype {
    StringType, NumberType, TimeType
}

type Property = {
    name:string
    value:string | number
}

export type Action = {
    name:string
    operator: Operator
    payload:any
}

export type Arg = {
    name:string
    datatype:Datatype
}

export type ActionDef = {
    name:string
    args:Arg[]
}

export interface Operator {
    actions: ActionDef[]
    run (action: Action) :void
}

class SelfOperator implements Operator{
    actions: ActionDef[] = [
        {name:'browserNotify', args:[{name:'text', datatype:Datatype.StringType}]},
        {name:'anotherCommand', args:[{name:'text', datatype:Datatype.StringType}, {name:'number', datatype:Datatype.NumberType}]},
    ]

    private browserNotify = (text: string) => {
        if (Notification.permission === "granted") {
            const notification = new Notification(text)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                const notification = new Notification(text)
            });
        }
    }

    private anotherCommand (payload:{text: string, number: number}) {
        if (Notification.permission === "granted") {
            const notification = new Notification(payload.text +' ' +payload.number)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                const t = payload.text +' ' +payload.number
                const notification = new Notification((t))
            });
        }
    }

    run (action:Action) {
        (this as any)[action.name](action.payload)
    }
}

export const selfOp = new SelfOperator()

export class LocalOperator implements Operator {

    path: string
    actions: ActionDef[] = []

    constructor(path: string) {
        this.path = path
    }

    run(action: Action): void {
    }

}

export class RemoteOperator implements Operator  {

    path: string
    actions: ActionDef[] = []

    constructor(path: string) {
        this.path = path
    }

    run(action: Action): void {
    }

}

