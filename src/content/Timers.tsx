import '../css/Timer.css'

import React, { useEffect, useState } from "react";
import { Slate, Editable } from 'slate-react'
import {Layout, Menu, Tabs, Typography} from 'antd'
import {NavItem} from "../Nav";

const {Title} = Typography
const {Sider, Content} = Layout
const { TabPane } = Tabs;


export default function Timers () {

    const [activeTab, setActiveTab] = useState(0)

    function menuClicked (key: string) {

    }

    return (
        <>
            <Layout>
                <Sider className="timer-sider">
                    {/*<Menu theme="dark" mode="inline"*/}
                    {/*    // defaultSelectedKeys={[Nav.projects.items.digicrafter.link]}*/}
                    {/*    // defaultOpenKeys={menuOpenKeys}*/}
                    {/*    //   selectedKeys={[selectedMenu]}*/}
                    {/*    //   openKeys={menuOpenKeys}*/}
                    {/*    //   onOpenChange={onMenuOpenChange}*/}
                    {/*>*/}
                    {/*    <Menu.Item key='h1' onClick={() => menuClicked('h1')}>H1</Menu.Item>*/}
                    {/*    <Menu.Item key='h2' onClick={() => menuClicked('h2')}>H2</Menu.Item>*/}
                    {/*    <Menu.Item key='h3' onClick={() => menuClicked('h3')}>H3</Menu.Item>*/}
                    {/*    <Menu.Item key='h4' onClick={() => menuClicked('h4')}>H4</Menu.Item>*/}
                    {/*    <Menu.Item key='h5' onClick={() => menuClicked('h5')}>H5</Menu.Item>*/}
                    {/*</Menu>*/}
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