import React from "react";
import Content, {Columns, Item, ItemTitle, Subtitle, Title} from "../../components/Content";
import {Nav} from "../../lib/Nav";
import {Space, Typography} from "antd";
import snapshot1 from "../../img/listtagger snapshot 1.png";
import snapshot2 from "../../img/listtagger snapshot 2.png";
import snapshot3 from "../../img/listtagger snapshot 3.png";
import snapshot4 from "../../img/listtagger snapshot 4.png";
import snapshot5 from "../../img/listtagger snapshot 5.png";
import snapshot6 from "../../img/listtagger snapshot 6.png";

export default function  () {

    const {Text} = Typography

    return (
        <Content>
            <Title date={'30.01.2021'} navPrev={Nav.tools.items.passwordGenerator.link} navNext={Nav.tools.items.digiop.link}>ListTagger Development</Title>
            <Item>
                <Text>A common solution for tagging lists (like music titles for DJing) in Java Swing.</Text>
            </Item>
            <Columns count={2}>
                <Item>
                    <img width="100%" src={snapshot1} alt="Snapshot1" />
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'25.01.2021'}>Snapshot 1</ItemTitle>
                        <Text>
                            4:30 h
                        </Text>
                        <Text>Updates</Text>
                        <ul>
                            <li>Project setup</li>
                            <li>Built gui</li>
                            <li>Built menu</li>
                            <li>Built model classes</li>
                            <li>Built table model</li>
                            <li>Insert row</li>
                        </ul>
                    </Space>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <img width="100%" src={snapshot2} alt="Snapshot2" />
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'26.01.2021'}>Snapshot 2</ItemTitle>
                        <Text>
                            4:30 h
                        </Text>
                        <Text>Updates</Text>
                        <ul>
                            <li>Start dialog</li>
                            <li>Save</li>
                            <li>Load</li>
                            <li>Add column</li>
                            <li>Add row</li>
                        </ul>
                    </Space>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <img width="100%" src={snapshot3} alt="Snapshot3" />
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'27.01.2021'}>Snapshot 3</ItemTitle>
                        <Text>
                            2:00 h
                        </Text>
                        <Text>Updates</Text>
                        <ul>
                            <li>Edit functions removed</li>
                            <li>Welcome text changed</li>
                            <li>GUI design</li>
                        </ul>
                    </Space>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <img width="100%" src={snapshot4} alt="Snapshot4" />
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'28.01.2021'}>Snapshot 4</ItemTitle>
                        <Text>
                            2:00 h
                        </Text>
                        <Text>Updates</Text>
                        <ul>
                            <li>Selection details reworked</li>
                            <li>Layout changes</li>
                            <li>Row selection</li>
                            <li>Test data generated from .mp3 tags export</li>
                        </ul>
                    </Space>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <img width="100%" src={snapshot5} alt="Snapshot5" />
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'29.01.2021'}>Snapshot 5</ItemTitle>
                        <Text>
                            4:00 h
                        </Text>
                        <Text>Updates</Text>
                        <ul>
                            <li>New tag group</li>
                            <li>New tag</li>
                            <li>Open tags</li>
                            <li>Save tags</li>
                            <li>Tag selection</li>
                        </ul>
                    </Space>
                </Item>
            </Columns>
            <Columns count={2}>
                <Item>
                    <img width="100%" src={snapshot6} alt="Snapshot6" />
                </Item>
                <Item>
                    <Space direction='vertical' style={{ width: '100%' }}>
                        <ItemTitle date={'30.01.2021'}>Snapshot 6</ItemTitle>
                        <Text>
                            2:30 h
                        </Text>
                        <Text>Updates</Text>
                        <ul>
                            <li>Tag selection bugfixing -{">"} working</li>
                        </ul>
                    </Space>
                </Item>
            </Columns>
        </Content>
    )

}