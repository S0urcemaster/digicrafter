import React, {PropsWithChildren} from "react";
import {Tabs, Typography} from "antd";
import '../css/App.css'
import { Link } from "react-router-dom";

const {Title, Text} = Typography
const { TabPane } = Tabs;


export default function Content (props:PropsWithChildren<any>) {

    return (
        <div style={{fontFamily:'Nunito'}}>
            <Title level={1} style={{paddingTop:'20px', paddingBottom:'20px'}}>{props.title}</Title>
            <Tabs defaultActiveKey={props.tabs[0].title} type="card" size="large">
                {props.tabs.map((tab:any) =>
                    <TabPane tab={tab.title} key={tab.title}>
                        {tab.content}
                    </TabPane>
                )}
            </Tabs>
        </div>
    )

}