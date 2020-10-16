import React from "react";
import {Table, Typography} from "antd";
import '../../css/App.css'
import tags from "./Tags";
import {Link} from 'react-router-dom'
import {Nav} from "../../lib/Nav";
import InternalLink from "../../components/InternalLink";
import ExternalLink from "../../components/ExternalLink";
import Content, {Subtitle, Title} from "../../components/Content";

export default function ProjectsOverview () {

    let key = 1

    function keyUp () {
        return (key++).toString()
    }


    return (
        <>
            <Table pagination={false}
                   columns={[
                       {title: "Started", dataIndex: "started", key: "started"},
                       {title: "Title", dataIndex: "title", key: "title"},
                       {title: "Description", dataIndex: "description", key: "description"},
                       {title: "Motivation", dataIndex: "motivation", key: "motivation"},
                       {title: "Tech", dataIndex: "tech", key: "tech"},
                       {title: "Scope", dataIndex: "scope", key: "scope"},
                       {title: "Repo", dataIndex: "repo", key: "repo"},
                   ]}
                   dataSource={[
                       {
                           key: keyUp(),
                           started: "10/2020",
                           title: <InternalLink to={Nav.tools.items.digiop.link}>{Nav.tools.items.digiop.title} (digi-craft.de)</InternalLink>,
                           description: 'Developer Tools Manager',
                           motivation: 'Fun/Training/Need',
                           tech: tags(['react', 'typescript', 'antdesign', 'indexeddb', 'dexie', 'expressjs']),
                           scope: "2 weeks",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           started: "9/2020",
                           title: <InternalLink to={Nav.home.items.landing.link}>digicrafter (digi-craft.de)</InternalLink>,
                           description: 'Single-Page Homepage',
                           motivation: 'Fun/Training',
                           tech: tags(['react', 'typescript', 'antdesign', 'css', 'phpstorm']),
                           scope: "1 month",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           started: "8/2020",
                           title: <InternalLink to={Nav.tools.items.passwordGenerator.link}>Readable Password Generator (digi-craft.de)</InternalLink>,
                           description: 'Tool',
                           motivation: 'Need',
                           tech: tags(['typescript', 'react', 'antdesign', 'laravel', 'java']),
                           scope: "short",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           started: "8/2020",
                           title: <InternalLink to={Nav.tools.items.edit.link}>digi/&gt;type (digi-craft.de)</InternalLink>,
                           description: 'Tool',
                           motivation: 'Fun/Need',
                           tech: tags(['typescript', 'react']),
                           scope: "medium",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           started: "8/2020",
                           title: <ExternalLink href="https://digi-craft.de/kontaktbase" target="_blank">kontakt 0.2 (digi-craft.de)</ExternalLink>,
                           description: 'CRM Port of Customerboard',
                           motivation: 'Training',
                           tech: tags(['react', 'typescript', 'antdesign', 'phpstorm', 'css']),
                           scope: "3 months",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           started: "7/2020",
                           title: <ExternalLink href="https://digi-craft.de/kontakt" target="_blank">kontakt 0.1 (digi-craft.de)</ExternalLink>,
                           description: 'CRM Port of Customerboard',
                           motivation: 'Auftrag',
                           tech: tags(['react', 'javascript', 'materialui', 'phpstorm', 'css']),
                           scope: "3 months discontinued",
                           repo: <ExternalLink href="https://github.com/S0urcemaster/kontakt" target="_blank">S0urcemaster/kontakt</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           started: "2014",
                           title: <InternalLink to={Nav.tools.items.timers.link}>Timers (digi-craft.de)</InternalLink>,
                           description: 'Tool',
                           motivation: 'Need',
                           tech: tags(['typescript', 'react']),
                           scope: "medium",
                           repo: "",
                       },
                       // {
                       //     key: keyUp(),
                       //     started: "",
                       //     title: "",
                       //     description: '',
                       //     motivation: '',
                       //     tech: tags([]),
                       //     scope: "",
                       //     repo: <Link href="" target="_blank">github.com</Link>,
                       // },
                   ]}
            />
        </>
    )

}