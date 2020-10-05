import {ICommand} from "../data/digiop";
import {Type} from "typescript";

export enum Datatype {
    StringType, NumberType, TimeType
}

type Property = {
    name:string,
    value:string | number
}

type Command = {
    name:string,
    payload:any
}

export type Arg = {
    name:string,
    datatype:Datatype,
}

export type CommandDef = {
    name:string,
    args:Arg[]
}

class SelfEndpoint {
    commands: CommandDef[] = [
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

    run (command:Command) {
        (this as any)[command.name](command.payload)
    }
}

export const selfEP = new SelfEndpoint()

export class LocalEndpoint {
    path: string

    constructor(path: string) {
        this.path = path
    }

}

export class RemoteEndpoint {
    path: string

    constructor(path: string) {
        this.path = path
    }

}

