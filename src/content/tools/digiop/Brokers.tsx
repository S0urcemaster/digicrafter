import React, {useEffect, useState} from "react";
import {Broker} from "../../../lib/model/DigiOp";
import {Space, Table} from "antd";
import {ColumnsType} from "antd/lib/table";

type BrokerType = {
    path: string
    description: string
}

export default (props:any) => {

    const brokers:Broker[] = props.data

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
                    {/*<Typography.Link>Connect</Typography.Link>*/}
                    {/*<Typography.Link>Disconnect</Typography.Link>*/}
                </Space>
            </>,
        },
    ]

    const brokersData:BrokerType[] = brokers.map(broker => {
        return {path: broker.path, description: broker.description}
    })

    function onBrokersChange(pagination:any, filters:any, sorter:any, extra:any) {
        console.log('params', pagination, filters, sorter, extra);
    }

    return (
        <div>
            <Table rowKey="path" size="small" columns={brokerColumns} dataSource={brokersData} onChange={onBrokersChange} />
        </div>
    )
}
