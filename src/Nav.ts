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
            // : {link: nav, title: nav},
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
    // : {
    //     heading: nav.heading,
    //     items: {
    //         : {link: nav.items.link, title: nav.title},
    //         // : {link: nav.link, title: nav.title},
    //     }
    // },

}

export default Nav