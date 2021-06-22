import React from "react";
import { Form, Input, Space, Typography } from "antd";
import '../css/App.css'
import Content, { Item, Columns, Title, ItemTitle } from "../components/Content";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";
import { Nav } from "../lib/Nav";
import intpt from "../img/intp-t img trans.png";
const { Text } = Typography

export default function Home() {

    return (
        <Content>
            <Title date={'03.03.2021'} navNext={Nav.home.items.reactTraining.link}>Homepage of Sebastian Teister</Title>
            <Columns count={2}>
                <Item>
                    <ItemTitle date={'28.03.2021'}>Added <ExternalLink href="https://digi-craft.de/coding-exercises">Coding Exercises</ExternalLink></ItemTitle>
                </Item>
                <Item>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <ItemTitle date={'28.03.2021'}>What can you do?</ItemTitle>
                </Item>
                <Item>
                    <iframe src ="https://teisterevolution.blogspot.com/2021/03/sources-for-boykotting-china-and.html" width="100%" height="300"> </iframe>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item style={{ textAlign: 'center' }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/jtpOYxsZj7o"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </Item>
                <Item>
                    <ItemTitle date={'03.03.2021'}>The MOST Self-Destructive Habit | Simon Sinek</ItemTitle>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <ItemTitle date={'30.01.2021'}>ListTagger Development In Progress</ItemTitle>
                    <InternalLink to={Nav.tools.items.listtagger.link}>{Nav.tools.items.listtagger.title}</InternalLink>
                </Item>
                <Item>
                    <ItemTitle date={'22.01.2021'}>ListTagger Planned as Java Swing Project</ItemTitle>
                    <InternalLink to={Nav.tools.items.listtagger.link}>{Nav.tools.items.listtagger.title}</InternalLink>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <ItemTitle date={'17.01.2021'}>Personality Test</ItemTitle>
                    <ExternalLink href="https://www.16personalities.com/profiles/6fcdbb168eb1d">www.16personalities.com</ExternalLink>
                </Item>
                <Item>
                    <img width="100%" src={intpt} alt="INTP-T" />
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'04.12.2020'}>New Assignment: Build a List Tagger</ItemTitle>
                        <Text>
                            Build a web app that can filter an input list by a set of tags.
                        </Text>
                        <Text>Functions:</Text>
                        <ul>
                            <li>Create and edit the input list</li>
                            <li>Import a text file into an input list</li>
                            <li>The rows of the input list can contain multiple fields</li>
                            <li>Create and edit a tag list per input list</li>
                            <li>Assign tags to rows of the list</li>
                            <li>Tags can be activated/deactivated</li>
                            <li>Filter the input list by the tags that are inactive</li>
                            <li>Save everything in indexed db and load it up at page visit</li>
                            <li>Export lists into files that can be downloaded</li>
                            <li></li>
                        </ul>
                    </Space>
                </Item>
                <Item>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item style={{ textAlign: 'center' }}>
                    <iframe src="https://embed.beatport.com/?id=14154149&type=track" width="100%" height="162"
                        frameBorder="0" scrolling="no" style={{ maxWidth: '600px' }}></iframe>
                    <iframe src="https://embed.beatport.com/?id=13517801&type=track" width="100%" height="162"
                        frameBorder="0" scrolling="no" style={{ maxWidth: '600px' }}></iframe>
                    <iframe src="https://embed.beatport.com/?id=14452578&type=track" width="100%" height="162"
                        frameBorder="0" scrolling="no" style={{ maxWidth: '600px' }}></iframe>
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'03.12.2020'}>2020 But the Music Was Great</ItemTitle>
                        <Text>
                            Jenseits von Geschmack lassen sich Merkmale von Musik ausmachen, die Aussagen zur Qualität
                            erlauben. Dem Kenner stehen Originalität und Ausdruck Stimmung und Stil gegenüber. Ersteres kann
                            man objektiv bewerten und dem Künstler so Kunstfertigkeit zusprechen. Werten kann man oberhalb dieses
                            Bereichs aber nicht mehr, so dass persönliche Lieblingstitel nur noch in Stimmung und Stil unterscheidbar
                            sind.
                        </Text>
                    </Space>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <Space direction='vertical'>
                        <ItemTitle date={'24.11.2020'}>Jordan B Peterson: 2015 Personality Lecture 18: Openness - Creativity & Intelligence</ItemTitle>
                        <Text>(25:40) "The relationship between creativity and grades at the university of Toronto is zero by the way,
                        once you control for IQ. Which is, you know, perhaps rather appalling. But the problem is that it's
                        very difficult to assess creative people because they're annoying. Creative people do things
                        in a new way. And the problem with trying to assess wether or not someone has done something in a
                        new way is that you have come up with a new sceme of grading for that and you can believe, that's
                        not going to happen. And then it's worse: because if you're a creative person and you're
                        graded by someone who isn't creative they're not going to think you're creative - they're just going to
                        think that you're wrong! And you might be. Because lots of times if you're creative you're also
                        wrong because it's not that easy to come up with a novel way of doing something or a novel
                        hypothesis that actually is going to be an improvement over the previous hypothesis, right?
                            Most of the time you're off on a tangent and it's an incorrect tangent."</Text>
                        <Text><i><b>go off on a tangent (British, American):</b> to start talking about something that is only
                            slightly or indirectly related to the original subject.</i></Text>
                    </Space>
                </Item>
                <Item style={{ textAlign: 'center' }}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/P6rm0LrO9vU?start=1540"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </Item>
            </Columns>
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
                        wrapperCol={{ span: 14 }}
                    >
                        <Form.Item label='.tsx files'>
                            <Input value={9 + 25 + 1 + 8 + 12} />
                        </Form.Item>
                        <Form.Item label='.ts/lib files'>
                            <Input value={8} />
                        </Form.Item>
                        <Form.Item label='.css files'>
                            <Input value={12} />
                        </Form.Item>
                        <Form.Item label='.php files'>
                            <Input value={40} />
                        </Form.Item>
                        <Form.Item label='Lines of Code (tsx, ts, css, php - no comments)'>
                            <Input value={(261 + 2024 + 256 + 526 + 381 - 553) + 1851} />
                        </Form.Item>
                        <Form.Item label='#Hours spent'>
                            <Input value={127} />
                        </Form.Item>
                        <Form.Item label='LOC/h'>
                            <Input value={Math.floor(((261 + 2024 + 256 + 526 + 381 - 553) + 1851) / 127)} />
                        </Form.Item>
                        <Form.Item label='LOC/day'>
                            <Input value={Math.floor(((261 + 2024 + 256 + 526 + 381 - 553) + 1851) / (127 / 8))} />
                        </Form.Item>
                    </Form>
                </Item>
                <Item>
                    <ItemTitle date={'15.10.2020'}>Password Generator Stats</ItemTitle>
                    <Form
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 14 }}
                    >
                        <Form.Item label='.tsx files'>
                            <Input value={4} />
                        </Form.Item>
                        <Form.Item label='.css files'>
                            <Input value={1} />
                        </Form.Item>
                        <Form.Item label='.php files'>
                            <Input value={40} />
                        </Form.Item>
                        <Form.Item label='Lines of Code - no comments/blanks'>
                            <Input value={525 + 28 + (131 + 788 + 118 + 409)} />
                        </Form.Item>
                        <Form.Item label='#Hours spent'>
                            <Input value={43} />
                        </Form.Item>
                        <Form.Item label='LOC/h'>
                            <Input value={Math.floor(1999 / 43)} />
                        </Form.Item>
                        <Form.Item label='LOC/day (8h)'>
                            <Input value={Math.floor(1999 / (43 / 8))} />
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