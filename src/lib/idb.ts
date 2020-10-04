import Dexie, {Table} from 'dexie';

export interface IDBEndpoint {
    id?: number,
    name: string,
    description: string,
    path: string,
}

export interface IDBCommand {
    // id?: number,
    name: string,
    path: string,
    payload?: any,
}

export interface IDBProgram {
    id?: number,
    name: string,
    description: string,
    commands: number[],
    // nextTimeout: Date,
    // repeat: boolean,
    run () :void
}

export class DBCommand implements IDBCommand {
    id?: number
    name: string
    path: string
    payload?: any

    constructor(name: string, path: string, payload?: any, id?:number) {
        this.name = name
        this.path = path
        this.payload = payload
        if(id) this.id = id
    }

    // save () {
    //     return idb.transaction('rw', idb.dbCommands, async () => {
    //         this.id = await idb.dbCommands.put(this)
    //     })
    // }

}

export class DBEndpoint implements IDBEndpoint {
    id?: number
    name: string
    description: string
    path: string

    constructor(name: string, description: string, path: string, id?:number) {
        this.name = name
        this.description = description
        this.path = path
        if(id) this.id = id
    }

    // save () {
    //     return idb.transaction('rw', idb.dbEndpoints, async () => {
    //         this.id = await idb.dbEndpoints.put(this)
    //     })
    // }
}

export class DBProgram {
    id?: number
    name: string
    description: string
    // commands: number[] = []
    // nextTimeout: Date
    // repeat: boolean

    constructor(name: string, description: string, id?:number) {
        this.name = name
        this.description = description
        // this.commands = commands
        // if(id) this.id = id
        // else this.id = -1
    }

    // run () {
    //     this.commands.forEach(command => {
    //         //axios put to path with payload
    //
    //     })
    // }
    save () {
        return idb.transaction('rw', idb.dbPrograms, async () => {
            delete this.id
            console.log(this)
            let id = await idb.dbPrograms.add(this);
            // this.id = await idb.dbPrograms.add(new DBProgram(this.name, this.description, this.commands));
            // let id = await idb.dbPrograms.add({name: this.name, description: this.description, commands: this.commands} as DBProgram);
            // this.id = await idb.dbPrograms.add(this);
        });
    }
}

export class Idb extends Dexie {

    // dbEndpoints: Table<IDBEndpoint, number>
    // dbCommands: Table<IDBCommand, number>
    dbPrograms: Table<DBProgram, number>

    constructor () {
        super("Idby")
        this.version(1).stores({
            // dbEndpoints: '++id, name, description, &path',
            // dbCommands: '++id, &name, path, payload',
            dbPrograms: '++id, name, description, commands',
            // dbPrograms: '++id, name, description, commands, nextTimeout, repeat',
        })
        // this.dbEndpoints = this.table('dbEndpoints')
        // this.dbCommands = this.table('dbCommands')
        this.dbPrograms = this.table('dbPrograms')
        // this.dbCommands.mapToClass(DBCommand)
        this.dbPrograms.mapToClass(DBProgram)
        // this.dbEndpoints.mapToClass(DBEndpoint)
    }
}

export const idb = new Idb()