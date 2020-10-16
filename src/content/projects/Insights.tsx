import React from "react";
import {Space, Typography} from "antd";
import '../../css/App.css'
import Content, {Columns, Item, ItemTitle, Subtitle, Title} from "../../components/Content";
import {Nav} from "../../lib/Nav";

const {Text} = Typography

export default function () {

    return (
        <Content>
            <Title date={'16.10.2020'} navPrev={Nav.projects.items.overview.link} navNext={Nav.projects.items.updateLog.link}>Insights</Title>
            {/*<Item>*/}
            {/*    <Space direction="vertical" size={5}>*/}
            {/*        <Text>It's always fun going into a new tech but you can't get too deep into complex topics like*/}
            {/*            React and TypeScript in two months of course.*/}
            {/*        But still I feel I've done enough progress to be able to request a payoff. It's always worth something*/}
            {/*        when you get somewhere not easily.</Text>*/}
            {/*        <Text></Text>*/}
            {/*    </Space>*/}
            {/*</Item>*/}
            <Subtitle date={'16.10.2020'}>Digicrafter</Subtitle>
            <Columns count={3}>
                <Item>
                    <Space direction="vertical" size={5}>
                        <Text>I named my homepage project 'Digicrafter'. Like this it represents myself being a 'digital crafter'
                            - a term I invented a while after my homepage host became digi-craft.</Text>
                        <Text>After my early project approaches, eventually doing my homepage was the ideal candidate to
                            exercise React and TypeScript. During that time I got a grip on how TypeScript
                        and JSX code must look like.</Text>
                    </Space>
                </Item>
                <Item>
                    <ItemTitle>Features</ItemTitle>
                    <ul>
                        <li>React single page approach with pure functional components and hooks</li>
                        <li>Solely TypeScript</li>
                        <li>Ant Design components</li>
                        <li>Simple stringified localization and navigation with generated menu</li>
                        <li>Animated logo</li>
                        <li>Main menu that updates on internal link activation</li>
                        <li>Display source functionality</li>
                        <li>Use of antd tables with tags; custom tagging mechanic</li>
                        <li>Info dialogs</li>
                        <li>'Walkthrough' link buttons at the page title</li>
                        <li>Date for page titles and content sections</li>
                        <li>Unified page content layout</li>
                        <li>A log/error section</li>
                        <li>A list navigator custom component</li>
                        <li>Hard coded update log with summary calculation</li>
                    </ul>
                </Item>
                <Item>
                    <ItemTitle>Outlook</ItemTitle>
                    <Text>Besides the tools I've planned I feel that this is also missing:</Text>
                    <ul>
                        <li>Localization with little icons per page telling the language that page is available at</li>
                        <li>Better layout/components/typography for articles/blogs</li>
                        <li>Search engine reachability is completely untested and unknown for SPA</li>
                        <li>A wiki engine (as soon as the editor is done)</li>
                    </ul>
                </Item>
            </Columns>
            <Subtitle date={'16.10.2020'}>Password Generator</Subtitle>
            <Columns count={3}>
                <Item>
                    <Space direction="vertical" size={5}>
                        <Text>Last time when I set up my server again, I started to using generated passwords from the internet.
                        As an exercise and as to being a considerable managable project I should finish fast, I wrote a
                        password generator for the german language.</Text>
                    </Space>
                </Item>
                <Item>
                    <ItemTitle>Features</ItemTitle>
                    <ul>
                        <li>Crawled, large word database accessible over an API</li>
                        <li>Simple sentence construction</li>
                        <li>Customizable word pool, spacing and replacements</li>
                    </ul>
                </Item>
                <Item>
                    <ItemTitle>Outlook</ItemTitle>
                    <ul>
                        <li>Another generator mode</li>
                        <li>Another sentence construction algorithm</li>
                        <li>Self test</li>
                        <li>Own page</li>
                        <li>Local installation</li>
                    </ul>
                </Item>
            </Columns>
            <Subtitle date={'16.10.2020'}>DigiType</Subtitle>
            <Columns count={3}>
                <Item>
                    <Space direction="vertical" size={5}>
                        <Text>A text editor especially for my own exclusive likings as I cannot find an existing one that suits me.</Text>
                    </Space>
                </Item>
                <Item>
                    <ItemTitle>Features</ItemTitle>
                    <ul>
                        <li>I think I will use Slate as the basis</li>
                    </ul>
                </Item>
                <Item>
                    <ItemTitle>Outlook</ItemTitle>
                    <ul>
                        <li>IndexedDB storage with backup</li>
                    </ul>
                </Item>
            </Columns>
            <Subtitle date={'16.10.2020'}>Digi Ops</Subtitle>
            <Columns count={3}>
                <Item>
                    <Space direction="vertical" size={5}>
                        <Text>After a week of investment, that project really exploded and I start to consider a comlete
                        rework of the basis. I do have some nice use cases but am still unsure how big I should plan.</Text>
                        <Text>After that week, though, I found out about an already existing solution which is really close
                        to what I've planned. I still consider doing one of my own just because it's so interesting and
                            could become so useful.</Text>
                    </Space>
                </Item>
                <Item>
                    <ItemTitle>Features</ItemTitle>
                    <ul>
                        <li>Component and data model architecture</li>
                        <li>Dynamic form generation</li>
                        <li>Special list navigator for small spaces</li>
                        <li>Name design</li>
                    </ul>
                </Item>
                <Item>
                    <ItemTitle>Outlook</ItemTitle>
                    <ul>
                        <li>I don't feel the component/data model is thought out well enough</li>
                        <li>I don't feel the page layout will finally fit thus needing a complete rework</li>
                        <li>The broker mechanic needs better planning</li>
                        <li>I should probably restart with a smaller approach in order to get usable results earlier.</li>
                    </ul>
                </Item>
            </Columns>
        </Content>
    )

}