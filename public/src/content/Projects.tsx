import React from "react";
import {Typography} from "antd";
import ContentTabs from "../components/ContentTabs";
import ProjectsOverview from "./projects/Overview";
import UpdateLogs from "./projects/UpdateLogs";
import Todo from "./projects/Todo";

export default function Projects () {


    return (
        <ContentTabs title="Active Projects"
                     tabs={[
                         {
                             title: 'Overview',
                             content: <ProjectsOverview />
                         },
                         {
                             title: 'Update Logs',
                             content: <UpdateLogs />
                         },
                         {
                             title: 'Todo',
                             content: <Todo />
                         },
                     ]}
        >
        </ContentTabs>
    )
}