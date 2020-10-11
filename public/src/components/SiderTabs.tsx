import React, {PropsWithChildren} from "react";
import {Tabs, Typography} from "antd";
import '../css/App.css'

const { TabPane } = Tabs;


export default function (props:PropsWithChildren<any>) {

    return (
        <div style={{}}>
            <div className="content-content">
                <Tabs defaultActiveKey={props.tabs[0].title} type="card"
                      tabBarExtraContent={props.actionButton}>
                    {props.tabs.map((tab:any) =>
                        <TabPane tab={tab.title} key={tab.title}>
                            {tab.content}
                        </TabPane>
                    )}
                </Tabs>
            </div>
        </div>
    )

}