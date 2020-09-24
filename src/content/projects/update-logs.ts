import {Duration, formatDuration} from "date-fns";

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
    kontakt,
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
        date: new Date('2020-09-15'),
        logs: [
            {project: project.digicrafter, log:"Added hotlink button;Added projects:todo", duration: addDuration(0, 20)},
            {project: project.digicrafter, log:"AWS Account & Docs", duration: addDuration(1,0)},
            {project: project.digicrafter, log:"Content layout & styling", duration: addDuration(1, 30)},
            {project: project.digicrafter, log:"Added Internal/ExternalLink; Fixed column content layout; Fixing ContentTabs layout", duration: addDuration(0,50)},
            {project: project.digicrafter, log:"AWS user configuration", duration: addDuration(0,50)},
            {project: project.digicrafter, log:"Password Generator words", duration: addDuration(5, 30)},
            {project: project.digicrafter, log:"Front page update; pgenerator page; sider styling", duration: addDuration(1,30)},
            {project: project.digicrafter, log:"PG filter words list", duration: addDuration(4, 20)},
            {project: project.digicrafter, log:"PG API Controller", duration: addDuration(1,10)},
            {project: project.digicrafter, log:"PG build grammar", duration: addDuration(1, 0)},
            {project: project.digicrafter, log:"PG enhance word list", duration: addDuration(3, 10)},
            {project: project.digicrafter, log:"PG filter words list", duration: addDuration(3, 0)},
            {project: project.digicrafter, log:"PG Backend", duration: addDuration(0, 30)},
            {project: project.digicrafter, log:"PG Frontend", duration: addDuration(2, 50)},
            {project: project.digicrafter, log:"PG verbs fix", duration: addDuration(1, 10)},
            {project: project.digicrafter, log:"PG Frontend", duration: addDuration(1, 40)},
            // {project: project.digicrafter, log:"", duration: addDuration()},
            // {project: project.digicrafter, log:"", duration: addDuration()},
            // {project: project.digicrafter, log:"", duration: addDuration()},
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

