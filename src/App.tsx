import React, {useState} from 'react';
import {Layout, Row, Col, Space, Button, AutoComplete, Input, Menu, Typography} from 'antd'
import {Switch, Route} from "react-router-dom";
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.dark.css'
import './css/ant.css'
import './App.css'
import Edit from "./content/Edit";

enum Theme {
  default = 'default',
  dark = 'dark',
  nicotine = 'nicotine',
}

const {Header, Content, Sider} = Layout
const {Title} = Typography


function App() {
  const [theme, setTheme] = useState(Theme.default)
  return (
      <Layout className="layout" data-theme={theme}>
        <Sider width={200}>
          <Title level={3}>digicrafter</Title>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
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
                  <Edit></Edit>
                </Route>
                <Route exact path="/profile">
                  {/*<Profile />*/}
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
