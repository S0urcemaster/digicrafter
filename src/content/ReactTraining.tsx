import React from "react";
import {Typography} from "antd";
import '../css/App.css'
import Content from "../components/Content";
import {Link} from "react-router-dom";

const {Title, Text} = Typography

export default function ReatTraining () {

    return (
        <Content title="React Training">
            <Title level={2}>Introduction</Title>
            <Text>Coming from a Vue application I did in 3 month I wanted to to challenge React and TypeScript together
                with a component framework to get a better understandung of JavaScript and TypeScript.
            </Text>
            <Text>The time values on this page and on <Link to="/projects/overview">Projects Overview</Link> Update Log, when present,
                are all measured and no estimation.</Text>
            <Title level={2}>Approach</Title>
            <Title level={3}>Watching YT Videos</Title>
            <Text>~ 5h</Text>
            <Title level={3}>First Practical Approach in a Test Project</Title>
            <Title level={4}>Challenges:</Title>
            <ul>
                <li>React Functional Components in JavaScript with Hooks</li>
                <li>React Router</li>
                <li>Material UI</li>
            </ul>
            <Text>~ 10h</Text>
            <Title level={3}>Porting Customerbase Vue Project to React ("kontakt")</Title>
            <Title level={4}>Challenges:</Title>
            <ul>
                <li>React Functional Components in JavaScript with Hooks</li>
                <li>React Router</li>
                <li>Material UI</li>
                <li>Building Custom Components</li>
                <li>Page Layout</li>
            </ul>
            <Text>52h</Text>
            <Title level={3}>Using The Customerbase Backend</Title>
            <Title level={4}>Challenges:</Title>
            <ul>
                <li>Cross Origin</li>
                <li>Laravel HTTP Auth Not Usable</li>
                <li>UI UX</li>
            </ul>
            <Text>20h</Text>
            <Title level={3}>Rebuilding The Project With Ant Design And Going For TypeScript On This Occasion</Title>
            <Title level={4}>Challenges:</Title>
            <ul>
                <li>TypeScript</li>
                <li>Ant Design</li>
                <li>UI UX</li>
            </ul>
            <Text>21h</Text>
            <Title level={3}>Break to Building My Homepage</Title>
            <Title level={4}>Challenges:</Title>
            <ul>
                <li>TypeScript</li>
                <li>Ant Design</li>
                <li>UI UX</li>
                <li>Localization</li>
                <li>Automatic Menu Building</li>
                <li>Ant Design Customization/ Styling</li>
            </ul>
            <Text>21h</Text>
        </Content>
    )

}