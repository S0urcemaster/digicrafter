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
        case 'junit':
            return frameworkTag('JUnit')
        case 'bea':
            return frameworkTag('BEA Application Server')
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
            <Title level={3}>Finished Projects</Title>
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
                           description: <Link href="https://digi-craft.de/customerboard" target="_blank">Kundenbesuchsdatenbank (digi-craft.de)</Link>,
                           tech: tags(['php', 'laravel', 'vue', 'git', 'javascript', 'phpstorm', 'npm', 'composer']),
                           scope: "3 months",
                           repo: <Link href="https://github.com/flammt/CustomerBoard" target="_blank">flammt/CustomerBoard</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2020",
                           description: <Link href="https://www.beatport.com/track/scanning-the-universe-original-mix/14008589" target="_blank">Scanning The Universe (beatport.com)</Link>,
                           tech: tags(['studioone', 'maschine']),
                           scope: "4 days",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2020",
                           description: <Link href="https://www.beatport.com/release/out-of-nowhere/3026120" target="_blank">Out of Nowhere (beatport.com)</Link>,
                           tech: tags(['abletonlive', 'maschine']),
                           scope: "3 days",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2019",
                           description: <Link href="https://open.spotify.com/album/7dQrrr2DFlZu9BIOaxSmhk" target="_blank">Electronic Test Drive (spotify.com)</Link>,
                           tech: tags(['studioone', 'maschine']),
                           scope: "3 months",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2018",
                           description: "Reifendatenbank Training und Prototyp",
                           tech: tags(['php', 'laravel', 'composer', 'npm', 'html', 'css']),
                           scope: "100 hours",
                           repo: <Link href="https://github.com/snhub/tyreDB" target="_blank">snhub/tyreDB</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2018",
                           description: <Link href="https://open.spotify.com/album/5SGFURqykv4e6WHWk9NquU" target="_blank">Incredible Acceleration (spotify.com)</Link>,
                           tech: tags(['studioone']),
                           scope: "1 month",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2018",
                           description: <Link href="https://www.youtube.com/watch?v=nO1EzfgGrsI" target="_blank">Traktor Mapping für P32 DJ Controller (youtube.com)</Link>,
                           tech: tags(['autohotkey', 'traktorpro']),
                           scope: "2 weeks",
                           repo: <Link href="https://github.com/snhub/Hercules-P32-DJ" target="_blank">snhub/Hercules-P32-DJ</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2016",
                           description: <Link href="https://www.youtube.com/watch?v=L1iO52-rHIE" target="_blank">Traktor Midi Transceiver für Ableton Push</Link>,
                           tech: tags(['java', 'traktorpro']),
                           scope: "2 weeks",
                           repo: <Link href="https://github.com/snhub/PushDJ" target="_blank">snhub/PushDJ</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2015",
                           description: "Notebooksteuerung im LKW",
                           tech: tags(['autohotkey']),
                           scope: "2 weeks",
                           repo: <Link href="https://github.com/snhub/numpad" target="_blank">snhub/numpad</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2012",
                           description: <Link href="https://www.youtube.com/watch?v=nu1nf0OJI3k" target="_blank">Automatisierung mit Minecraft Computercraft (youtube.com)</Link>,
                           tech: tags(['minecraft']),
                           scope: "75 YT Vids",
                           repo: <Link href="https://github.com/snhub/CCLua" target="_blank">snhub/CCLua</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "2007",
                           description: "J2EE Backend",
                           tech: tags(['java', 'junit', 'jpahibernate', 'bea', 'sql']),
                           scope: "7 months",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: tags([]),
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: tags([]),
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                   ]}
            />
            <Title level={3}>Unfinished Projects</Title>
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
                           year: "2008",
                           description: "Geplante, parallele Datensicherung",
                           tech: tags(['java']),
                           scope: "1 month",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           year: "2008",
                           description: "Zertifizierungsaufgabe (Parallel Programming)",
                           tech: tags(['java']),
                           scope: "2 weeks",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2002",
                           description: "Java/Website Training",
                           tech: tags(['java', 'javascript', 'html']),
                           scope: "2 months",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: tags([]),
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: tags([]),
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                       {
                           key: keyUp(),
                           year: "",
                           description: "",
                           tech: tags([]),
                           scope: "",
                           repo: <Link href="" target="_blank">github.com</Link>,
                       },
                   ]}
            />
        </Content>
    )

}