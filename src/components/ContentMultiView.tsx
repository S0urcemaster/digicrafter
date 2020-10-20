import React, {Component, FunctionComponent, PropsWithChildren, useEffect, useState} from "react";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import {Button, Radio, Typography} from "antd";
import {LeftCircleOutlined, RightCircleOutlined} from '@ant-design/icons'
import '../css/App.css'
import InternalLink from "./InternalLink";

export type RouteMapping = {
    title:string
    path:string
    component:FunctionComponent
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
    let {path} = useRouteMatch();
    return (
        // <div className="content-multiview-headline" style={{marginLeft:'1px', marginTop:'1px', ...props.style}}>
        <div className="content-multiview-headline" style={{borderLeft:'1px solid #141414', borderTop:'1px solid #141414', ...props.style}}>
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
                <Radio.Group defaultValue={props.activeRoute} onChange={(event) => history.push(path +event.target.value)}>
                    {props.routes.map((route: { title:string, path:string }) => <Radio.Button key={route.path} value={route.path}>{route.title}</Radio.Button>)}
                </Radio.Group>
            </div>
        </div>
    )
}

export const SubHeadline = (props:PropsWithChildren<any> & {title:string, actions:{key:string,title:string, onClick:(key:string) => void}[]}) => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'flex-end', backgroundColor:'#26201A', padding:'5px', paddingLeft:'10px'}}>
            <Typography.Title level={3} style={{marginBottom:'0'}}>{props.children}</Typography.Title>
            <div style={{display:'flex'}}>
                {props.actions.map((action:any) => {return <><Button key={action.key} onClick={() => action.onClick(action.key)}>{action.title}</Button> &nbsp;</>})}
            </div>
        </div>
    )
}


export default (props:PropsWithChildren<any> & {
    title:string
    navPrev:string
    navNext:string
    routeMappings:RouteMapping[]}) => {

    const history = useHistory()
    let { path, url } = useRouteMatch();
    const [subroute, setSubroute] = useState(getSubroute(history.location.pathname))

    function getSubroute (route:string) : string {
        const subroute = route.replace(url, '')
        if (subroute.length > 0) {
            return subroute
        } else {
            return props.routeMappings[0].path
        }
    }

    useEffect(() => {
        const subroute = getSubroute(history.location.pathname)
        history.listen((location) => setSubroute(subroute))
        history.push(url +subroute)
    }, [])

    return (
        <>
            <Content>
                <Headline routes={props.routeMappings.map((route:RouteMapping) => {return {title:route.title, path:route.path}})}
                          navPrev={props.navPrev} navNext={props.navNext} activeRoute={subroute}
                >{props.title}</Headline>
                <View>
                    <Switch>
                        {props.routeMappings.map((map:RouteMapping) => {
                            return <Route key={map.path} exact path={path + map.path} component={map.component}/>
                        })}
                    </Switch>
                </View>
            </Content>
        </>
    )
}
