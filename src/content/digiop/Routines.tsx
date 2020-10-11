import React, {useEffect, useState} from "react";
import {Job, Routine} from "../../lib/digiop/Broker";
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

    // const [brokersData, setBrokersData] = useState <Connection[]> ([])

    useEffect(() => {
        // setBrokers([new SelfBroker])
    }, [])

    // useEffect(() => {
    //     setBrokersData(brokers.map(broker => {
    //         return {name: broker.label description: broker.description path}
    //     }))
    // }, [brokers])

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
            render: (job: Job) => <>
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

    // const routinesData:Routine[] = [
    //     {name: 'notify:hello', description: 'Notify me!', status: 'success', nextTimeout: undefined, lastrun: new Date(), actions: ['Run', 'Delete'],},
    //     {name: 'sudo chmod', description: 'change attributes', status: 'error', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'new employee', description: 'create user for new employee', status: 'warning', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'cold_start', description: 'Open all after pc restart', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'chef geburtstag', description: '', status: 'mailto', nextTimeout: new Date(), lastrun: new Date(), actions: [],},
    //     {name: 'commit push myProject', description: 'count lines of code', status: 'sourcestats/lines', nextTimeout: undefined, lastrun: new Date(), actions: ['Run', 'Delete'],},
    //     {name: '', description: 'digicrafter> npm start', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'deploy_digicrafter1', description: 'Run build > copy server', status: 'sequence', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'cold_start1', description: 'Open all after os restart', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'gelbersack1', description: 'Gelber Sack Termine', status: 'mailto', nextTimeout: new Date(), lastrun: new Date(), actions: [],},
    //     {name: 'dump_words2', description: 'Make database backup', status: 'postgresDump', nextTimeout: undefined, lastrun: new Date(), actions: ['Run', 'Delete'],},
    //     {name: 'start_digi2', description: 'digicrafter> npm start', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'deploy_digicrafter2', description: 'Run build > copy server', status: 'sequence', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'cold_start2', description: 'Open all after os restart', status: 'runOS', nextTimeout: undefined, lastrun: new Date(), actions: [],},
    //     {name: 'gelbersack2', description: 'Gelber Sack Termine', status: 'mailto', nextTimeout: new Date(), lastrun: new Date(), actions: [],},
    //     // {name: '', description: '', command: '', nextTimeout: undefined, lastrun: false, actions: [],},
    // ];

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
