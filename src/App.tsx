import React, {useState} from 'react';
import {AutoComplete, Button, Col, Input, Layout, Menu, Row, Space, Typography} from 'antd'
import {Link, Route, Switch} from "react-router-dom";
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.dark.css'
import './css/ant.css'
import './App.css'
import Nav, {NavItem, NavSection} from "./Nav"
import UpdateLog from "./content/UpdateLog";
import Edit from "./content/Edit";
import SubMenu from "antd/es/menu/SubMenu";

enum Theme {
  default = 'default',
  dark = 'dark',
  nicotine = 'nicotine',
}

const {Header, Content, Sider} = Layout
const {Title} = Typography
const {nav} = Nav

function menuItems (topic:any, props?:any) {
  return Object.values(topic as NavItem).map((item, props) =>
            <Menu.Item className="menuItem" key={item.link} {...props}>
                {item.title}
            </Menu.Item>
  )
}

function menuTopics (props?:any) {
  return Object.values(Nav as NavSection).map((topic, props ) => (
      <SubMenu key={`sub${topic.heading}`} title={topic.heading} {...props}>
        {menuItems(topic.items, props)}
      </SubMenu>
  ))
}

function App() {
  const [theme, setTheme] = useState(Theme.default)
  return (
      <Layout className="layout" data-theme={theme}>
        <Sider className="sider" width={200}>
          <div className="digicrafterContainer">
            <Link to="/"><Title className='digicrafter' level={3}>digicrafter</Title></Link>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            {menuTopics()}
          </Menu>
        </Sider>
        <Layout>
          <Header>
            <Row justify="space-between">
              <Col>
                <Space>
                  <AutoComplete
                      dropdownClassName="certain-category-search-dropdown"
                      dropdownMatchSelectWidth={500}
                      style={{width: 250}}
                      options={[]}
                  >
                    <Input.Search size="large" placeholder="input here"/>
                  </AutoComplete>
                </Space>
              </Col>
              <Col>
                <Button size="large" shape="circle" icon={<UserOutlined/>}/>
              </Col>
            </Row>
          </Header>
          <Content>
            <div className="site-layout-content">
              <Switch>
                <Route exact path="/">
                  <UpdateLog />
                </Route>
                <Route exact path={Nav.tools.items.edit.link}>
                  {<Edit />}
                </Route>
                <Route exact path="/preferences">
                  {/*<Preferences />*/}
                </Route>
                {/*<Route exact path="/account/new" render={(props) => */}
                {/*    <NewAccount {...props} loaded={accountLoaded} user={user}/>}>*/}
                {/*</Route>*/}
                {/*<Route exact path="/account/:id" render={(props) =>*/}
                {/*    <Account {...props} loaded={accountLoaded} user={user}/>}>*/}
                {/*</Route>*/}
                <Route exact path="/update-log">
                  {/*<UpdateLog />*/}
                </Route>
              </Switch>
              <div style={{height:"20px"}}></div>
            </div>
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
