import React, {useState} from 'react';
import {AutoComplete, Button, Col, Input, Layout, Menu, Row, Space, Typography} from 'antd'
import {Link, Route, Switch} from "react-router-dom";
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.dark.css'
import './css/ant.css'
import './App.css'
import Nav, {NavItem} from "./Nav"
import UpdateLog from "./content/UpdateLog";

enum Theme {
  default = 'default',
  dark = 'dark',
  nicotine = 'nicotine',
}

const {Header, Content, Sider} = Layout
const {Title} = Typography

function menuItems (topic: any) {
  const items =
      <>
        {Object.values(topic.items as NavItem).map((item) =>
            <Menu.Item key={item.link} icon={<UserOutlined/>}>
              {console.log(item.title)}
              {item.title}
            </Menu.Item>
        )}
      </>
  return items
}

function menuTopics () {
  return Object.values(Nav).map((topic) => (
    <>
      <Title level={3}>{topic.heading}</Title>
      {menuItems(topic)}
      </>
  ))
    // for(let key in Nav) {
    //
    //   menuItems.push(
    //       <Menu.Item key={Nav.key.link} icon={<UserOutlined/>}>
    //         {Nav.passwordGenerator.title}
    //       </Menu.Item>
    //   )
    // }

}

function App() {
  const [theme, setTheme] = useState(Theme.default)
  return (
      <Layout className="layout" data-theme={theme}>
        <Sider width={200}>
          <Link to="/"><Title level={3}>digicrafter</Title></Link>
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
