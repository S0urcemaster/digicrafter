import React, {useState} from "react";
import '../../css/DigiOp.css'
import {Button, Modal} from "antd";
import {Nav} from "../../lib/Nav";
import ContentMutliView from "../../components/ContentMutliView";
import Dashboard from "./digiop/Dashboard";
import RoutinePlanner from "./digiop/RoutinePlanner";

export default function (props:any) {

    const [infoVisible, setInfoVisible] = useState(false)

    return (
        <>
            <Modal
                visible={infoVisible}
                title="Digi Op Info"
                onOk={() => setInfoVisible(false)}
                onCancel={() => setInfoVisible(false)}
                footer={[
                    <Button key="ok" type="primary" onClick={() => setInfoVisible(false)}>
                        OK
                    </Button>,
                ]}
            >
                <p>(I released this projects's state as it will take longer than expected and I need to get more content onto my page fast.
                    Nothing is working here yet except for the Actions list navigator.)</p>
                <p>Digi Op stands for 'Digital Operations' and is related to the term 'Dev Ops'.</p>
                <p>It's purpose is to be a manager for all kinds of operations a developer, admin or both: a DevOp needs to do during his day's work.</p>
                <p>While a web app isn't allowed to do much on a workstation or server, it can be a manager of backend services, though.
                And backend services <i>do</i> have access to the operating system as much as you like. They can send Emails, copy files, edit
                configuration files, run a deployment script, check the status of a service or daemon - do all the stuff you need to do every day
                    with one click.</p>
                <p>Don't write a wiki entry - write an operation that is doing what you'd just documented instead.
                    Next time you don't look up in the wiki and repeat what you'd written down manually,
                    you just look up for the operation you created, possibly make some changes to it and press "run".</p>
            </Modal>
            <ContentMutliView title='DigiOps' navPrev={Nav.tools.items.passwordGenerator.link} navNext={Nav.tools.items.edit.link}
                              routeMappings={[
                                  {title:'Dashboard', path:'/dashboard', component:() => <Dashboard />},
                                  {title:'Routine Planner', path:'/planner', component:() => <RoutinePlanner />},
                              ]}
            >
            </ContentMutliView>
            {/*<Content style={{display:'f'}}>*/}
            {/*    <div style={{display:'flex'}}>*/}
            {/*        <Title style={{paddingTop:'10px', paddingBottom:'10px'}}*/}
            {/*               navPrev={Nav.tools.items.passwordGenerator.link} navNext={Nav.tools.items.edit.link}>Digi Ops</Title>*/}
            {/*        <div>test</div>*/}
            {/*    </div>*/}
            {/*</Content>*/}
            {/*<div style={{padding:'20px'}}>*/}
            {/*    <div style={{display:"flex", justifyContent:"space-between", alignItems:'end'}}>*/}
            {/*        <div style={{display:"flex"}}>*/}
            {/*            {<Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>*/}
            {/*                <InternalLink to={Nav.tools.items.passwordGenerator.link}><LeftCircleOutlined style={{color:'#666666', paddingTop:'3px'}} />&nbsp;</InternalLink>*/}
            {/*            </Typography.Title>}*/}
            {/*            <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>Digi Ops</Typography.Title>*/}
            {/*            {<Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>*/}
            {/*                <InternalLink to={Nav.tools.items.edit.link}>&nbsp;<RightCircleOutlined style={{color:'#666666', paddingTop:'3px'}} /></InternalLink>*/}
            {/*            </Typography.Title>}*/}
            {/*        </div>*/}
            {/*        <Typography.Title style={{marginBottom:'2px', marginTop:'0', color:'#555555'}} level={4}>{props.date}</Typography.Title>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}