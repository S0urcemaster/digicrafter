import {Duration as fnsDuration, formatDuration} from "date-fns";

enum sector {
    programming,
    music
}

enum tech {
    react,
    typescript,
    javascript,
}

export type Experience = {
    sector: {
        tech: tech
    }
}

export class xpTracker {

    durations: (fnsDuration)[] = []
    xp: (Experience)[] = []
    sum: string = ''

    add(xp:Experience) {
        this.xp.push(xp)
    }

    addDuration(d: fnsDuration) {
        this.durations.push(d)
        return formatDuration(d)
    }

    sumDurations() {
        let years: number = 0, months:number = 0, weeks:number = 0, days:number = 0, hours: number = 0, minutes: number = 0
        this.durations.forEach((duration) => {
            months += duration.months!
            weeks += duration.weeks!
            days += duration.days!
            hours += duration.hours!
            minutes += duration.minutes!
        })
        hours += Math.floor(minutes / 60)
        minutes = minutes % 60
        days += Math.floor(hours /60)
        hours = hours %60
        months += weeks*7
        months += Math.floor(days /30)
        years += Math.floor(months /12)
        months = months %30

        this.sum = formatDuration({years:years, months:months, weeks:0, days:days, hours:hours, minutes:minutes})
    }

}
