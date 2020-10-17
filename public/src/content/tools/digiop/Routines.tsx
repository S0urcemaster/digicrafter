import React, {useEffect, useState} from "react";
import {Feature, Routine} from "../../../lib/model/DigiOp";
import {Space, Table, Typography} from "antd";
import {ColumnsType} from "antd/lib/table";

type RoutineData = {
    name: string,
    description: string,
    status?: string,
    nextTimeout?: Date,
    lastrun?: Date,
    jobs?: []
}

export default (props:any) => {

    const routines:Routine[] = props.data

    const routinesColumns:ColumnsType<RoutineData> = [
        {title: 'Name', dataIndex: 'name',
            sorter: (a:any, b:any) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {title: 'Description', dataIndex: 'description',
        },
        {title: 'Last Status', dataIndex: 'status',
            filters: [{text: 'Joe', value: 'Joe',}, {text: 'Jim', value: 'Jim',},],
            onFilter: (value:any, record:any) => record.name.indexOf(value) === 0,
            sorter: (a:any, b:any) => a.age - b.age,
            defaultSortOrder: 'ascend',
        },
        {title: 'Timeout', dataIndex: 'timeout',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {title: 'Last Run', dataIndex: 'lastrun',
            sorter: (a:any, b:any) => a.address.length - b.address.length,
            sortDirections: ['descend', 'ascend'],
        },
        {title: 'Actions',
            render: (job: Feature) => <>
                <Space>
                    <Typography.Link onClick={() => job.broker.run(job.key, job.args)}>Run</Typography.Link>
                    <Typography.Link>Delete</Typography.Link>
                </Space>
            </>,
        },
    ];

    const routinesData:RoutineData[] = routines.map(routine => {
        return {name: routine.name, description: routine.description, jobs:[]}
    })

    function onRowClick (event: React.MouseEvent<HTMLElement, MouseEvent>, rowIndex?: number) {
        props.rowClick(rowIndex)
    }

    return (
        <div>
            <Table rowKey="name" size="small" columns={routinesColumns as any} dataSource={routinesData} pagination={{pageSize:10}}
                   onRow={(record, rowIndex) => {
                       return {
                           onClick:event => onRowClick(event, rowIndex), // click row
                           onDoubleClick: event => {}, // double click row
                           onContextMenu: event => {}, // right button click row
                           onMouseEnter: event => {}, // mouse enter row
                           onMouseLeave: event => {}, // mouse leave row
                       };
                   }}/>
        </div>
    )
}
