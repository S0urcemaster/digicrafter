import React from "react";
import {Table, Typography} from "antd";
import '../../css/App.css'
import {Duration, format, formatDuration} from "date-fns";
import {project, UpdateLog} from "./update-logs";
import {updateLogs as ulogs} from './update-logs'
import Content, {Item, ItemTitle, Title} from "../../components/Content";
import {Nav} from "../../lib/Nav";

export default function () {

    let durations: (Duration)[] = []

    function addDuration(h: number, m: number): string {
        const d = {hours: h, minutes: m}
        durations.push(d)
        return formatDuration(d)
    }

    function sumDurations(): string {
        let hours: number = 0, minutes: number = 0
        durations.forEach((duration) => {
            hours += duration.hours!
            minutes += duration.minutes!
        })
        hours += Math.floor(minutes / 60)
        minutes = minutes % 60
        const duration = formatDuration({hours, minutes})
        durations = []
        return duration
    }

    const updateLogs =
        <>
            {ulogs.map((log, index) =>
                <Item key={index}>
                    <ItemTitle>{format(log.date, 'EEEE dd.LL.yyyy')}</ItemTitle>
                    <Typography.Title level={5}>Time Spent: {formatDuration(log.total)}</Typography.Title>
                    <Table pagination={false}
                           columns={[
                               {title: "Update", dataIndex: "update", key: "update"},
                               {title: "Project", dataIndex: "project", key: "project"},
                               {title: "Time", dataIndex: "time", key: "time"},
                           ]}
                           dataSource={log.logs.map((value: UpdateLog, index: number) => ({
                               key: index,
                               update: value.log,
                               project: project[value.project],
                               time: formatDuration(value.duration),
                           }))}
                    />
                    <Typography.Title level={5}>&nbsp;</Typography.Title>
                </Item>
            )}
        </>



    return (
        <Content>
            <Title date={'15.10.2020'} navPrev={Nav.projects.items.overview.link} navNext={Nav.tools.items.passwordGenerator.link}>Update Log</Title>
            {updateLogs}
            <Item>
                <Typography.Title level={3}>{format(new Date('2020-09-10'), 'EEEE dd.LL.yyyy')}</Typography.Title>
                <Table pagination={false}
                       columns={[
                           {title: "Update", dataIndex: "update", key: "update"},
                           {title: "Project", dataIndex: "project", key: "project"},
                           {title: "Time", dataIndex: "time", key: "time"},
                       ]}
                       dataSource={[
                           {
                               key: "1",
                               update: "Added Content component and Content pages; linking",
                               time: addDuration(1, 30)
                           },
                           {
                               key: "2",
                               update: "Getting javascript beautifier; added ContentTabs component",
                               time: addDuration(1, 45)
                           },
                           {key: "3", update: "Started Projects Archive Archive", time: addDuration(1, 40)},
                           {key: "4", update: "Projects archive page around finished", time: addDuration(1, 0)},
                           {key: "5", update: "'Type' basic layout", time: addDuration(2, 30)},
                           {key: "6", update: "Miscellaneous", time: addDuration(0, 30)},
                           {key: "7", update: "Added sourcecode functionality", time: addDuration(1, 30)},
                           {key: "8", update: "Sourcecode functionality finshed", time: addDuration(1, 20)},
                           {key: "9", update: "Added Music Soundcloud links", time: addDuration(1, 0)},
                           {key: "", update: "", time: addDuration(0, 0)},
                       ]}
                />
            </Item>
            <Item>
                <Typography.Title level={5}>Time Spent: {sumDurations()}</Typography.Title>
                <Typography.Title level={5}>&nbsp;</Typography.Title>
                <Typography.Title level={3}>{format(new Date('2020-09-07'), 'EEEE dd.LL.yyyy')}</Typography.Title>
                <Table pagination={false}
                       columns={[
                           {title: "Update", dataIndex: "update", key: "update"},
                           {title: "Time", dataIndex: "time", key: "time"}
                       ]}
                       dataSource={[
                           {
                               key: "0",
                               update: "Getting into Ant Desing; Basic Layout; TypeScript",
                               time: addDuration(4, 30)
                           },
                           {
                               key: "1",
                               update: "Added nav with localization; Added Projects",
                               time: addDuration(1, 20)
                           },
                           {key: "2", update: "Configurable menu finished", time: addDuration(1, 15)},
                           {key: "3", update: "Fixed menu errors", time: addDuration(1, 45)},
                           {key: "4", update: "Menu Styling", time: addDuration(1, 0)},
                           {key: "5", update: "Styling", time: addDuration(1, 10)},
                           {key: "6", update: "Styling", time: addDuration(0, 30)},
                           {key: "7", update: "Styling; menu ux changes", time: addDuration(1, 15)},
                           {
                               key: "8",
                               update: "React Training page; duration calculation in digicrafter log",
                               time: addDuration(1, 0)
                           },
                       ]}
                />
                <Typography.Title level={5}>Time Spent: {sumDurations()}</Typography.Title>
            </Item>
        </Content>
    )

}