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
        date: new Date('2020-09-11'),
        logs: [
            {project: project.digicrafter, log:"Changing menu structure; changing UpdateLog", duration: addDuration(1, 45)},
            {project: project.digicrafter, log:"Changing menu structure", duration: addDuration(1, 15)},
            // {project: project.digicrafter, log:"", duration: addDuration(0, 0)},
            // {project: project, log:"", duration: addDuration(0, 0)},
        ],
        total: sumDurations()
    },
]

