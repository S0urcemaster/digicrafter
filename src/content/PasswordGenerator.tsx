import React from "react";
import '../css/PGenerator.css'
import {Button, Layout, Menu, Tabs, Typography} from "antd";
import Content from "../components/Content";
import {Editable, Slate} from "slate-react";

const {Title, Text} = Typography
const {Sider} = Layout


export default function PasswordGenerator  () {


    function menuClicked () {
        let array = new Uint8Array(1);
        window.crypto.getRandomValues(array);
        console.log(array)
    }

    return (
        <>
            <Layout>
                <div className="sider">
                    <ul>
                        <li>Buchstaben durch Zahlen/Sonderzeichen ersetzen</li>
                        <li>Leerzeichen</li>
                        <li>Wörter durch Zahlen/Sonderzeichen trennen
                            <ul>
                                <li>Zahlen auf-/absteigend</li>
                                <li>eigene Zahlenfolge</li>
                            </ul>
                        </li>
                        <li>Zufällige Buchstabenfolge abwechselnd Konsonant-Vokal</li>
                        <li>Startwert für Zufallszahl</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <Button onClick={menuClicked}>Send</Button>
                </div>
            </Layout>
            <Layout>
                <Layout.Content className="type-content">
                </Layout.Content>
            </Layout>
        </>
    )

}