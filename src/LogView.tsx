import React, {useState} from "react";
import ListNavigator from "./components/ListNavigator";
import {Feature} from "./lib/model/DigiOp";

export default function (props:any) {

    const [logs, setLogs] = useState <string[]>(props.logs)
    const [currentLogId, setCurrentLogId] = useState (0)

    function setCurrentLog (log:string) {
        const res = logs.slice()
        res[currentLogId] = log
        setLogs(res)
    }

    function changeCurrentLog (id: number) {
        setCurrentLogId(id)
    }

    function changeLogs (logs:string[]) {
        props.updateLogs(logs)
    }

    return (
        <div style={{...props.style, height:'100%', display:'flex', flexDirection:'column'}}>
            <div style={{backgroundColor:'#141414', height:'100%', padding:'5px', overflowWrap:'break-word', overflowY:'auto', fontSize:'13px'}}>
                {logs[currentLogId]}<br/>
            </div>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <ListNavigator
                    key={currentLogId}
                    list={logs}
                    currentId={currentLogId}
                    onListChanged={changeLogs}
                    onChangeCurrent={changeCurrentLog}
                    supportAdd = {false}
                    allowDeleteLastItem = {true}
                />
            </div>
        </div>
    )

}