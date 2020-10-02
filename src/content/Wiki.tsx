import React from "react";
import {Space, Typography} from "antd";
import '../css/App.css'
import Content, {Item, Columns, Title} from "../components/Content";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";

export default function () {

    return (
        <Content>
            <Title>Wiki</Title>
            {/*<Button onClick={send}>Send</Button>*/}
            <Columns count={2}>
                <Item>
                    <Space direction="vertical">
                        <ExternalLink href="https://stackoverflow.com/questions/12925802/make-a-script-which-accept-command-line-arguments">https://stackoverflow.com/questions/12925802/make-a-script-which-accept-command-line-arguments</ExternalLink>
                        <ExternalLink href="https://stackoverflow.com/questions/9831594/apache-and-node-js-on-the-same-server">https://stackoverflow.com/questions/9831594/apache-and-node-js-on-the-same-server</ExternalLink>
                        <ExternalLink href="https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script">https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script</ExternalLink>
                        <ExternalLink href="https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program">https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program</ExternalLink>
                        {/*<ExternalLink href=""></ExternalLink>*/}
                    </Space>
                    </Item>
                <Item>
                </Item>
            </Columns>
            {/*<Columns count={2}>*/}
            {/*    <Item>*/}
            {/*        <Typography.Title level={3}>Functioning</Typography.Title>*/}
            {/*        <ul>*/}
            {/*            <li><Text>Internal links switch the main menu</Text></li>*/}
            {/*            <li><Text>Source code of active page loaded async when present (button top-right)</Text></li>*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*        </ul>*/}
            {/*    </Item>*/}
            {/*    <Item>*/}
            {/*        <Typography.Title level={3}>Not Functioning</Typography.Title>*/}
            {/*        <ul>*/}
            {/*            <li><Text></Text></li>*/}
            {/*            /!*<li><Text></Text></li>*!/*/}
            {/*        </ul>*/}
            {/*    </Item>*/}
            {/*</Columns>*/}

        </Content>
    )

}