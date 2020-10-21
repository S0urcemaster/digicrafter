import {Duration} from "date-fns";

export type UpdateLog = {
    project: number,
    log: string,
    duration: Duration,
}

export type UpdateLogs = {
    date: Date,
    logs: Array<UpdateLog>,
    total: Duration,
}

export enum project {
    digicrafter,
    pgenerator,
    digiop,
    kontakt,
    digapi
}

let durations: (Duration)[] = []

function addDuration(h?: number, m?: number): Duration {
    const d = {hours: h, minutes: m}
    durations.push(d)
    return d
}

function sumDurations(): Duration {
    let hours: number = 0, minutes: number = 0
    durations.forEach((duration) => {
        hours += duration.hours!
        minutes += duration.minutes!
    })
    hours += Math.floor(minutes / 60)
    minutes = minutes % 60
    durations = []
    return {hours, minutes}
}

export const updateLogs: Array<UpdateLogs> = [
    // {
    //     date: new Date('2020-'),
    //     logs: [
    //         {project: project, log:"", duration: addDuration()},
    //     ],
    //     total: sumDurations()
    // },
    {
        date: new Date('2020-10-21'),
        logs: [
            {project: project.digiop, log:"Reworking UI", duration: addDuration(3, 0)},
            {project: project.digiop, log:"Refactorings; Cleanup; subrouting", duration: addDuration(1, 40)},
            {project: project.digiop, log:"Routine Planner Brokers first layout", duration: addDuration(3, 0)},
            {project: project.digiop, log:"Added Routine Form", duration: addDuration(1, 0)},
            {project: project.digapi, log:"Starting server", duration: addDuration(1, 40)},
            {project: project.digapi, log:"Load/Save Brokers & Routines", duration: addDuration(2, 30)},
            {project: project.digiop, log:"Menu fix; New Env variable; Broker selection", duration: addDuration(3, 20)},
            {project: project.digiop, log:"Display Features; Jobs first approach", duration: addDuration(0, 50)},
            // {project: project.digiop, log:"", duration: addDuration()},
        ],
        total: sumDurations()
    },
    {
        date: new Date('2020-10-16'),
        logs: [
            {project: project.digiop, log:"Refactoring; Types adjustments", duration: addDuration(1, 30)},
            {project: project.digiop, log:"Bugfixing changes", duration: addDuration(0, 30)},
            {project: project.digiop, log:"Model/Feature Form fix", duration: addDuration(1, 30)},
            {project: project.digiop, log:"Dummy Content", duration: addDuration(1, 10)},
            {project: project.digiop, log:"Example Routine; fixes", duration: addDuration(1, 10)},
            {project: project.digiop, log:"New Routine, PGenerator layout fix", duration: addDuration(1, 20)},
            {project: project.digiop, log:"Cleanup; Deployment", duration: addDuration(0, 20)},
            {project: project.digiop, log:"Read api/features; added LogView", duration: addDuration(2, 20)},
            {project: project.digiop, log:"IndexedDB", duration: addDuration(1, 30)},
            {project: project.digiop, log:"IndexedDB", duration: addDuration(2, 50)},
            {project: project.digicrafter, log:"Presentation pages revision", duration: addDuration(2, 20)},
            {project: project.digicrafter, log:"Presentation pages changes", duration: addDuration(2, 0)},
            {project: project.digicrafter, log:"Build fixes & release; added Insights page and content", duration: addDuration(3, 50)},
            // {project: project.digiop, log:"", duration: addDuration()},
        ],
        total: sumDurations()
    },
    {
        date: new Date('2020-10-08'),
        logs: [
            {project: project.digiop, log:"Added Digiop & basic layout", duration: addDuration(3, 0)},
            {project: project.digiop, log:"Added Form for Copy; invented Program generic handling", duration: addDuration(3, 30)},
            {project: project.digiop, log:"Added Connections and IndexedDB support", duration: addDuration(1, 20)},
            {project: project.digiop, log:"Layout, Form changes; ideas", duration: addDuration(1, 10)},
            {project: project.digiop, log:"Object style forms; IndexedDB Bug", duration: addDuration(4,0)},
            {project: project.digiop, log:"Models refactoring", duration: addDuration(1, 20)},
            {project: project.digiop, log:"Command form with variable payload; remove warning", duration: addDuration(5, 10)},
            {project: project.digiop, log:"Styling", duration: addDuration(0, 30)},
            {project: project.digiop, log:"Renaming/Refactoring", duration: addDuration(1, 10)},
            {project: project.digiop, log:"Common ListNavigator added; Op structure changes; Refactorings", duration: addDuration(4, 0)},
            {project: project.digiop, log:"Refactoring Operation types, ListNavigator Alpha", duration: addDuration(2, 30)},
            {project: project.digiop, log:"ListNavigator working", duration: addDuration(0,40)},
            {project: project.digiop, log:"Timeout/Repeat approach", duration: addDuration(0, 40)},
            {project: project.digiop, log:"DigiOp Info; PGenerator form fixes;Quotes", duration: addDuration(3,20)},
            {project: project.digiop, log:"Fix initial menu path; display multiple source files", duration: addDuration(2, 20)},
        ],
        total: sumDurations()
    },
    {
        date: new Date('2020-09-29'),
        logs: [
            {project: project.digicrafter, log:"Added hotlink button;Added projects:todo", duration: addDuration(0, 20)},
            {project: project.digicrafter, log:"AWS Account & Docs", duration: addDuration(1,0)},
            {project: project.digicrafter, log:"Content layout & styling", duration: addDuration(1, 30)},
            {project: project.digicrafter, log:"Added Internal/ExternalLink; Fixed column content layout; Fixing ContentTabs layout", duration: addDuration(0,50)},
            {project: project.digicrafter, log:"AWS user configuration", duration: addDuration(0,50)},
            {project: project.pgenerator, log:"Password Generator words", duration: addDuration(5, 30)},
            {project: project.pgenerator, log:"Front page update; pgenerator page; sider styling", duration: addDuration(1,30)},
            {project: project.pgenerator, log:"PG filter words list", duration: addDuration(4, 20)},
            {project: project.pgenerator, log:"PG API Controller", duration: addDuration(1,10)},
            {project: project.pgenerator, log:"PG build grammar", duration: addDuration(1, 0)},
            {project: project.pgenerator, log:"PG enhance word list", duration: addDuration(3, 10)},
            {project: project.pgenerator, log:"PG filter words list", duration: addDuration(3, 0)},
            {project: project.pgenerator, log:"PG Backend", duration: addDuration(0, 30)},
            {project: project.pgenerator, log:"PG Frontend", duration: addDuration(2, 50)},
            {project: project.pgenerator, log:"PG verbs fix", duration: addDuration(1, 10)},
            {project: project.pgenerator, log:"PG Frontend", duration: addDuration(1, 40)},
            {project: project.pgenerator, log:"Password Generator 0.1 finished", duration: addDuration(10, 0)},
            {project: project.pgenerator, log:"Deployment", duration: addDuration(1, 40)},
            {project: project.pgenerator, log:"Frontend last changes", duration: addDuration(2, 40)},
        ],
        total: sumDurations()
    },
    {
        date: new Date('2020-09-12'),
        logs: [
            {project: project.digicrafter, log:"Changing menu structure; changing UpdateLog", duration: addDuration(1, 45)},
            {project: project.digicrafter, log:"Changing menu structure", duration: addDuration(1, 15)},
            {project: project.digicrafter, log:"Adding IndexedDB functionality", duration: addDuration(1, 30)},
            {project: project.digicrafter, log:"Add home text; set active main menu to location", duration: addDuration(0, 30)},
            {project: project.digicrafter, log:"Separated internal/external links; Changed internal/external link colors", duration: addDuration(0, 30)},
            {project: project.digicrafter, log:"Testing an Email API", duration: addDuration(1, 10)},
            {project: project.digicrafter, log:"Trying to fix routing from url", duration: addDuration(0, 30)},
            {project: project.digicrafter, log:"Homepage changed; build; deploy", duration: addDuration(0, 30)},
        ],
        total: sumDurations()
    },
]

