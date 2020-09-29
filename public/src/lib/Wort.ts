
export class Wort {

    stamm: string = ''

    constructor(stamm:string) {
        this.stamm = stamm
    }

}

enum Genus {
    m, f, n
}

export class Nomen extends Wort {
    genus:Genus = Genus.m
}

export class Verb extends Wort {

}

const schoen = new Verb('schön')

const stuhl:Nomen = {
    stamm: 'Stuhl',
    genus: Genus.m,
}

const geheim:Verb = {
    stamm: 'geheim'
}

const klug = {
    stamm: 'klug',
    der: 'kluge',
    die: 'kluge',
    das: 'kluge',

}