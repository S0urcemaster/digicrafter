import React from "react";
import {Space} from "antd";
import '../css/App.css'
import Content, {Item, Columns, Title} from "../components/Content";
import InternalLink from "../components/InternalLink";
import ExternalLink from "../components/ExternalLink";

export default function () {

    return (
        <Content>
            <Title>Wiki</Title>
            <Columns count={2}>
                <Item>
                    <Space direction="vertical">
                        <ExternalLink href="https://stackoverflow.com/questions/12925802/make-a-script-which-accept-command-line-arguments">https://stackoverflow.com/questions/12925802/make-a-script-which-accept-command-line-arguments</ExternalLink>
                        <ExternalLink href="https://stackoverflow.com/questions/9831594/apache-and-node-js-on-the-same-server">https://stackoverflow.com/questions/9831594/apache-and-node-js-on-the-same-server</ExternalLink>
                        <ExternalLink href="https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script">https://stackoverflow.com/questions/11580961/sending-command-line-arguments-to-npm-script</ExternalLink>
                        <ExternalLink href="https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program">https://stackoverflow.com/questions/4351521/how-do-i-pass-command-line-arguments-to-a-node-js-program</ExternalLink>
                        <ExternalLink href="https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d">https://medium.com/@nodepractices/were-under-attack-23-node-js-security-best-practices-e33c146cb87d</ExternalLink>
                        {/*<ExternalLink href=""></ExternalLink>*/}
                    </Space>
                    </Item>
                <Item>
                </Item>
            </Columns>
            <iframe id="twitter-widget-0" scrolling="no" width="500px" height={"700px"}
    title="Twitter Tweet"
    src="https://platform.twitter.com/embed/index.html?dnt=false&amp;embedId=twitter-widget-0&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=883292703953387520&amp;lang=en&amp;origin=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext%252Fhtml%26key%3Da19fcc184b9711e1b4764040d3dc5c07%26schema%3Dtwitter%26url%3Dhttps%253A%2F%2Ftwitter.com%2Faras_p%2Fstatus%2F883292703953387520%26image%3Dhttps%253A%2F%2Fi.embed.ly%2F1%2Fimage%253Furl%253Dhttps%25253A%25252F%25252Fpbs.twimg.com%25252Fmedia%25252FDEIV_1XWsAAlY29.jpg%25253Alarge%2526key%253Da19fcc184b9711e1b4764040d3dc5c07&amp;theme=light&amp;widgetsVersion=ed20a2b%3A1601588405575&amp;width=550px"
    data-tweet-id="883292703953387520" frameBorder="0"/>
        </Content>
    )

}