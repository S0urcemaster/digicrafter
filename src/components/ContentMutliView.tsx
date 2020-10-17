import React, {Component, FunctionComponent, PropsWithChildren, ReactElement, useEffect, useState} from "react";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import {Button, Typography} from "antd";
import {LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons'
import '../css/App.css'
import InternalLink from "./InternalLink";

export type RouteMapping = {
    title:string
    path:string
    component:FunctionComponent
}

export default (props:PropsWithChildren<any> & {
    title:string
    navPrev:string
    navNext:string
    routeMappings:RouteMapping[]}) => {

    const [activeView, setActiveView] = useState(0)
    const history = useHistory()
    let { path, url } = useRouteMatch();

    useEffect(() => {
        history.push(url+props.routeMappings[0].path)
        console.log(url+props.routeMappings[0].path)
        console.log(path, url)
        console.log(history.location)
    }, [])

    return (
        <>
            <Content>
                <Headline routes={props.routeMappings.map((route:RouteMapping) => {return {title:route.title, path:route.path}})}
                          navPrev={props.navPrev} navNext={props.navNext}
                >{props.title}</Headline>
                <View>
                    <Switch>
                        {props.routeMappings.map((map:RouteMapping) => {
                            return <Route exact path={path + map.path} component={map.component}/>
                        })}
                    </Switch>
                </View>
            </Content>
        </>
    )
}

const View = (props:PropsWithChildren<any>) => {
    return (
        <div style={{overflowY:'hidden'}}>
            {props.children}
        </div>
    )
}

const Content = (props:PropsWithChildren<any>) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

const Headline = (props:PropsWithChildren<any> & {date:string, navPrev:string, navNext:string, routes:{title:string, path:string}[]}) => {
    const history = useHistory()
    let { path, url } = useRouteMatch();
    return (
        <div className="content-multiview-headline" style={{marginLeft:'1px', marginTop:'1px', ...props.style}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:'end'}}>
                <div style={{display:"flex"}}>
                    {props.navPrev && <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>
                        <InternalLink to={props.navPrev}><LeftCircleOutlined style={{color:'#666666', paddingTop:'3px'}} />&nbsp;</InternalLink>
                    </Typography.Title>}
                    <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>{props.children}</Typography.Title>
                    {props.navNext && <Typography.Title style={{marginBottom:'0', marginTop:'0'}} level={1}>
                        <InternalLink to={props.navNext}>&nbsp;<RightCircleOutlined style={{color:'#666666', paddingTop:'3px'}} /></InternalLink>
                    </Typography.Title>}
                </div>
                <div style={{display:'flex'}}>
                    {props.routes.map((route: { title:string, path:string }) => <Button onClick={() => history.push(path+route.path)}>{route.title}</Button>
                    )}
                </div>
            </div>
        </div>
    )
}
