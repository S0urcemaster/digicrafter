enum EndpointType {
    self = 'self', local = 'local', remote = 'remote'
}

type Endpoint = {
    name:string,
    type:EndpointType,
}

export abstract class Command {
    name:string
    path:string
    endpoint:string = ''
    validEndpoints:EndpointType[] = []

    constructor(name: string, path: string) {
        this.name = name
        this.path = path
        this.validEndpoints = this.getValidEndpoints()
    }

    abstract getValidEndpoints() :EndpointType[]
    abstract run() :void
}

export class Copy extends Command {
    from: string = ''
    to: string = ''

    getValidEndpoints() :EndpointType[] {
        return [EndpointType.local, EndpointType.remote]
    }

    run() :void {

    }
}

export class BrowserNotify extends Command {

    getValidEndpoints(): EndpointType[] {
        return [EndpointType.self]
    }

    run(): void {
        const notification = new Notification("Hi there!")
    }
}

export const commands:Command[] = [
    {name: 'browserNotify', path: 'self'} as BrowserNotify,
    {name: 'cmsPushUpdateLog', path: 'local'} as Copy,
]

export abstract class AbstractProgram {

    name: string = ''
    commands: Command[] = []
}

export const programs:AbstractProgram[] = []

// export const programs:AbstractProgram[] = [
//     {name: 'Copy', path: '/copy', from: 'C:/test.txt', to: 'C:/copy.txt'} as Copy,
// ]

export function run (program:string) {
    alert(program)
}