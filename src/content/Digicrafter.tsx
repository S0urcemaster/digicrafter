import React from "react";
import {Table, Typography} from "antd";
import {format} from "date-fns";
import Content from "../Content";

const {Title, Text} = Typography

export default function Digicrafter () {
    return (
        <Content title="digicrafter - An Application Style Homepage">
                <Title level={2}>Update Log</Title>
                <Title level={3}>{format(new Date('2020-09-05'), 'EEEE dd.LL.yyyy')}</Title>
                <Table
                    columns={[
                            {title: "Update", dataIndex: "update", key: "update"},
                            {title: "Time", dataIndex: "time", key: "time"}
                    ]}
                    dataSource={[
                            {key: "1", update: "Added nav with localization; Added Digicrafter", time: "1:20"},
                            {key: "2", update: "Configurable menu finished", time: "1:15"},
                            {key: "3", update: "Fixed menu errors", time: "1:45"},
                            {key: "4", update: "Menu Styling", time: "1:00"},
                            {key: "5", update: "Styling", time: "1:10"},
                            {key: "6", update: "Styling", time: "0:30"},
                            {key: "7", update: "Styling; menu ux changes", time: "1:15"},
                            {key: "8", update: "", time: ""},
                            {key: "9", update: "", time: ""},
                    ]}
                />
        </Content>
    )
}