import React from "react";
import {Typography} from "antd";
import '../App.css'
import Content from "../components/Content";

const {Title, Text} = Typography

export default function Home () {

    return (
        <Content title="digicrafter - An Application-Style Homepage">
            <Text>digicraft stuff</Text>
        </Content>
    )

}