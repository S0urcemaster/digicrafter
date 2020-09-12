import React from "react";
import {Button, Typography} from "antd";
import '../css/App.css'
import Content from "../components/Content";
import axios from 'axios'

const {Title, Text} = Typography

export default function Home () {

    function send () {
        // axios.post("https://api.elasticemail.com/v2/email/send", {
        //     'from': 'sebastian-teister@outlook.de',
        //     'fromName': 'Sebastian Teister',
        //     'to': 'snteister@gmail.com',
        //     'apikey': '660006A9B11E3A7C3B5ACBA1343673C2B03BD7C4885D5722ADB8C29C60723BE49307FE03BECCE12E8770BFE02C2F34C7',
        //     'subject': 'test',
        //     'bodyText': 'test',
        //     'bodyHtml': 'test',
        //     'isTransactional': 'true',
        // })
        //     .then(res => {
        //         console.log(res.data)
        //     })
        axios({
            method: 'post',
            url: 'https://api.elasticemail.com/v2/email/send',
            data: {
                'from': 'sebastian-teister@outlook.de',
                'fromName': 'Sebastian Teister',
                'to': 'snteister@gmail.com',
                'apikey': '660006A9B11E3A7C3B5ACBA1343673C2B03BD7C4885D5722ADB8C29C60723BE49307FE03BECCE12E8770BFE02C2F34C7',
                'subject': 'test',
                'bodyText': 'test',
                'bodyHtml': 'test',
                'isTransactional': 'true',
            }
        }).then(res => {
                console.log(res.data)
            });
    }

    return (
        <Content title="digicrafter's digital stuff">
            <Button onClick={send}>Send</Button>
            <Text>digicraft stuff</Text>
        </Content>
    )

}