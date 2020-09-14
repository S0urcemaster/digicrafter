import React from "react";
import {Table, Typography} from "antd";
import Content from "../../components/Content";
import tags from "./Tags";
import {Experience, xpTracker} from "../../lib/Experience";
import ExternalLink from "../../components/ExternalLink";

const {Title} = Typography

export default function Archive () {

    let key = 1

    function keyUp () {
        return (key++).toString()
    }

    const duration = new xpTracker()

    return (
        <Content title="Projects Archive">
            <Title level={3}>Finished Projects</Title>
            <Table pagination={false}
                   columns={[
                       {title: "Year", dataIndex: "year", key: "year"},
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
                           year: "2020",
                           title: <ExternalLink href="https://digi-craft.de/customerboard">Kundenbesuchsdatenbank (digi-craft.de)</ExternalLink>,
                           description: 'In-house CRM Projekt. Kunden- und Kontaktdaten, Besuchsberichte',
                           motivation: 'Auftrag',
                           tech: tags(['php', 'laravel', 'vue', 'git', 'javascript', 'phpstorm', 'npm', 'composer']),
                           scope: duration.addDuration({months:3}),
                           repo: <ExternalLink href="https://github.com/flammt/CustomerBoard">flammt/CustomerBoard</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           year: "2020",
                           title: <ExternalLink href="https://www.beatport.com/track/scanning-the-universe-original-mix/14008589" target="_blank">Scanning The Universe (beatport.com)</ExternalLink>,
                           description: 'Electronic Music track',
                           motivation: 'Fun',
                           tech: tags(['studioone', 'maschine']),
                           scope: duration.addDuration({days:4}),
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2020",
                           title: <ExternalLink href="https://www.beatport.com/release/out-of-nowhere/3026120" target="_blank">Out of Nowhere (beatport.com)</ExternalLink>,
                           description: 'Electronic Music track',
                           motivation: 'Fun',
                           tech: tags(['abletonlive', 'maschine']),
                           scope: duration.addDuration({days:3}),
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2019",
                           title: <ExternalLink href="https://open.spotify.com/album/7dQrrr2DFlZu9BIOaxSmhk" target="_blank">Electronic Test Drive (spotify.com)</ExternalLink>,
                           description: 'Electronic Music album',
                           motivation: 'Fun',
                           tech: tags(['studioone', 'maschine']),
                           scope: duration.addDuration({months:3}),
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2018",
                           title: "Reifendatenbank",
                           description: 'Bewerbung- und Trainingsprojekt',
                           motivation: 'Bewerbung, Training',
                           tech: tags(['php', 'laravel', 'composer', 'npm', 'html', 'css']),
                           scope: duration.addDuration({hours:100}),
                           repo: <ExternalLink href="https://github.com/snhub/tyreDB" target="_blank">snhub/tyreDB</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           year: "2018",
                           title: <ExternalLink href="https://open.spotify.com/album/5SGFURqykv4e6WHWk9NquU" target="_blank">Incredible Acceleration (spotify.com)</ExternalLink>,
                           description: 'First Electronic Music Album',
                           motivation: 'Test, ob ich was hinkriege',
                           tech: tags(['studioone']),
                           scope: duration.addDuration({months:1}),
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2018",
                           title: <ExternalLink href="https://www.youtube.com/watch?v=nO1EzfgGrsI" target="_blank">Mapping P32 DJ Controller (youtube.com)</ExternalLink>,
                           description: 'Mapping von günstigem Controller auf Traktor Pro',
                           motivation: 'Fun, Produktinteresse',
                           tech: tags(['autohotkey', 'traktorpro']),
                           scope: duration.addDuration({weeks:2}),
                           repo: <ExternalLink href="https://github.com/snhub/Hercules-P32-DJ" target="_blank">snhub/Hercules-P32-DJ</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           year: "2016",
                           title: <ExternalLink href="https://www.youtube.com/watch?v=L1iO52-rHIE" target="_blank">Ableton Push DJ Controller Mapping (youtube.com)</ExternalLink>,
                           description: 'Umprogrammieren von Ableton Push',
                           motivation: 'Fun, Produktinteresse',
                           tech: tags(['java', 'traktorpro']),
                           scope: "2 weeks",
                           repo: <ExternalLink href="https://github.com/snhub/PushDJ" target="_blank">snhub/PushDJ</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           year: "2015",
                           title: "Notebooksteuerung im LKW",
                           description: 'Hotkeybelegung für Nummernpad, um Maus zu bedienen und Texte zu schreiben.',
                           motivation: 'Langeweile in der Nachtschicht',
                           tech: tags(['autohotkey']),
                           scope: "2 weeks",
                           repo: <ExternalLink href="https://github.com/snhub/numpad" target="_blank">snhub/numpad</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           year: "2012",
                           title: <ExternalLink href="https://www.youtube.com/watch?v=nu1nf0OJI3k" target="_blank">Automatisierung mit Minecraft Computercraft (youtube.com)</ExternalLink>,
                           description: 'Schneller und leichter Bauen und Abbauen',
                           motivation: 'Fun, Technologie',
                           tech: tags(['minecraft']),
                           scope: "75 YT Vids",
                           repo: <ExternalLink href="https://github.com/snhub/CCLua" target="_blank">snhub/CCLua</ExternalLink>,
                       },
                       {
                           key: keyUp(),
                           year: "2007",
                           title: "J2EE Backend",
                           description: 'Full Stack Java',
                           motivation: 'Auftrag',
                           tech: tags(['java', 'junit', 'jpahibernate', 'bea', 'sql']),
                           scope: "7 months",
                           repo: "",
                       },
                       // {
                       //     key: keyUp(),
                       //     year: "",
                       //     title: "",
                       //     description: '',
                       //     motivation: '',
                       //     tech: tags([]),
                       //     scope: "",
                       //     repo: <Link href="" target="_blank">github.com</Link>,
                       // },
                       // {
                       //     key: keyUp(),
                       //     year: "",
                       //     title: "",
                       //     description: '',
                       //     motivation: '',
                       //     tech: tags([]),
                       //     scope: "",
                       //     repo: <Link href="" target="_blank">github.com</Link>,
                       // },
                   ]}
            />
            <Title level={2}></Title>
            <Title level={3}>Unfinished Projects</Title>
            <Table pagination={false}
                   columns={[
                       {title: "Year", dataIndex: "year", key: "year"},
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
                           year: "2008",
                           title: "Geplante, parallele Datensicherung",
                           description: '',
                           motivation: 'Auftrag',
                           tech: tags(['java']),
                           scope: "1 month",
                           repo: '',
                       },
                       {
                           key: keyUp(),
                           year: "2008",
                           title: "Zertifizierungsaufgabe (Parallel Programming)",
                           description: 'Hat funktioniert, konnte ich aber nicht testen. Deshalb nicht abgegeben.',
                           motivation: 'Prüfung',
                           tech: tags(['java']),
                           scope: "2 weeks",
                           repo: "",
                       },
                       {
                           key: keyUp(),
                           year: "2002",
                           title: "Java/Website Training",
                           description: 'Dynamsche Homepage',
                           motivation: 'Auftrag',
                           tech: tags(['java', 'javascript', 'html']),
                           scope: "2 months",
                           repo: '',
                       },
                       // {
                       //     key: keyUp(),
                       //     year: "",
                       //     title: "",
                       //     description: '',
                       //     motivation: '',
                       //     tech: tags([]),
                       //     scope: "",
                       //     repo: <Link href="" target="_blank">github.com</Link>,
                       // },
                       // {
                       //     key: keyUp(),
                       //     year: "",
                       //     title: "",
                       //     description: '',
                       //     motivation: '',
                       //     tech: tags([]),
                       //     scope: "",
                       //     repo: <Link href="" target="_blank">github.com</Link>,
                       // },
                       // {
                       //     key: keyUp(),
                       //     year: "",
                       //     title: "",
                       //     description: '',
                       //     motivation: '',
                       //     tech: tags([]),
                       //     scope: "",
                       //     repo: <Link href="" target="_blank">github.com</Link>,
                       // },
                   ]}
            />
        </Content>
    )

}