import React from "react";
import {Columns} from "../../../components/Content";
import Brokers from "./RoutinePlanner/Brokers";
import Routine from "./RoutinePlanner/Routine";
import {Broker} from "../../../lib/model/DigiOp";

export default function  (props:{
    // brokers:Broker[]
    // saveBroker:() => void
    // updateBroker:() => void
    // reloadBroker:(path:string) => void
    // saveRoutine:() => void
    // updateRoutine:() => void
}) {

    return (
        <>
            <Columns count={2}>
                <div>
                    <Brokers
                        brokers={[]}
                        updateBroker={() => {}}
                    />
                </div>
                <div>
                    <Routine />
                </div>
            </Columns>
        </>
    )

}