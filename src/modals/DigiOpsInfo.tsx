import React from "react";
import {Button, Modal} from "antd";

export default function  (props:{visible:boolean, setVisible:(visible:boolean) => void}) {

    return (
        <Modal
            visible={props.visible}
            title="Digi Op Info"
            onOk={() => props.setVisible(false)}
            onCancel={() => props.setVisible(false)}
            footer={[
                <Button key="ok" type="primary" onClick={() => props.setVisible(false)}>
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
    )

}