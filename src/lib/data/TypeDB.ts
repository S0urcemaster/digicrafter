import Dexie from 'dexie';

interface IFriend {
    id?: number;
    name?: string;
    age?: number;
}

//
// Declare Database
//
class DigiTypeDB extends Dexie {

    friends: Dexie.Table<IFriend,number>;

    constructor() {
        super("digityper");
        this.version(1).stores({
            friends: "++id,name,age"
        });
        this.friends = this.table("friends");
    }
}

export const db = new DigiTypeDB();
//
// Manipulate and Query Database
//