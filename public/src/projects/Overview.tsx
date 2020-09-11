import React from "react";
import {Typography} from "antd";
import '../../css/App.css'

const {Title, Text} = Typography

export default function ProjectsOverview () {

    return (
        <>
            <Title level={2}>digicrafter</Title>
            <Title level={3}>Motivation</Title>
            <ul>
                <li><Text>My server is now some years around with no homepage</Text></li>
                <li><Text>Tracking my React training progress</Text></li>
                <li><Text>Building Single Page Applications is fun</Text></li>
                <li><Text>Writing programs to my liking is fun</Text></li>
                <li><Text>Showcasting my projects</Text></li>
                <li><Text>Creating my own editor</Text></li>
                <li><Text>Approaching some long planned projects</Text></li>
                <li><Text>Getting my reputation up</Text></li>
                <li><Text></Text></li>
                <li><Text></Text></li>
            </ul>
        </>
    )

}