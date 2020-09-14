import React from "react";
import {Button, Typography} from "antd";
import '../css/App.css'
import Content, {Item, Columns} from "../components/Content";
import axios from 'axios'
import {Link} from "react-router-dom";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";

const {Title, Text} = Typography

export default function Home () {

    function send () {
        // axios.post("https://api.elasticemail.com/v2/email/send", {
        //     'from': 'sebastian-teister@outlook.de',
        //     'fromName': 'Sebastian Teister',
        //     'to': 'snteister@gmail.com',
        //     'apikey': '660006A9B11E3A7C3B5ACBA1343673C2B03BD7C4885D5722ADB8C29C60723BE49307FE03BECCE12E8770BFE02C2F34C7',
        //     'subject': 'test',
        //     'bodyText': 'test',
        //     'bodyHtml': 'test',
        //     'isTransactional': 'true',
        // })
        //     .then(res => {
        //         console.log(res.data)
        //     })
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
        <Content title="digicrafter's digital devices">
            <Button onClick={send}>Send</Button>
            <Columns count={2}>
                <Item>
                    <Title level={3}>Hotlinks</Title>
                    <ul>
                        <li><InternalLink to="/projects/overview">Active Projects</InternalLink></li>
                        <li><InternalLink to="/projects/archive">Finished Projects</InternalLink></li>
                        <li><ExternalLink href="">test</ExternalLink></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
                <Item>
                    <Title level={3}>Functioning</Title>
                    <ul>
                        <li><Text>Internal links switch the main menu (browser url not working, though)</Text></li>
                        <li><Text>Source code of active page loaded async when present (button top-right)</Text></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
            </Columns>
            <Columns count={3}>
                <Item>
                    <Title level={3}>Hotlinks</Title>
                    <ul>
                        <li><Link to="/projects/overview">Active Projects</Link></li>
                        <li><Link to="/projects/archive">Finished Projects</Link></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
                <Item>
                    <Title level={3}>Functioning</Title>
                    <ul>
                        <li><Text>Internal links switch the main menu (browser url not working, though)</Text></li>
                        <li><Text>Source code of active page loaded async when present (button top-right)</Text></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
                <Item>
                    <Title level={3}>Hotlinks</Title>
                    <ul>
                        <li><Link to="/projects/overview">Active Projects</Link></li>
                        <li><Link to="/projects/archive">Finished Projects</Link></li>
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
            </Columns>

            <Text>other stuff</Text>
        </Content>
    )

}