import React, {useState} from "react";
import '../../css/DigiOp.css'
import {Button, Modal} from "antd";
import {Nav} from "../../lib/Nav";
import ContentMultiView from "../../components/ContentMultiView";
import Dashboard from "./digiop/Dashboard";
import RoutinePlanner from "./digiop/RoutinePlanner";
import DigiOpsInfo from "../../modals/DigiOpsInfo";
import {InfoCircleOutlined} from '@ant-design/icons';

export default function (props:any) {

    const [infoVisible, setInfoVisible] = useState(false)

    return (
        <>
            <DigiOpsInfo visible={infoVisible} setVisible={setInfoVisible} />
            <ContentMultiView title={<div style={{display:'flex', alignContent:'middle'}}>DigiOps&nbsp;<Button className="infobutton" size='small' style={{paddingBottom:'20px'}} icon={<InfoCircleOutlined />} onClick={() => setInfoVisible(true)}/></div>}
                              navPrev={Nav.tools.items.passwordGenerator.link} navNext={Nav.tools.items.edit.link}
                              routeMappings={[
                                  {title:'Dashboard', path:'/dashboard', component:() => <Dashboard />},
                                  {title:'Routine Planner', path:'/planner', component:() => <RoutinePlanner />},
                              ]}
            >
            </ContentMultiView>
        </>
    )
}