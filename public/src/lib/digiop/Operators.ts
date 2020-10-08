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
    // operator: Operator
    args:ArgDef[]
    payload:(string|number)[]
}

export type ArgDef = {
    name:string
    datatype:Datatype
}

// export type ActionDef = {
//     name:string
//     args:ArgDef[]
// }

export interface Operator {
    // actionDefs: ActionDef[]
    actionDefs: Action[]
    run (action: Action) :void
}

// function arg2Payload (arg:ArgDef) :any {
//     switch (arg.datatype) {
//         case Datatype.StringType:
//             return ''
//         case Datatype.NumberType:
//             return 0
//         case Datatype.TimeType:
//             return ''
//     }
// }

class SelfOperator implements Operator{
    actionDefs: Action[] = [
        {name:'browserNotify', args:[{name:'text', datatype:Datatype.StringType}], payload:['']},
        {name:'anotherCommand', args:[{name:'text', datatype:Datatype.StringType},
                {name:'number', datatype:Datatype.NumberType}], payload:['', 0]},
    ]

    // actions: Action[]

    constructor() {
        // this.actions = this.actionDefs.map(def => {
        //     return {
        //         name: def.name,
        //         operator: this,
        //         definition: def,
        //         payload: def.args.map(arg => arg2Payload(arg))
        //     }
        // })
    }


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

// export class LocalOperator implements Operator {
//
//     path: string
//     actionDefs: ActionDef[] = []
//     actions: Action[]
//
//     constructor(path: string) {
//         this.path = path
//         this.actions = this.actionDefs.map(def => {
//             return {
//                 name: def.name,
//                 operator: this,
//                 definition: def,
//                 payload: def.args.map(arg => arg2Payload(arg))
//             }
//         })
//     }
//
//     run(action: Action): void {
//     }
//
// }
//
// export class RemoteOperator implements Operator  {
//
//     path: string
//     actionDefs: ActionDef[] = []
//     actions: Action[]
//
//     constructor(path: string) {
//         this.path = path
//         this.actions = this.actionDefs.map(def => {
//             return {
//                 name: def.name,
//                 operator: this,
//                 definition: def,
//                 payload: def.args.map(arg => arg2Payload(arg))
//             }
//         })
//     }
//
//     run(action: Action): void {
//     }
//
// }

