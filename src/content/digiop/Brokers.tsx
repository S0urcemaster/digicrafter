import React, {useEffect, useState} from "react";
import {Job, Arg, Datatype, Broker, SelfBroker} from "../../lib/digiop/Broker";
import {Form, Input, InputNumber, Select, Space, Table, Typography} from "antd";
import ListNavigator from "../../components/ListNavigator";
import {EndpointType} from "../../lib/data/digiop";
import {ColumnsType} from "antd/lib/table";

type BrokerType = {
    path: string
    description: string
}

export default (props:any) => {

    const [brokers, setBrokers] = useState <Broker[]>([])
    // const [brokersData, setBrokersData] = useState <Connection[]> ([])

    useEffect(() => {
        setBrokers([new SelfBroker])
    }, [])

    // useEffect(() => {
    //     setBrokersData(brokers.map(broker => {
    //         return {name: broker.label description: broker.description path}
    //     }))
    // }, [brokers])

    const brokerColumns:ColumnsType<BrokerType> = [
        {title: 'path', dataIndex: 'path',
            sorter: (a:any, b:any) => a.age - b.age,
            defaultSortOrder: 'ascend',
        },
        {title: 'Description', dataIndex: 'description',
        },
        {title: 'Actions',
            render: () => <>
                <Space>
                    <Typography.Link>Connect</Typography.Link>
                    <Typography.Link>Disconnect</Typography.Link>
                </Space>
            </>,
        },
    ];

    const brokersData:BrokerType[] = brokers.map(broker => {
        return {path: broker.path, description: broker.description}
    })

    function onConnectionsChange(pagination:any, filters:any, sorter:any, extra:any) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <Table rowKey="name" size="small" columns={brokerColumns} dataSource={brokersData} onChange={onConnectionsChange} />
        </div>
    )
}
