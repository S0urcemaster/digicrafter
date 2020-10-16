import * as local from './local'

const {nav} = local.en

// export type Nav = {
//     [key: string]: NavSection
// }

export interface NavSection {
    [key: string]: {
        heading: string,
        items: NavItem,
    }
}

export type NavItem = {
    [key: string]: {
        link: string,
        title: string,
        source: string[],
        disabled?: boolean,
    }
}

export const Nav = {
    home: {
        heading: nav.home.heading,
        items: {
            landing: {link: nav.home.items.landing.link, title: nav.home.items.landing.title,
                source:['/App.tsx', '/lib/Nav.ts']},
            reactTraining: {link: nav.home.items.reactTraining.link, title: nav.home.items.reactTraining.title,
                source: ['/content/ReactTraining.tsx']},
            // : {link: nav.link, title: nav.title},
        }
    },
    projects: {
        heading: nav.projects.heading,
        items: {
            overview: {link: nav.projects.items.overview.link, title: nav.projects.items.overview.title,
                source: ['/content/projects/Overview.tsx']},
            // digicrafter: {link: nav.projects.items.digicrafter.link, title: nav.projects.items.digicrafter.title,
            //     source: ['/content/projects/UpdateLogs.tsx']},
            // kontakt: {link: nav.projects.items.kontakt.link, title: nav.projects.items.kontakt.title,
            //     source: ['/content/Kontakt.tsx'], disabled: true},
            // beatportFilter: {link: nav.projects.items.beatportFilter.link, title: nav.projects.items.beatportFilter.title,
            //     source:['/content/MusicMixing.tsx'], disabled: true},
            // timers: {link: nav.projects.items.timers.link, title: nav.projects.items.timers.title,
            //     source: ['/content/Timers.tsx'], disabled: true},
            updateLog: {link: nav.projects.items.updateLog.link, title: nav.projects.items.updateLog.title,
                source: []},
            // : {link: nav, title: nav},
        }
    },
    tools: {
        heading: nav.tools.heading,
        items: {
            passwordGenerator: {link: nav.tools.items.passwordGenerator.link, title: nav.tools.items.passwordGenerator.title,
                source: ['/content/PasswordGenerator.tsx']},
            digiop: {link: nav.tools.items.digiop.link, title: nav.tools.items.digiop.title,
                source:['/content/DigiOp.tsx', '/content/digiop/Routines.tsx', '/content/digiop/RoutineForm.tsx', '/content/digiop/Brokers.tsx',
                    '/content/digiop/Joblist.tsx', '/components/ListNavigator.tsx', '/lib/digiop/Broker.ts']},
            edit: {link: nav.tools.items.writer.link, title: nav.tools.items.writer.title,
                source:['/content/Type.tsx']},
            tracktag: {link: nav.tools.items.tracktag.link, title: nav.tools.items.tracktag.title,
                source:['/content/TrackTag.tsx'], disabled: true},
            timers: {link: nav.tools.items.timers.link, title: nav.tools.items.timers.title,
                source:['/content/Timers.tsx'], disabled: true},
            // : {link: nav, title: nav},
        }
    },
    music: {
        heading: nav.music.heading,
        items: {
            mixing: {link: nav.music.items.mixing.link, title: nav.music.items.mixing.title,
                source:[]},
            production: {link: nav.music.items.production.link, title: nav.music.items.production.title,
                source:[]},
            // : {link: nav, title: nav},
        }
    },
    // blog: {
    //     heading: nav.blog.heading,
    //     items: {
    //         mindDistraction: {link: nav.blog.items.mindDistraction.link, title: nav.blog.items.mindDistraction.title, source:'/content/MusicMixing.tsx', disabled: true},
    //         // : {link: nav, title: nav},
    //     }
    // },
    wiki: {
        heading: nav.wiki.heading,
        items: {
            0: {link: nav.wiki.items[0].link, title: nav.wiki.items[0].title,
                source:[]},
            // : {link: nav.link, title: nav.title},
        }
    },
    // : {
    //     heading: nav.heading,
    //     items: {
    //         : {link: nav.items.link, title: nav.title},
    //         // : {link: nav.link, title: nav.title},
    //     }
    // },

}

// export default Nav