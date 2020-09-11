import '../css/Type.css'

import React, { useEffect, useMemo, useState } from "react";
import { createEditor } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import {Layout, Menu, Tabs, Typography} from 'antd'
import {NavItem} from "../Nav"
import Dexie from 'dexie'
import {db} from './TypeDB'

const {Title} = Typography
const {Sider, Content} = Layout
const { TabPane } = Tabs


export default function Type () {

    const editor = useMemo(() => withReact(createEditor()), [])
    const [activeTab, setActiveTab] = useState(0)
    const [editors, setEditors] = useState([
        {
            tab: 'untitled',
            content: [
                {
                    type: 'paragraph',
                    children: [{ text: 'A line of text in a paragraph.' }],
                }
            ]
        }
    ])


    db.friends.add({name: "Josephine", age: 21}).then(()=>{
        return db.friends.where("age").below(25).toArray();
    }).then(youngFriends => {
        alert ("My young friends: " + JSON.stringify(youngFriends));
    }).catch(e => {
        alert("error: " + e.stack || e);
    });

    function editChange (newValue:any) {
        const cpy = [...editors]
        cpy[activeTab].content = newValue
        setEditors(cpy)
    }

    function menuClicked (key: string) {

    }

    return (
        <>
            <Layout>
                <Sider className="type-sider">
                    <Menu theme="dark" mode="inline"
                        // defaultSelectedKeys={[Nav.projects.items.digicrafter.link]}
                        // defaultOpenKeys={menuOpenKeys}
                        //   selectedKeys={[selectedMenu]}
                        //   openKeys={menuOpenKeys}
                        //   onOpenChange={onMenuOpenChange}
                    >
                        <Menu.Item key='h1' onClick={() => menuClicked('h1')}>H1</Menu.Item>
                        <Menu.Item key='h2' onClick={() => menuClicked('h2')}>H2</Menu.Item>
                        <Menu.Item key='h3' onClick={() => menuClicked('h3')}>H3</Menu.Item>
                        <Menu.Item key='h4' onClick={() => menuClicked('h4')}>H4</Menu.Item>
                        <Menu.Item key='h5' onClick={() => menuClicked('h5')}>H5</Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
            <Layout>
                <Content className="type-content">
                    <Tabs defaultActiveKey={editors[activeTab].tab} type="card" size="large" activeKey={editors[activeTab].tab}>
                        {editors.map((edit:any) =>
                            <TabPane tab={edit.tab} key={edit.tab}>
                                <div style={{padding:'20px', backgroundColor:'#131313'}}>
                                    <Slate editor={editor} value={editors[0].content} onChange={editChange}>
                                        <Editable />
                                    </Slate>
                                </div>
                            </TabPane>
                        )}
                    </Tabs>
                </Content>
            </Layout>
        </>
    )

}