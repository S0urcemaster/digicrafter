import * as local from './local'

const loc = local.en

export type NavItem = {
    [key: string]: {
        link: string,
        title: string,
    }
}

const Nav = {

    passwordGenerator: {link: loc.nav.passwordGenerator.link, title: loc.nav.passwordGenerator.title}

}

export default Nav