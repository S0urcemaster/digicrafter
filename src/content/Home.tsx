import React from "react";
import {Typography} from "antd";
import '../App.css'
import Content from "../Content";

const {Title, Text} = Typography

export default function Home () {

    return (
        <Content title="Home of digicraft">
            <Text>digicraft stuff</Text>
        </Content>
    )

}