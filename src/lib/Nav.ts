import * as local from './local'

const {nav} = local.en

// export type Nav = {
//     [key: string]: NavSection
// }

export type NavSection = {
    [key: string]: {
        heading: string,
        items: NavItem,
    }
}

export type NavItem = {
    [key: string]: {
        link: string,
        title: string,
        source?: string,
    }
}

export const Nav:NavSection = {
    home: {
        heading: nav.home.heading,
        items: {
            landing: {link: nav.home.items.landing.link, title: nav.home.items.landing.title, source:'/App.tsx'},
            reactTraining: {link: nav.home.items.reactTraining.link, title: nav.home.items.reactTraining.title, source: '/content/ReactTraining.tsx'},
            // : {link: nav.link, title: nav.title},
        }
    },
    tools: {
        heading: nav.tools.heading,
        items: {
            passwordGenerator: {link: nav.tools.items.passwordGenerator.link, title: nav.tools.items.passwordGenerator.title, source: '/content/PasswordGenerator.tsx'},
            edit: {link: nav.tools.items.writer.link, title: nav.tools.items.writer.title, source:'/content/Type.tsx'},
            timers: {link: nav.tools.items.timers.link, title: nav.tools.items.timers.title, source:'/content/Timers.tsx'},
            // : {link: nav, title: nav},
            // : {link: nav, title: nav},
        }
    },
    projects: {
        heading: nav.projects.heading,
        items: {
            overview: {link: nav.projects.items.overview.link, title: nav.projects.items.overview.title, source: '/content/projects/Overview.tsx'},
            archive: {link: nav.projects.items.archive.link, title: nav.projects.items.archive.title, source: '/content/projects/Archive.tsx'},
            digicrafter: {link: nav.projects.items.digicrafter.link, title: nav.projects.items.digicrafter.title, source: '/content/projects/UpdateLogs.tsx'},
            kontakt: {link: nav.projects.items.kontakt.link, title: nav.projects.items.kontakt.title, source: '/content/Kontakt.tsx'},
            beatportFilter: {link: nav.projects.items.beatportFilter.link, title: nav.projects.items.beatportFilter.title},
            timers: {link: nav.projects.items.timers.link, title: nav.projects.items.timers.title, source: '/content/Timers.tsx'},
            // : {link: nav, title: nav},
        }
    },
    music: {
        heading: nav.music.heading,
        items: {
            production: {link: nav.music.items.production.link, title: nav.music.items.production.title, source:'/content/MusicProduction.tsx'},
            mixing: {link: nav.music.items.mixing.link, title: nav.music.items.mixing.title, source:'/content/MusicMixing.tsx'},
            // : {link: nav, title: nav},
        }
    },
    blog: {
        heading: nav.blog.heading,
        items: {
            mindDistraction: {link: nav.blog.items.mindDistraction.link, title: nav.blog.items.mindDistraction.title},
            // : {link: nav, title: nav},
        }
    },
    wiki: {
        heading: nav.wiki.heading,
        items: {
            0: {link: nav.wiki.items[0].link, title: nav.wiki.items[0].title},
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