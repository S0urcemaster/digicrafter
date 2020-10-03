import Dexie, {Table} from 'dexie';

export interface IDBConnection {
    id?: number,
    name: string,
    description: string,
    path: string,
}

export interface IDBProgram {
    id?: number,
    name: string,
    description: string,
    command: string,
    nextTimeout: Date,
    repeat: boolean,
}

export class DBConnection implements IDBConnection {
    description: string;
    id: number | undefined;
    name: string;
    path: string;

    constructor(name: string, description: string, path: string, id?:number) {
        this.name = name
        this.description = description
        this.path = path
        if(id) this.id = id
    }

    save () {
        return idb.transaction('rw', idb.dbConnections, async () => {
            this.id = await idb.dbConnections.put(this)
        })
    }

}

export class Idb extends Dexie {

    dbConnections: Table<IDBConnection, number>;
    dbPrograms: Table<IDBProgram, number>;

    constructor () {
        super("Idb")
        this.version(1).stores({
            dbConnections: '++id, name, description, &path',
            dbPrograms: '++id, name, description, command, nextTimeout, repeat',
        })
        this.dbConnections = this.table('dbConnections')
        this.dbPrograms = this.table('dbPrograms')
    }
}

export const idb = new Idb()