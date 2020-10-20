import axios, {AxiosResponse} from "axios";

export enum ResultAction {
    log = 'log', pipe = 'pipe', self = 'self'
}

export type Payload = string | number | Date

export type Arg = {
    key: string
    label: string
    payload: Payload
}

export type Env = {
    key: string
    value: string
}

export type Feature = {
    path: string
    label: string
    broker: Broker
    args: Arg[]
    pipeInArg?: string
    resultAction: ResultAction
}

export interface Broker {
    path: string
    description: string
    features: Feature[]
    environment: Env[]
    run (key: string, args:Arg[]) :void
}

export type Routine = {
    name: string
    description: string
    status?: string
    nextTimeout?: string
    lastRun?: string
    jobs: Feature[]
}

enum ApiParamType {
    String, Number, Time
}

type ApiParam = {
    name:string
    type:ApiParamType
}

type ApiFeature = {
    path:string
    description: string
    params:ApiParam[]
    responseType:ResponseType
}

export class RemoteBroker implements Broker {
    path: string
    description: string
    features: Feature[] = []
    environment: Env[] = []

    constructor(path:string ,description:string) {
        this.path = path
        this.description = description
    }

    getFeatures (success:Function, failure:Function) {
        axios.get(this.path +'/features')
            .then((res:AxiosResponse<ApiFeature[]>) => {
                res.data.forEach(feature => {
                    this.features.push({path:feature.path.slice(1), label:feature.path, broker:this, resultAction:ResultAction.log, args:feature.params.map(param => {
                        return {key:param.name, label:param.name, payload:''}
                        })})
                })
                success('feature list created')
            }).catch(err => failure(err))
    }

    run(key: string, args: Arg[]): void {
    }

}

export class SelfBroker implements Broker {
    path = 'self'
    description = 'self'
    features: Feature[] = [
        {path:'browserNotify', label: 'Browser Notify', broker:this,
            args: [
                {key:'text', label: 'Text', payload:''},
            ],
            pipeInArg: 'text',
            resultAction: ResultAction.self
        },
        {path:'editText', label: 'Edit Text', broker:this,
            args: [
                {key:'text', label: 'Text', payload: ''},
            ],
            pipeInArg: 'text',
            resultAction: ResultAction.pipe
        }]
    environment: Env[] = []

    private browserNotify = (args: Arg[]) => {
        if (Notification.permission === "granted") {
            const notification = new Notification(args[0].payload as string)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                new Notification(args[0].payload as string)
            });
        }
    }

    private edit (args: Arg[]) {
        if (Notification.permission === "granted") {
            const notification = new Notification(args[0].payload +' ' +args[1].payload)
            console.log(notification)
        } else if (Notification.permission !== "denied") {
            Notification.requestPermission().then(permission => {
                new Notification(args[0].payload +' ' +args[1].payload)
            });
        }
    }

    run (key:string, args: Arg[]) {
        (this as any)[key](args)
    }
}

