import React from "react";
import {Table, Typography} from "antd";
import {format, Duration, formatDuration} from "date-fns";
import ContentTabs from "../components/ContentTabs";

const {Title, Text} = Typography

export default function Digicrafter() {

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

    return (
        <ContentTabs title="The digicrafter Project"
                     tabs={[
                         {
                             title: 'Overview',
                             content:
                                 <>
                                     <Title level={2}>Motivation</Title>
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
                         },
                         {
                             title: 'Update Logs',
                             content:
                                 <>
                                     <Title level={3}>{format(new Date('2020-09-05'), 'EEEE dd.LL.yyyy')}</Title>
                                     <Table pagination={false}
                                         columns={[
                                             {title: "Update", dataIndex: "update", key: "update"},
                                             {title: "Time", dataIndex: "time", key: "time"}
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
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                             {key: "", update: "", time: addDuration(0, 0)},
                                         ]}
                                     />
                                     <Title level={5}>Time Spent: {sumDurations()}</Title>
                                     <Title level={3}>{format(new Date('2020-09-07'), 'EEEE dd.LL.yyyy')}</Title>
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
                                                 update: "Added nav with localization; Added Digicrafter",
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
                                     <Title level={5}>Time Spent: {sumDurations()}</Title>
                                 </>
                         }
                     ]}
        >
        </ContentTabs>
    )
}