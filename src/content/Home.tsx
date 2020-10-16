import React from "react";
import {Form, Input, Typography} from "antd";
import '../css/App.css'
import Content, {Item, Columns, Title, ItemTitle} from "../components/Content";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";
import {Nav} from "../lib/Nav";

const {Text} = Typography

export default function Home () {

    return (
        <Content>
            <Title date={'15.10.2020'} navNext={Nav.home.items.reactTraining.link}>digicrafter's digital devices</Title>
            {/*<Button onClick={send}>Send</Button>*/}
            <Columns count={2}>
                <Item>
                    <ItemTitle date={'29.9.2020'}>What's Here?</ItemTitle>
                    <ul>
                        <li><InternalLink to={Nav.tools.items.passwordGenerator.link}>{Nav.tools.items.passwordGenerator.title} 0.1</InternalLink></li>
                        <li><InternalLink to={Nav.projects.items.overview.link}>Projects {Nav.projects.items.overview.title}</InternalLink></li>
                        <li><InternalLink to={Nav.projects.items.updateLog.link}>{Nav.projects.items.updateLog.title}</InternalLink></li>
                        <li><ExternalLink href="https://digi-craft.de/customerboard/#/browseAccounts/account/2">Latest productive Project</ExternalLink></li>
                        {/*<li><InternalLink to={Nav}>{}</InternalLink></li>*/}
                        {/*<li><Text></Text></li>*/}
                    </ul>
                    <Text>More links on the projects /archive pages.</Text>
                </Item>
                <Item>
                    <ItemTitle date={'29.9.2020'}>Finished <InternalLink to={Nav.tools.items.passwordGenerator.link}>Readable Password Generator 0.1</InternalLink></ItemTitle>
                    <ul>
                        <li><Text>Generate secure passwords you can easily read and write.</Text></li>
                        <li><Text>Season the generated passwords with extra symbols or numbers.</Text></li>
                        <li><Text>Generate as much passwords as you like until you find one you like.</Text></li>
                        <li><Text>Input your own words to play around with them.</Text></li>
                        {/*<li><Text></Text></li>*/}
                    </ul>
                </Item>
                <Item>
                    <ItemTitle date={'15.10.2020'}>Finished React Training</ItemTitle>
                    <Text>In 2 months and 220 hours I learned React, TypeScript, Ant Design, MaterialUI, IndexedDB from scratch,
                    deepened my css skills and recapped my php/Laravel knowledge.</Text>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <ItemTitle date={'15.10.2020'}>digicrafter Overall Stats</ItemTitle>
                    <Form
                        labelCol={{ span: 10 }}
                        wrapperCol= {{ span: 14 }}
                    >
                        <Form.Item label='.tsx files'>
                            <Input value={9+25+1+8+12}/>
                        </Form.Item>
                        <Form.Item label='.ts/lib files'>
                            <Input value={8}/>
                        </Form.Item>
                        <Form.Item label='.css files'>
                            <Input value={12}/>
                        </Form.Item>
                        <Form.Item label='.php files'>
                            <Input value={40}/>
                        </Form.Item>
                        <Form.Item label='Lines of Code (tsx, ts, css, php - no comments)'>
                            <Input value={(261+2024+256+526+381-553)+1851}/>
                        </Form.Item>
                        <Form.Item label='#Hours spent'>
                            <Input value={127}/>
                        </Form.Item>
                        <Form.Item label='LOC/h'>
                            <Input value={Math.floor(((261+2024+256+526+381-553)+1851)/127)}/>
                        </Form.Item>
                        <Form.Item label='LOC/day'>
                            <Input value={Math.floor(((261+2024+256+526+381-553)+1851)/(127/8))}/>
                        </Form.Item>
                    </Form>
                </Item>
                <Item>
                    <ItemTitle date={'15.10.2020'}>Password Generator Stats</ItemTitle>
                    <Form
                        labelCol={{ span: 10 }}
                        wrapperCol= {{ span: 14 }}
                    >
                        <Form.Item label='.tsx files'>
                            <Input value={4}/>
                        </Form.Item>
                        <Form.Item label='.css files'>
                            <Input value={1}/>
                        </Form.Item>
                        <Form.Item label='.php files'>
                            <Input value={40}/>
                        </Form.Item>
                        <Form.Item label='Lines of Code - no comments/blanks'>
                            <Input value={525+28+(131+788+118+409)}/>
                        </Form.Item>
                        <Form.Item label='#Hours spent'>
                            <Input value={43}/>
                        </Form.Item>
                        <Form.Item label='LOC/h'>
                            <Input value={Math.floor(1999/43)}/>
                        </Form.Item>
                        <Form.Item label='LOC/day (8h)'>
                            <Input value={Math.floor(1999/(43/8))}/>
                        </Form.Item>
                    </Form>
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