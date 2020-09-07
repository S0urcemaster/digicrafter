import React, {useState} from 'react';
import {AutoComplete, Button, Col, Input, Layout, Menu, Row, Space, Typography} from 'antd'
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.dark.css'
import './css/ant.css'
import './App.css'
import './css/digicrafter.css'
import Nav, {NavItem, NavSection} from "./Nav"
import Digicrafter from "./content/Digicrafter";
import Type from "./content/Type";
import SubMenu from "antd/es/menu/SubMenu";
import Home from "./content/Home";
import ReactTraining from "./content/ReactTraining";

enum Theme {
  default = 'default',
  dark = 'dark',
  nicotine = 'nicotine',
}

const {Header, Content, Sider} = Layout
const {Title} = Typography
const {nav} = Nav


function App() {
  const [theme, setTheme] = useState(Theme.default)
  const [menuOpenKeys, setMenuOpenKeys] = useState([Nav.home.heading])
  const rootKeys = Object.values(Nav).map((item) => item.heading)
  const history = useHistory()
  const [selectedMenu, setSelectedMenu] = useState(Nav.home.items.landing.link)

  function menuItems (topic:any, props?:any) {
    return Object.values(topic as NavItem).map((item, props) =>
        <Menu.Item key={item.link} onClick={() => menuClicked(item.link)} {...props}>
          {item.title}
        </Menu.Item>
    )
  }

  function menuTopics (props?:any) {
    return Object.values(Nav as NavSection).map((topic, props ) => (
        <SubMenu key={topic.heading} title={topic.heading} {...props}>
          {menuItems(topic.items, props)}
        </SubMenu>
    ))
  }

  function menuClicked (link: string) {
    setSelectedMenu(link)
    history.push(link)
  }

  function logoClicked () {
    setSelectedMenu('')
    history.push("/")
  }

  function onMenuOpenChange(keys:any) {
    const latestOpenKey = keys.find((key: any) => menuOpenKeys.indexOf(key) === -1)
    if (rootKeys && rootKeys.indexOf(latestOpenKey!) === -1) {
      setMenuOpenKeys(keys);
    } else {
      setMenuOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  return (
      <Layout className="layout" data-theme={theme}>
        <Sider className="sider" width={200}>
          <div className="digicrafterContainer">
            <div onClick={logoClicked}><Title className='digicrafter' level={4}>digicrafter</Title></div>
          </div>
          <Menu theme="dark" mode="inline"
                // defaultSelectedKeys={[Nav.projects.items.digicrafter.link]}
                // defaultOpenKeys={menuOpenKeys}
                selectedKeys={[selectedMenu]}
                openKeys={menuOpenKeys}
                onOpenChange={onMenuOpenChange}>
            {menuTopics()}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <Row justify="space-between">
              <Col>
                <Space>
                  <AutoComplete
                      dropdownClassName="certain-category-search-dropdown"
                      dropdownMatchSelectWidth={500}
                      style={{width: 250}}
                      options={[]}
                  >
                    <Input.Search placeholder="input here"/>
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
                  <Home />
                </Route>
                <Route exact path={Nav.home.items.landing.link}>
                  <Home />
                </Route>
                <Route exact path={Nav.home.items.reactTraining.link}>
                  <ReactTraining />
                </Route>
                <Route exact path={Nav.projects.items.digicrafter.link}>
                  {<Digicrafter />}
                </Route>
                <Route exact path={Nav.tools.items.edit.link}>
                  {<Type />}
                </Route>
                {/*<Route exact path={Nav.items.link}>*/}
                {/*  < />*/}
                {/*</Route>*/}
              </Switch>
              <div style={{height:"20px"}}></div>
            </div>
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
