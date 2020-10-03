import React from "react";

export type Command = {
    name: string,
    route: string,
    component: React.ComponentType<any>,
}

export type CommandList = {
    [key:string]: Command
}

export const commands:CommandList = {
    copy: {
        name: 'Copy',
        route: '/copy',
        component: React.lazy(() => import('../content/digiboy/Copy')),
    },
    copyToConnection: {
        name: 'Copy to Connection',
        route: '/copy-to-connection',
        component: React.lazy(() => import('../content/digiboy/Copy')),
    },
    osRun1: {
        name: 'OS Run',
        route: '/osrun',
        component: React.lazy(() => import('../content/digiboy/Copy')),
    },
    gitpull: {
        name: 'Git Pull',
        route: '/gitpull',
        component: React.lazy(() => import('../content/digiboy/Copy')),
    },
}