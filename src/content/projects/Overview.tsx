import React from "react";
import {Table, Typography} from "antd";
import '../../css/App.css'
import tags from "./Tags";
import {Link} from 'react-router-dom'
import {Nav} from "../../lib/Nav";

const {Title, Text} = Typography

export default function ProjectsOverview () {

    let key = 1

    function keyUp () {
        return (key++).toString()
    }


    return (
        <>
            <Title level={3}>Active Projects</Title>
            <Title level={4}>Overall Experience:</Title>
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
                           started: "9/2020",
                           title: <Link to={Nav.home.items.landing.link}>digicrafter (digi-craft.de)</Link>,
                           description: 'Single-Page Homepage',
                           motivation: 'Fun/Training',
                           tech: tags(['react', 'typescript', 'antdesign', 'css', 'phpstorm']),
                           scope: "1 month",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           started: "8/2020",
                           title: <Link to={Nav.tools.items.passwordGenerator.link}>Readable Password Generator (digi-craft.de)</Link>,
                           description: 'Tool',
                           motivation: 'Need',
                           tech: tags(['typescript', 'javascript']),
                           scope: "short",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           started: "8/2020",
                           title: <Link to={Nav.tools.items.edit.link}>digi/>type (digi-craft.de)</Link>,
                           description: 'Tool',
                           motivation: 'Fun/Need',
                           tech: tags(['typescript', 'react']),
                           scope: "medium",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           started: "8/2020",
                           title: <Typography.Link href="https://digi-craft.de/kontaktbase" target="_blank">kontakt 0.2 (digi-craft.de)</Typography.Link>,
                           description: 'CRM Port of Customerboard',
                           motivation: 'Training',
                           tech: tags(['react', 'typescript', 'antdesign', 'phpstorm', 'css']),
                           scope: "3 months",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           started: "7/2020",
                           title: <Typography.Link href="https://digi-craft.de/kontakt" target="_blank">kontakt 0.1 (digi-craft.de)</Typography.Link>,
                           description: 'CRM Port of Customerboard',
                           motivation: 'Auftrag',
                           tech: tags(['react', 'javascript', 'materialui', 'phpstorm', 'css']),
                           scope: "3 months discontinued",
                           repo: <Typography.Link href="https://github.com/S0urcemaster/kontakt" target="_blank">S0urcemaster/kontakt</Typography.Link>,
                       },
                       {
                           key: keyUp(),
                           started: "2014",
                           title: <Link to={Nav.tools.items.timers.link}>Timers (digi-craft.de)</Link>,
                           description: 'Tool',
                           motivation: 'Need',
                           tech: tags(['typescript', 'react']),
                           scope: "medium",
                           repo: "",
                       },
                       // {
                       //     key: keyUp(),
                       //     started: "2020",
                       //     title: <Link href="https://digi-craft.de/customerboard" target="_blank">Kundenbesuchsdatenbank (digi-craft.de)</Link>,
                       //     description: 'In-house CRM Projekt. Kunden- und Kontaktdaten, Besuchsberichte',
                       //     motivation: 'Auftrag',
                       //     tech: tags(['php', 'laravel', 'vue', 'git', 'javascript', 'phpstorm', 'npm', 'composer']),
                       //     scope: "3 months",
                       //     repo: <Link href="https://github.com/flammt/CustomerBoard" target="_blank">flammt/CustomerBoard</Link>,
                       // },
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
            <Title level={5}></Title>
            <Title level={2}>digicrafter</Title>
            <Title level={3}>Motivation</Title>
            <ul>
                <li><Text>My server is now some years around with no homepage</Text></li>
                <li><Text>Tracking my React training progress</Text></li>
                <li><Text>Building Single Page Applications is fun</Text></li>
                <li><Text>Writing programs to my liking is fun</Text></li>
                <li><Text>Showcasting my projects</Text></li>
                <li><Text>Creating my own editor</Text></li>
                <li><Text>Approaching some long planned projects</Text></li>
                <li><Text>Getting my reputation up</Text></li>
                <li><Text></Text></li>
                <li><Text></Text></li>
            </ul>
        </>
    )

}