import Dexie, {Table} from 'dexie';
import * as db from "./digiboy";

export class Idb extends Dexie {

    dbCommands: Table<db.ICommand, number>
    dbPrograms: Table<db.Program, number>
    dbEndpoints: Table<db.IEndpoint, number>

    constructor () {
        super("Digicrafter")
        this.version(1).stores({
            dbCommands: '++id, &name, path, payload',
            dbPrograms: '++id, name, description, digiboy',
            dbEndpoints: '++id, name, description, type, &path',
            // dbPrograms: '++id, name, description, digiboy, nextTimeout, repeat',
        })
        this.dbCommands = this.table('dbCommands')
        this.dbPrograms = this.table('dbPrograms')
        this.dbEndpoints = this.table('dbEndpoints')
        this.dbCommands.mapToClass(db.Command)
        this.dbPrograms.mapToClass(db.Program)
        this.dbEndpoints.mapToClass(db.Endpoint)
    }
}

export const idb = new Idb()