import React from "react";
import {Space, Typography} from "antd";
import '../css/App.css'
import Content, {Item, Title} from "../components/Content";
import {Nav} from "../lib/Nav";
import ExternalSvg from "../img/external-link.svg";
import ExternalLink from "../components/ExternalLink";

const {Text} = Typography

export default function () {

    return (
        <Content>
            <Title date={'24.11.2020'} navPrev={Nav.wiki.items["0"].link}>Disclaimer</Title>
            <Item>
                <Space direction="vertical">
                    <Text>Dies ist eine private Homepage, ausschließlich zu Zwecken der Information und Präsentation
                        und ich übernehme keinerlei Gewährleistung für die hier präsentierten Inhalte, die außerhalb
                        meines Kenntnis- oder Zugriffsbereichs liegen.
                    </Text>
                    <Text>Die externen Inhalte auf dieser Webseite wurden von mir sorgfältig ausgewählt und entsprechen
                        den geltenden Normen und rechtlichen Vorgaben. Ebenso sind diese eindeutig als solche zu
                        erkennen bzw. von mir durch ein Symbol
                        &nbsp;<img alt="external link symbol" src={ExternalSvg} style={{height: '12px', paddingBottom: '2px'}} color='white'/>&nbsp;
                        kenntlich gemacht.
                    </Text>
                    <Text>Es gibt innerhalb keinerlei Werbung oder Tracking seitens meiner Seite. Eingebette Inhalte von beatport.com,
                        soundcloud.com, mixcloud.com, youtube.com und anderen verwenden Cookies, was außerhalb meiner Kontrolle liegt.
                        Durch Fortfahren auf meiner Seite stimmen Sie der Speicherung von Cookies dieser Anbieter auf ihrem Gerät zu.
                    </Text>
                    <Text>Da dies eine private Homepage ist und ich mich auf den Schutz der eigenen Person berufe,
                        ist meine Adresse bei meinem Internetprovider unter <ExternalLink href='https://www.ionos.de'>ionos.de</ExternalLink> 
                        zu erfragen.
                    </Text>
                </Space>
            </Item>
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