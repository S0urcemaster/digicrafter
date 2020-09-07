import React from "react";
import {Typography} from "antd";
import '../App.css'
import Content from "../components/Content";

const {Title, Text} = Typography

export default function ReatTraining () {

    return (
        <Content title="React Training Steps">
            <Title level={2}>Watching YT Videos</Title>
            <Text>~ 5h</Text>
            <Title level={2}>First Practical Approach in a Test Project</Title>
            <Title level={3}>Challenges:</Title>
            <ul>
                <li>React Functional Components in JavaScript with Hooks</li>
                <li>React Router</li>
                <li>Material UI</li>
            </ul>
            <Text>~ 10h</Text>
            <Title level={2}>Porting Customerbase Vue Project to React ("kontakt")</Title>
            <Title level={3}>Challenges:</Title>
            <ul>
                <li>React Functional Components in JavaScript with Hooks</li>
                <li>React Router</li>
                <li>Material UI</li>
                <li>Building Custom Components</li>
                <li>Page Layout</li>
            </ul>
            <Text>52h</Text>
            <Title level={2}>Using The Customerbase Backend</Title>
            <Title level={3}>Challenges:</Title>
            <ul>
                <li>Cross Origin</li>
                <li>Laravel HTTP Auth Not Usable</li>
                <li>UI UX</li>
            </ul>
            <Text>20h</Text>
            <Title level={2}>Rebuilding The Project With Ant Design And Going For TypeScript On This Occasion</Title>
            <Title level={3}>Challenges:</Title>
            <ul>
                <li>TypeScript</li>
                <li>Ant Design</li>
                <li>UI UX</li>
            </ul>
            <Text>21h</Text>
            <Title level={2}>Break to Building My Homepage</Title>
            <Title level={3}>Challenges:</Title>
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