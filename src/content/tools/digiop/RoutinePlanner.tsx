import React from "react";
import {Columns, Item} from "../../../components/Content";
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
                <Item>
                    <Brokers
                        brokers={[]}
                        updateBroker={() => {}}
                    />
                </Item>
                <Item>
                    <Routine />
                </Item>
            </Columns>
        </>
    )

}