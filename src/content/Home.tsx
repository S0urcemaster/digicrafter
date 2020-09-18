import React from "react";
import {Button, Typography} from "antd";
import '../css/App.css'
import Content, {Item, Columns, Title} from "../components/Content";
import axios from 'axios'
import {Link} from "react-router-dom";
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
                    <Typography.Title level={3}>Current Project</Typography.Title>
                    <ul>
                        <li><InternalLink to={Nav.tools.items.passwordGenerator.link}>{Nav.tools.items.passwordGenerator.title}</InternalLink></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                    <Text></Text>
                </Item>
                <Item>
                    <Typography.Title level={3}>Roadmap</Typography.Title>
                    <ul>
                        <li><Text>Backend API</Text></li>
                        <li><Text>API Auth</Text></li>
                        <li><Text></Text></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <Typography.Title level={3}>Hotlinks</Typography.Title>
                    <ul>
                        <li><InternalLink to={Nav.projects.items.overview.link}>{Nav.projects.items.overview.title}</InternalLink></li>
                        <li><InternalLink to={Nav.projects.items.archive.link}>{Nav.projects.items.archive.title}</InternalLink></li>
                        <li><ExternalLink href="">test</ExternalLink></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
                <Item>
                    <Typography.Title level={3}>Functioning</Typography.Title>
                    <ul>
                        <li><Text>Internal links switch the main menu (browser url not working, though)</Text></li>
                        <li><Text>Source code of active page loaded async when present (button top-right)</Text></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
            </Columns>

        </Content>
    )

}