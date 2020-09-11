import React from "react";
import {Typography} from "antd";
import Content from "../components/Content";
import '../css/MusicProduction.css'

const {Title, Text} = Typography


export default function MusicProduction () {

    return (
        <Content title="Zappy Beats' Releases">
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/865197829&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/846008341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            <iframe width="100%" height="300" scrolling="no" frameBorder="no" allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/849535457&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

        </Content>
    )

}