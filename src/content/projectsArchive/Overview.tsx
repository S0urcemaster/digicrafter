import React from "react";
import {Table, Tag, Typography} from "antd";
import Content from "../../components/Content";
import {format} from "date-fns";

const {Title, Text, Link} = Typography

function languageTag (tag:string) : React.ReactElement {
    return <Tag color="green">{tag}</Tag>
}

function frameworkTag (tag:string) : React.ReactElement {
    return <Tag color="red">{tag}</Tag>
}


function softwareTag (tag:string) : React.ReactElement {
    return <Tag color="blue">{tag}</Tag>
}



function techToTag(tech:string):React.ReactElement {
    switch (tech) {
        case 'react':
            return frameworkTag('React')
        case 'vue':
            return frameworkTag('Vue')
        case 'php':
            return languageTag('PHP')
        case 'laravel':
            return frameworkTag('Laravel')
        case 'html':
            return languageTag('HTML')
        case 'css':
            return languageTag('CSS')
        case 'javascript':
            return languageTag('JavaScript')
        case 'typescript':
            return languageTag('TypeScript')
        case 'xml':
            return languageTag('XML')
        case 'java':
            return languageTag('Java')
        case 'autohotkey':
            return languageTag('Autohotkey')
        case 'jpahibernate':
            return frameworkTag('JPA/Hibernate')
        case 'sql':
            return languageTag('SQL')
        case 'scala':
            return languageTag('Scala')
        case 'lua':
            return languageTag('Lua')
        case 'csharp':
            return languageTag('C#')
        case 'git':
            return softwareTag('Git')
        case 'materialui':
            return frameworkTag('Material UI')
        case 'studioone':
            return softwareTag('Studio One')
        case 'abletonlive':
            return softwareTag('Ableton Live')
        case 'maschine':
            return softwareTag('Maschine 2')
        case 'traktorpro':
            return softwareTag('Traktor Pro')
        case 'blender':
            return softwareTag('Blender 3D')
        case 'eclipse':
            return softwareTag('Eclipse')
        case 'netbeans':
            return softwareTag('NetBeans')
        case 'minecraft':
            return softwareTag('Minecraft (ComputerCraft)')
        case 'phpstorm':
            return softwareTag('PHPStorm')
        case 'npm':
            return softwareTag('npm')
        case 'composer':
            return softwareTag('Composer')
        // case '':
        //     return <Tag color=""></Tag>
        // case '':
        //     return <Tag color=""></Tag>
        default:
            return <Tag color="cyan">Not found</Tag>
    }
}

function tags (names:string[]) {
    return names.map(name => techToTag(name))
}

export default function  () {

    let key = 1

    function keyUp () {
        return (key++).toString()
    }

    return (
        <Content title="Projects Archive Overview">
            <Title level={3}>All Finished Projects</Title>
            <Table pagination={false}
                   columns={[
                       {title: "Year", dataIndex: "year", key: "year"},
                       {title: "Description", dataIndex: "description", key: "description"},
                       {title: "Tech", dataIndex: "tech", key: "tech"},
                       {title: "Scope", dataIndex: "scope", key: "scope"},
                       {title: "Repo", dataIndex: "repo", key: "repo"},
                   ]}
                   dataSource={[
                       {
                           key: keyUp(),
                           year: "2020",
                           description: <Link href="https://digi-craft.de/customerboard" target="_blank">Kundenbesuchsdatenbank</Link>,
                           tech: tags(['php', 'laravel', 'vue', 'git', 'javascript', 'phpstorm', 'npm', 'composer']),
                           scope: "3 months",
                           repo: <Link href="https://github.com/flammt/CustomerBoard" target="_blank">flammt/CustomerBoard</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2020",
                           description: <Link href="https://www.beatport.com/track/scanning-the-universe-original-mix/14008589" target="_blank">Scanning The Universe</Link>,
                           tech: tags(['studioone', 'maschine']),
                           scope: "4 days",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2020",
                           description: <Link href="https://www.beatport.com/release/out-of-nowhere/3026120" target="_blank">Out of Nowhere</Link>,
                           tech: tags(['studioone', 'maschine']),
                           scope: "3 days",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: "",
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: "",
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: "",
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                   ]}
            />
        </Content>
    )

}