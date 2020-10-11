import React from "react";
import {idb} from "./idb";

export enum EndpointType {
    self = 'self', local = 'local', remote = 'remote'
}

export interface IEndpoint {
    id?: number,
    name: string,
    description: string,
    type: EndpointType
    path: string,
}

export interface ICommand {
    id?: number,
    name: string,
    path: string,
}

export interface IProgram {
    id?: number,
    name: string,
    description: string,
    commands: ICommand[],
    // nextTimeout: Date,
    // lastrun: boolean,
    run () :void
}

export class Command implements ICommand {
    id?: number
    name: string
    path: string
    endpoint?: IEndpoint
    payload?: any

    constructor(name: string, path: string, endpoint?: IEndpoint, payload?: any, id?:number) {
        this.name = name
        this.path = path
        if (endpoint) this.endpoint = endpoint
        if (payload) this.payload = payload
        if (id) this.id = id
    }

    save () {
        return idb.transaction('rw', idb.dbCommands, async () => {
            this.id = await idb.dbCommands.put(this)
        })
    }

}

export class Endpoint implements IEndpoint {
    id?: number
    name: string
    description: string
    type: EndpointType;
    path: string

    constructor(name: string, description: string, type:EndpointType, path: string, id?:number) {
        this.name = name
        this.description = description
        this.type = type
        this.path = path
        if(id) this.id = id
    }

    save () {
        return idb.transaction('rw', idb.dbEndpoints, async () => {
            this.id = await idb.dbEndpoints.put(this)
        })
    }

}

export class Program implements IProgram {
    id?: number
    name: string
    description: string
    commands: ICommand[] = []
    // nextTimeout: Date
    // repeat: boolean

    constructor(name: string, description: string, commands: ICommand[], id?:number) {
        this.name = name
        this.description = description
        this.commands = commands
        if(id) this.id = id
    }

    run () {
        this.commands.forEach(id => {return idb.transaction('rw', idb.dbCommands, async () => {
            const command = await idb.dbCommands.get(id);
            // this.id = await idb.dbPrograms.add(new Program(this.name, this.description, this.digiop));
            // let id = await idb.dbPrograms.add({name: this.name, description: this.description, digiop: this.digiop} as Program);
            // this.id = await idb.dbPrograms.add(this);
        })})
    }
    save () {
        return idb.transaction('rw', idb.dbPrograms, async () => {
            delete this.id
            this.id = await idb.dbPrograms.add(this);
        })
    }
}

export type UICommand = {
    name: string,
    route: string,
    component: React.ComponentType<any>,
}