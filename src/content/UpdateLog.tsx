import React from "react";
import {Table, Typography} from "antd";
import {format} from "date-fns";

const {Title} = Typography

export default function UpdateLog () {
    return (
        <>
            <Title level={1}>{format(new Date(2020, 9, 5), 'EEEE dd.LL.yyyy')}</Title>
            <Table
                columns={[
                    {title: "Update", dataIndex: "update", key: "update"},
                    {title: "Time", dataIndex: "time", key: "time"}
                    ]}
                dataSource={[
                    {update: "Added nav with localization; Added UpdateLog", time: "1:20"}
                ]}
            />
        </>
    )
}