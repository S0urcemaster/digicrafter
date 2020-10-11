import React from "react";
import {Typography} from "antd";
import '../css/App.css'
import Content, {Item, Columns, Title} from "../components/Content";
import axios from 'axios'
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";
import {Nav} from "../lib/Nav";

const {Text} = Typography

export default function Home () {

    function send () {
        axios({
            method: 'post',
            url: 'https://api.elasticemail.com/v2/email/send',
            data: {
                'from': 'sebastian-teister@outlook.de',
                'fromName': 'Sebastian Teister',
                'to': 'snteister@gmail.com',
                'apikey': '',
                'subject': 'test',
                'bodyText': 'test',
                'bodyHtml': 'test',
                'isTransactional': 'true',
            }
        }).then(res => {
                console.log(res.data)
            });
    }

    return (
        <Content>
            <Title>digicrafter's digital devices</Title>
            {/*<Button onClick={send}>Send</Button>*/}
            <Columns count={2}>
                <Item>
                    <Typography.Title level={3}>What's Here?</Typography.Title>
                    <ul>
                        <li><InternalLink to={Nav.tools.items.passwordGenerator.link}>{Nav.tools.items.passwordGenerator.title} 0.1</InternalLink></li>
                        <li><InternalLink to={Nav.projects.items.overview.link}>Projects {Nav.projects.items.overview.title}</InternalLink></li>
                        <li><InternalLink to={Nav.projects.items.archive.link}>{Nav.projects.items.archive.title}</InternalLink></li>
                        <li><ExternalLink href="https://digi-craft.de/customerboard/#/browseAccounts/account/2">Latest productive Project</ExternalLink></li>
                        {/*<li><InternalLink to={Nav}>{}</InternalLink></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                    <Text>More links on the projects /archive pages.</Text>
                </Item>
                <Item>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <Typography.Title level={3}>Finished Readable Password Generator 0.1</Typography.Title>
                        <div><Typography.Title level={3}>29.09.2020</Typography.Title></div>
                    </div>
                    <ul>
                        <li><Text>Generate secure passwords you can easily read and write.</Text></li>
                        <li><Text>Season the generated passwords with extra symbols or numbers.</Text></li>
                        <li><Text>Generate as much passwords as you like until you find one you like.</Text></li>
                        <li><Text>Input your own words to play around with them.</Text></li>
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
            </Columns>
            {/*<Columns count={2}>*/}
            {/*    <Item>*/}
            {/*        <Typography.Title level={3}>Functioning</Typography.Title>*/}
            {/*        <ul>*/}
            {/*            <li><Text>Internal links switch the main menu</Text></li>*/}
            {/*            <li><Text>Source code of active page loaded async when present (button top-right)</Text></li>*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*        </ul>*/}
            {/*    </Item>*/}
            {/*    <Item>*/}
            {/*        <Typography.Title level={3}>Not Functioning</Typography.Title>*/}
            {/*        <ul>*/}
            {/*            <li><Text></Text></li>*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*        </ul>*/}
            {/*    </Item>*/}
            {/*</Columns>*/}

        </Content>
    )

}