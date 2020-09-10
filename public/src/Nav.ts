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
    }
}

const Nav:NavSection = {
    home: {
        heading: nav.home.heading,
        items: {
            landing: {link: nav.home.items.landing.link, title: nav.home.items.landing.title},
            reactTraining: {link: nav.home.items.reactTraining.link, title: nav.home.items.reactTraining.title},
            // : {link: nav.link, title: nav.title},
        }
    },
    tools: {
        heading: nav.tools.heading,
        items: {
            passwordGenerator: {link: nav.tools.items.passwordGenerator.link, title: nav.tools.items.passwordGenerator.title},
            edit: {link: nav.tools.items.writer.link, title: nav.tools.items.writer.title},
            // : {link: nav, title: nav},
            // : {link: nav, title: nav},
        }
    },
    projects: {
        heading: nav.projects.heading,
        items: {
            digicrafter: {link: nav.projects.items.digicrafter.link, title: nav.projects.items.digicrafter.title},
            kontakt: {link: nav.projects.items.kontakt.link, title: nav.projects.items.kontakt.title},
            beatportFilter: {link: nav.projects.items.beatportFilter.link, title: nav.projects.items.beatportFilter.title},
            timers: {link: nav.projects.items.timers.link, title: nav.projects.items.timers.title},
            // : {link: nav, title: nav},
        }
    },
    projectsArchive: {
        heading: nav.projectsArchive.heading,
        items: {
            overview: {link: nav.projectsArchive.items.overview.link, title: nav.projectsArchive.items.overview.title},
            pushDJ: {link: nav.projectsArchive.items.pushDJ.link, title: nav.projectsArchive.items.pushDJ.title},
            tyreDB: {link: nav.projectsArchive.items.tyreDB.link, title: nav.projectsArchive.items.tyreDB.title},
            p32DJ: {link: nav.projectsArchive.items.p32dj.link, title: nav.projectsArchive.items.p32dj.title},
            timeclockFX: {link: nav.projectsArchive.items.timeclockFX.link, title: nav.projectsArchive.items.timeclockFX.title},
            cclua: {link: nav.projectsArchive.items.cclua.link, title: nav.projectsArchive.items.cclua.title},
            // : {link: nav.link, title: nav.title},
        }
    },
    music: {
        heading: nav.music.heading,
        items: {
            production: {link: nav.music.items.production.link, title: nav.music.items.production.title},
            mixing: {link: nav.music.items.mixing.link, title: nav.music.items.mixing.title},
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

export default Nav