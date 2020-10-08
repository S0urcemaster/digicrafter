import React from "react";
import {Tag} from "antd";


function languageTag (tag:string) : React.ReactElement {
    return <Tag key={tag} color="green">{tag}</Tag>
}

function frameworkTag (tag:string) : React.ReactElement {
    return <Tag key={tag} color="yellow">{tag}</Tag>
}

function softwareTag (tag:string) : React.ReactElement {
    return <Tag key={tag} color="blue">{tag}</Tag>
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
        case 'antdesign':
            return frameworkTag('Ant Design')
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
        case 'indexeddb':
            return frameworkTag('IndexedDB')
        case 'dexie':
            return frameworkTag('Dexie')
        case 'expressjs':
            return frameworkTag('ExpressJS')
        // case '':
        //     return Tag('')
        // case '':
        //     return Tag('')
        // case '':
        //     return Tag('')
        default:
            return <Tag color="cyan">Not found</Tag>
    }
}

export default function tags (names:string[]) {
    return names.map(name => techToTag(name))
}
