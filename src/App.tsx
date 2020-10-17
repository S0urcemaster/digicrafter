import 'antd/dist/antd.dark.css'
import './css/ant.css'
import './css/App.css'
import './css/digicrafter.css'
import React, {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from "react-router-dom";
import {
  AutoComplete,
  Button,
  Col,
  Input,
  Layout,
  Menu,
  Modal,
  Row,
  Space,
  Tooltip,
  Typography
} from 'antd'
import SubMenu from "antd/es/menu/SubMenu";
import {Nav, NavItem, NavSection} from "./lib/Nav"
import Projects from "./content/projects/Projects";
import Type from "./content/tools/Type";
import Home from "./content/Home";
import ReactTraining from "./content/ReactTraining";
import MusicProduction from "./content/MusicProduction";
import PasswordGenerator from "./content/tools/PasswordGenerator";
import Wiki from "./content/Wiki";
import DigiOps from "./content/tools/DigiOp";
import MusicMixing from "./content/MusicMixing";
import {InfoCircleOutlined} from "@ant-design/icons";
import {sprueche} from "./lib/quotes";
import {random} from "./lib/utils";
import SourceCodeTabs from "./SourceCodeTabs";
import LogView from "./LogView";
import DigiBase from "./lib/data/DigiBase";
import UpdateLogs from "./content/projects/UpdateLogs";
import Insights from "./content/projects/Insights";
import RoutinePlanner from "./content/tools/digiop/RoutinePlanner";

enum Theme {
  default = 'default',
  dark = 'dark',
  nicotine = 'nicotine',
}

const {Header, Content, Sider} = Layout
const {Title} = Typography

function App() {
  const [theme] = useState(Theme.default)
  const [menuOpenKeys, setMenuOpenKeys] = useState([Nav.home.heading])
  const [selectedMenu, setSelectedMenu] = useState(Nav.home.items.landing.link)
  const [sourceVisible, setSourceVisible] = useState(false)
  const [sourceCodePaths, setSourceCodePaths] = useState <string[]> ([])
  const [infoVisible, setInfoVisible] = useState(false)
  const [hintoftheday, setHintoftheday] = useState('')
  const [hintofthedayVisible, setHintofthedayVisible] = useState(false)
  const [logs, setLogs] = useState <string[]>([])
  const rootKeys = Object.values(Nav).map((item) => item.heading)
  const history = useHistory()
  const db = new DigiBase()

  useEffect(() => {
    history.listen((location) => path2Menu(location.pathname))
    path2Menu(history.location.pathname)
    clearDB()
    rollHint()
  },[])

  async function clearDB () {
    try {
      await Promise.all([db.brokers.clear(), db.routines.clear()])
    } catch (ex) {
      setLogs(logs.concat(ex))
    }
  }

  function path2Menu(path: string) {
    Object.values(Nav).find(nav => {
      const found = Object.values(nav.items).find((item) => {
        const found = item.link === path
        if(found) {
          setSourceCodePaths(item.source)
          setSelectedMenu(item.link)
        }
        return found
      })
      if (found) {
        setMenuOpenKeys([nav.heading])
      }
    })
  }

  function menuItems (topic:any, props?:any) {
    return Object.values(topic as NavItem).map((item, props) =>
        <Menu.Item key={item.link} onClick={() => menuClicked(item.link)} {...props} disabled={!!item.disabled}>
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

  function rollHint () {
    setHintoftheday(sprueche[random(0, sprueche.length)])
  }

  return (
      <>
        <Modal
            title="Tipp des Tages"
            visible={hintofthedayVisible}
            onOk={() => setHintofthedayVisible(false)}
            onCancel={() => setHintofthedayVisible(false)}
            footer={[
              <Button key="roll" onClick={rollHint}>
                Nächster Tipp
              </Button>,
              <Button key="fine" type="primary" onClick={() => setHintofthedayVisible(false)}>
                Aha
              </Button>,
            ]}
        >
          <p>{hintoftheday}</p>
        </Modal>
        <Modal
            visible={infoVisible}
            title="Digicrafter Info"
            onOk={() => setInfoVisible(false)}
            onCancel={() => setInfoVisible(false)}
            footer={[
              <Button key="ok" type="primary" onClick={() => setInfoVisible(false)}>
                OK
              </Button>,
            ]}
        >
          <p>Digicrafter is a developer's base.</p>
          <p>You can checkout the source code with the top-right button.</p>
        </Modal>
        <Layout data-theme={theme}>
          <Sider>
            <div className="digicrafterContainer">
              <div onClick={logoClicked}><Title className='digicrafter' level={3}>digicrafter</Title></div>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', justifyItems:'stretch', maxHeight:'calc(100% - 48px)', height:'calc(100% - 48px)'}}>
              <Menu theme="dark" mode="inline"
                  // defaultSelectedKeys={[Nav.projects.items.digicrafter.link]}
                  // defaultOpenKeys={menuOpenKeys}
                    selectedKeys={[selectedMenu]}
                    openKeys={menuOpenKeys}
                    onOpenChange={onMenuOpenChange}>
                {menuTopics()}
              </Menu>
              {logs.length > 0 &&
              <LogView key={logs.length} style={{maxHeight:'300px', height:'300px'}} logs={logs} updateLogs={(logs: React.SetStateAction<string[]>) => setLogs(logs)} />}
            </div>
          </Sider>
          <Layout>
            <Header className="header">
              <Row justify="space-between">
                <Col>
                  <Space size="large">
                    <AutoComplete
                        dropdownClassName="certain-category-search-dropdown"
                        dropdownMatchSelectWidth={500}
                        style={{width: 250}}
                        options={[]}
                    >
                      <Input.Search placeholder="input here"/>
                    </AutoComplete>
                    <Button className="button-square button-linkbutton" onClick={() => history.push('/projects/overview')} shape="round">Projects</Button>
                    <Button className="button-square button-linkbutton"
                            onClick={() => history.push(Nav.tools.items.passwordGenerator.link)} shape="round">{Nav.tools.items.passwordGenerator.title}</Button>
                    <Button className="button-square button-linkbutton" loading
                            onClick={() => history.push(Nav.tools.items.digiop.link)} shape="round">{Nav.tools.items.digiop.title}</Button>
                    <Button className="infobutton" icon={<InfoCircleOutlined/>}
                            onClick={() => setInfoVisible(true)}/>
                  </Space>
                </Col>
                <Col>
                  <Tooltip placement="left" title="scroll horizontally with <shift>">
                    <Button onClick={showSource} shape="round">{"<Source/>"}</Button>
                  </Tooltip>
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
                    <Route exact path={Nav.projects.items.overview.link}>
                      <Projects />
                    </Route>
                    <Route exact path={Nav.projects.items.insights.link}>
                      <Insights />
                    </Route>
                    <Route exact path={Nav.projects.items.updateLog.link}>
                      <UpdateLogs />
                    </Route>
                    <Route exact path={Nav.tools.items.passwordGenerator.link}>
                      <PasswordGenerator />
                    </Route>
                    <Route path={Nav.tools.items.routinePlanner.link}>
                      <RoutinePlanner />
                    </Route>
                    <Route path={Nav.tools.items.digiop.link}>
                      <DigiOps saveRoutine={(routine:any) => db.saveRoutine(routine)} />
                    </Route>
                    <Route exact path={Nav.tools.items.edit.link}>
                      <Type />
                    </Route>
                    <Route exact path={Nav.music.items.mixing.link}>
                      <MusicMixing />
                    </Route>
                    <Route exact path={Nav.music.items.production.link}>
                      <MusicProduction />
                    </Route>
                    <Route exact path={Nav.wiki.items[0].link}>
                      <Wiki />
                    </Route>
                    {/*<Route exact path={Nav.items.link}>*/}
                    {/*  < />*/}
                    {/*</Route>*/}
                  </Switch>
                  <div style={{height:"20px"}} />
                </div>
                <SourceCodeTabs key={sourceCodePaths[0]} paths={sourceCodePaths} visible={sourceVisible} />
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
  );
}

export default App;
