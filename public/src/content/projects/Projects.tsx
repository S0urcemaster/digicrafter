import React from "react";
import {Typography} from "antd";
import ContentTabs from "../../components/ContentTabs";
import ProjectsOverview from "./Overview";
import UpdateLogs from "./UpdateLogs";
import Todo from "./Todo";
import Content, {Item, Subtitle, Title} from "../../components/Content";
import Archive from "./Archive";
import {Nav} from "../../lib/Nav";

export default function Projects () {


    return (
        <Content>
            <Title date={'15.10.2020'} navPrev={Nav.home.items.reactTraining.link} navNext={Nav.projects.items.insights.link}>Projects</Title>
            <Subtitle date={'14.9.2020'}>Active</Subtitle>
            <Item>
                <ProjectsOverview />
            </Item>
            <Subtitle date={'14.9.2020'}>Archive</Subtitle>
            <Archive />
        </Content>
    )
}