import Dexie, {Table} from 'dexie';

export type Payload = string | number | Date

export enum ResultAction {
    log = 'log', pipe = 'pipe', self = 'self'
}

export interface Broker {
    path: string
    description: string
    features: Feature[]
}

export type Routine = {
    name: string
    description: string
    status?: string
    nextTimeout?: string
    lastRun?: string
    jobs: string[]
}

export type Feature = {
    key: string
    label: string
    brokerPath: string
    args: Arg[]
    pipeInArg?: string
    resultAction: ResultAction
}

export type Arg = {
    key: string
    label: string
    payload: Payload
}

function stringifyJobs (jobs:any[]) {
    return jobs.map((job) => {
        return JSON.stringify({key:job.key, label:job.label, brokerPath:job.broker.path, args:job.args, pipeInArg:job.pipeInArg, resultAction:job.resultAction})
    })
}

export default class extends Dexie {

    brokers: Table<Broker, number>
    routines: Table<Routine, number>

    constructor () {
        super("DigiBase")
        this.version(1).stores({
            brokers: '++id, &path, description, features',
            routines: '++id, &name, description, status, nextTimeout, lastRun, jobs',
        })
        this.brokers = this.table('brokers')
        this.routines = this.table('routines')
        // this.broker.mapToClass()
    }

    async saveBroker (broker:Broker) {
        await this.transaction('rw', this.brokers, async () => {
            const brokerId = await this.brokers.put({path:broker.path, description:broker.description, features:broker.features})
        })
    }

    async saveRoutine (routine:any) {
        console.log('save: ' +routine)
        const jobsjson = stringifyJobs(routine.jobs)
        console.log(jobsjson)
        await this.transaction('rw', this.routines, async () => {
            const routineId = await this.routines.put({name:routine.name, description:routine.description, status:routine.status,
            nextTimeout:routine.nextTimeout, lastRun:routine.lastRun, jobs:jobsjson})
        })
    }

}