import React from "react";
import {Space, Typography} from "antd";
import '../css/App.css'
import Content, {Columns, Item, Subtitle, Title} from "../components/Content";
import {Link} from "react-router-dom";

const {Text} = Typography

export default function ReatTraining () {

    return (
        <Content>
            <Title>React Training</Title>
            <Subtitle>Introduction</Subtitle>
            <Item>
                <Space direction="vertical">
                    <Text>Coming from a Vue application I did in 3 month I wanted to to challenge React and TypeScript together
                        with a component framework to get a better understandung of JavaScript and TypeScript.
                    </Text>
                    <Text>The time values on this page and on <Link to="/projects/overview">Projects Overview</Link> Update Log, when present,
                        are all measured and no estimation.</Text>
                </Space>
            </Item>
            <Subtitle level={2}>Approach</Subtitle>
            <Columns count={3}>
                <Item>
                    <Typography.Title level={3}>Watching YT Videos</Typography.Title>
                    <Text>~ 5h</Text>
                </Item>
                <Item>
                    <Typography.Title level={3}>First Practical Approach in a Test Project</Typography.Title>
                    <Typography.Title level={4}>Challenges:</Typography.Title>
                    <ul>
                        <li>React Functional Components in JavaScript with Hooks</li>
                        <li>React Router</li>
                        <li>Material UI</li>
                    </ul>
                    <Text>~ 10h</Text>
                </Item>
                <Item>
                    <Typography.Title level={3}>Porting Customerbase Vue Project to React ("kontakt")</Typography.Title>
                    <Typography.Title level={4}>Challenges:</Typography.Title>
                    <ul>
                        <li>React Functional Components in JavaScript with Hooks</li>
                        <li>React Router</li>
                        <li>Material UI</li>
                        <li>Building Custom Components</li>
                        <li>Page Layout</li>
                    </ul>
                    <Text>52h</Text>
                </Item>
            </Columns>
            <Columns count={3}>
                <Item>
                    <Typography.Title level={3}>Using The Customerbase Backend</Typography.Title>
                    <Typography.Title level={4}>Challenges:</Typography.Title>
                    <ul>
                        <li>Cross Origin</li>
                        <li>Laravel HTTP Auth Not Usable</li>
                        <li>UI UX</li>
                    </ul>
                    <Text>20h</Text>
                </Item>
                <Item>
                    <Typography.Title level={3}>Rebuilding The Project With Ant Design And Going For TypeScript On This Occasion</Typography.Title>
                    <Typography.Title level={4}>Challenges:</Typography.Title>
                    <ul>
                        <li>TypeScript</li>
                        <li>Ant Design</li>
                        <li>UI UX</li>
                    </ul>
                    <Text>21h</Text>
                </Item>
                <Item>
                    <Typography.Title level={3}>Break to Building My Homepage</Typography.Title>
                    <Typography.Title level={4}>Challenges:</Typography.Title>
                    <ul>
                        <li>TypeScript</li>
                        <li>Ant Design</li>
                        <li>UI UX</li>
                        <li>Localization</li>
                        <li>Automatic Menu Building</li>
                        <li>Ant Design Customization/ Styling</li>
                    </ul>
                    <Text>21h</Text>
                </Item>
            </Columns>
        </Content>
    )

}