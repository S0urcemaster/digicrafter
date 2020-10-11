
export enum Datatype {
    String, Number, Time
}

export type Payload = string | number | Date

export type Arg = {
    key: string
    label: string
    datatype: Datatype
    payload: Payload
}

export type Job = {
    key: string
    label: string
    broker: Broker
    args: Arg[]
}

export interface Broker {
    path: string
    description: string
    features: Job[]
    run (key: string, args:Arg[]) :void
}

export type Routine = {
    name: string
    description: string
    status?: string
    nextTimeout?: string
    lastRun?: string
    jobs: Job[]
}

export class RemoteBroker implements Broker {
    path: string
    description: string
    features: Job[] = []

    constructor(path:string ,description:string) {
        this.path = path
        this.description = description
    }

    run(key: string, args: Arg[]): void {
    }

}

export class SelfBroker implements Broker {
    path = 'self'
    description = 'self'
    features: Job[] = [
        {key:'browserNotify', label: 'Browser Notify', broker: this,
            args: [
                {key:'text', label: 'Text', datatype:Datatype.String, payload:''},
            ]
        },
        {key:'edit', label: 'Edit Text', broker: this,
            args: [
                {key:'text', label: 'Text', datatype:Datatype.String, payload: ''},
            ]
        }]

    private browserNotify = (args: Arg[]) => {
        if (Notification.permission === "granted") {
            const notification = new Notification(args[0].payload as string)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                const notification = new Notification(args[0].payload as string)
            });
        }
    }

    private edit (args: Arg[]) {
        if (Notification.permission === "granted") {
            const notification = new Notification(args[0].payload +' ' +args[1].payload)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                const notification = new Notification(args[0].payload +' ' +args[1].payload)
            });
        }
    }

    run (key:string, args: Arg[]) {
        (this as any)[key](args)
    }
}

