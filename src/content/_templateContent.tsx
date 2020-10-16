import React from "react";
import Content, {Columns, Item, ItemTitle, Subtitle, Title} from "../components/Content";
import {Nav} from "../lib/Nav";
import {Space, Typography} from "antd";

export default function  () {

    const {Text} = Typography

    return (
        <Content>
            <Title date={'16.10.2020'} navPrev={Nav.projects.items.overview.link} navNext={Nav.projects.items.updateLog.link}>Title</Title>
            <Subtitle>Subtitle</Subtitle>
            <Item>
                <Space direction="vertical">
                    <Text>
                    </Text>
                    <Text></Text>
                </Space>
            </Item>
            <Subtitle>Subtitle</Subtitle>
            <Columns count={3}>
                <Item>
                    <ItemTitle date={'9.8.2020'}>ItemTitle</ItemTitle>
                    <Text></Text>
                </Item>
                <Item>
                    <ul>
                        <li></li>
                    </ul>
                </Item>
                <Item>
                </Item>
            </Columns>
        </Content>
    )

}