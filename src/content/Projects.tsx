import React from "react";
import {Table, Typography} from "antd";
import {format, Duration, formatDuration} from "date-fns";
import ContentTabs from "../components/ContentTabs";
import ProjectsOverview from "./projects/Overview";
import UpdateLogs from "./projects/UpdateLogs";

const {Title, Text} = Typography

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
                         }
                     ]}
        >
        </ContentTabs>
    )
}