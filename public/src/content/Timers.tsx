import '../css/Timer.css'

import React, { useState } from "react";
import {Layout, Tabs, Typography} from 'antd'
const {Sider, Content} = Layout


export default function Timers () {

    return (
        <>
            <Layout>
                <Sider className="timer-sider">
                </Sider>
            </Layout>
            <Layout>
                <Content className="type-content">
                    <Tabs type="card" size="large">
                    </Tabs>
                </Content>
            </Layout>
        </>
    )

}