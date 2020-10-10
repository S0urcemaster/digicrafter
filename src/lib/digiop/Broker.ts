import {ICommand} from "../data/digiop";
import {Type} from "typescript";

export enum Datatype {
    String, Number, Time
}

export type Payload = string | number | Date

export type Arg = {
    label: string
    datatype: Datatype
    payload: Payload
}

export type Args = {
    [key:string]: Arg
}

export type Job = {
    label: string
    args: Args
}

export type Jobs = {
    [key:string]: Job
}

export interface Broker {
    path: string
    description: string
    jobs: Jobs
    run (key: string, args:Args) :void
}

export class SelfBroker implements Broker {
    path = 'self'
    description = 'self'
    jobs: Jobs = {
        browserNotify: { label: 'Browser Notify',
            args: {text: {label: 'Text', datatype:Datatype.String, payload:''},
            }},
        anotherCommand: { label: 'Another Command',
            args: {aString: {label: 'A String', datatype:Datatype.String, payload: ''},
                number: {label: 'A number', datatype:Datatype.Number, payload:0},
            }}}

    private browserNotify = (args: Args) => {
        if (Notification.permission === "granted") {
            const notification = new Notification(args.text.payload as string)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                const notification = new Notification(args.text.payload as string)
            });
        }
    }

    private anotherCommand (args: Args) {
        if (Notification.permission === "granted") {
            const notification = new Notification(args.aString +' ' +args.aNumber)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                const notification = new Notification(args.aString +' ' +args.aNumber)
            });
        }
    }

    run (key:string, args: Args) {
        (this as any)[key](args)
    }
}

