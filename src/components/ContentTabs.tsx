import React, {PropsWithChildren} from "react";
import {Tabs, Typography} from "antd";
import '../css/App.css'

const {Title} = Typography
const { TabPane } = Tabs;


export default function Content (props:PropsWithChildren<any>) {

    return (
        <>
            <Title level={1} style={{paddingTop:'20px', paddingBottom:'20px', paddingLeft:'20px'}}>{props.title}</Title>
            <div className="content-content">
                <Tabs defaultActiveKey={props.tabs[0].title} type="card" size="large">
                    {props.tabs.map((tab:any) =>
                        <TabPane tab={tab.title} key={tab.title}>
                            {tab.content}
                        </TabPane>
                    )}
                </Tabs>
            </div>
        </>
    )

}