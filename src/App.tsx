import React, {useEffect, useState} from 'react';
import {AutoComplete, Button, Col, Drawer, Input, Layout, Menu, Row, Space, Typography} from 'antd'
import {Link, Route, Switch, useHistory} from "react-router-dom";
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.dark.css'
import './css/ant.css'
import './css/App.css'
import './css/digicrafter.css'
import {Nav, NavItem, NavSection} from "./Nav"
import Projects from "./content/Projects";
import Type from "./content/Type";
import SubMenu from "antd/es/menu/SubMenu";
import Home from "./content/Home";
import ReactTraining from "./content/ReactTraining";
import ProjectsArchive from "./content/projects/Archive"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from "axios";
import MusicProduction from "./content/MusicProduction";
import Timers from "./content/Timers";
import PasswordGenerator from "./content/PasswordGenerator";

enum Theme {
  default = 'default',
  dark = 'dark',
  nicotine = 'nicotine',
}

const {Header, Content, Sider} = Layout
const {Title} = Typography


function App() {
  const [theme, setTheme] = useState(Theme.default)
  const [menuOpenKeys, setMenuOpenKeys] = useState([Nav.home.heading])
  const rootKeys = Object.values(Nav).map((item) => item.heading)
  const history = useHistory()
  const [selectedMenu, setSelectedMenu] = useState(Nav.home.items.landing.link)
  const [sourceVisible, setSourceVisible] = useState(false)
  const [sourceCode, setSourceCode] = useState('')
  const [sourceCodeFilename, setSourceCodeFilename] = useState('App.tsx')

  useEffect(() => {
    history.listen((location) => {
      // go through the Nav object and and set the main menu's state to the actual path location
      // also load the right source code (if set)
      let source:string|undefined = ''
      Object.values(Nav).find(nav => {
        const found = Object.values(nav.items).find(item => {
          const found = item.link === location.pathname
          source = item.source
          if(found) {
            setSelectedMenu(item.link)
          }
          return found
        })
        if (found) {
          setMenuOpenKeys([nav.heading])
        }
      })
      if(source) {
        setSourceCodeFilename(source)
        const path = 'http://localhost:3000/src' +source
        loadSource(path)
      }
    })
    loadSource('http://localhost:3000/src/App.tsx')
  },[])

  function loadSource (path:string) {
    axios.get(path)
        .then(res => {
          setSourceCode(res.data)
        })
  }

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

  function showSource() {
    setSourceVisible(!sourceVisible)
  }

  function onSourceClose() {
    setSourceVisible(false)
  }

  return (
      <Layout className="layout" data-theme={theme}>
        <Sider className="sider" width={200}>
          <div className="digicrafterContainer">
            <div onClick={logoClicked}><Title className='digicrafter' level={3}>digicrafter</Title></div>
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
                <Button onClick={showSource} shape="round">{"</>"}</Button>
              </Col>
            </Row>
          </Header>
          <Content>
            <div className="site-drawer-render-in-current-wrapper">
              <div className="site-layout-content">
                <Switch>
                  <Route exact path={Nav.home.items.landing.link}>
                    <Home />
                  </Route>
                  <Route exact path={Nav.home.items.reactTraining.link}>
                    <ReactTraining />
                  </Route>
                  <Route exact path={Nav.tools.items.passwordGenerator.link}>
                    <PasswordGenerator />
                  </Route>
                  <Route exact path={Nav.tools.items.edit.link}>
                    <Type />
                  </Route>
                  <Route exact path={Nav.tools.items.timers.link}>
                    <Timers />
                  </Route>
                  <Route exact path={Nav.projects.items.overview.link}>
                    <Projects />
                  </Route>
                  <Route exact path={Nav.projects.items.archive.link}>
                    <ProjectsArchive />
                  </Route>
                  <Route exact path={Nav.music.items.production.link}>
                    <MusicProduction />
                  </Route>
                  {/*<Route exact path={Nav.items.link}>*/}
                  {/*  < />*/}
                  {/*</Route>*/}
                </Switch>
                <div style={{height:"20px"}} />
              </div>
              <Drawer
                  title={sourceCodeFilename}
                  placement="right"
                  closable={false}
                  onClose={onSourceClose}
                  visible={sourceVisible}
                  getContainer={false}
                  style={{ position: 'absolute' }}
                  width={768}
              >
                <SyntaxHighlighter language="javascript" style={atomDark}>
                  {sourceCode}
                </SyntaxHighlighter>
              </Drawer>
            </div>
          </Content>
        </Layout>
      </Layout>
  );
}

export default App;
