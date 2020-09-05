import * as local from './local'

const {nav} = local.en

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
            passwordGenerator: {
                link: nav.tools.items.passwordGenerator.link,
                title: nav.tools.items.passwordGenerator.title
            },
        }
    },
    projects: {
        heading: nav.projects.heading,
        items: {
            digicrafter: {link: nav.projects.items.digicrafter.link, title: nav.projects.items.digicrafter.title}
        }
    }

}

export default Nav