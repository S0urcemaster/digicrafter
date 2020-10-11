import React from "react";
import {Table, Typography} from "antd";
import '../../css/App.css'

const {Title} = Typography

export default function Todo () {

    let key = 1

    function keyUp () {
        return (key++).toString()
    }

    return (
        <>
            <Title level={3}>Todo</Title>
            <Table pagination={false}
                   columns={[
                       {title: "Subject", dataIndex: "subject", key: "subject"},
                       {title: "Estimation", dataIndex: "estimation", key: "estimation"},
                   ]}
                   dataSource={[
                       {
                           key: keyUp(),
                           subject: '.env configuration?',
                           estimation: '1:00',
                       },
                       {
                           key: keyUp(),
                           subject: 'Refer tabs?',
                           estimation: '1:30',
                       },
                       // {
                       //     key: keyUp(),
                       //     subject: '',
                       //     estimation: '',
                       // },
                   ]}
            />
        </>
    )

}