import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button} from "antd";
import {CaretLeftOutlined, CaretRightOutlined,} from '@ant-design/icons';
import '../css/colors.css'

export default function (props:PropsWithChildren<any>) {

    function left() {
        props.onChangeCurrent(props.currentId -1)
    }

    function right() {
        props.onChangeCurrent(props.currentId +1)
    }

    function shiftLeft() {
        let arr = props.list.slice(0)
        const removed = arr.splice(props.currentId, 1)[0]
        arr.splice(props.currentId -1, 0, removed)
        props.onListChanged(arr)
        left()
    }

    function shiftRight() {
        const arr = props.list.slice(0)
        const removed = arr.splice(props.currentId, 1)[0]
        arr.splice(props.currentId +1, 0, removed)
        props.onListChanged(arr)
        right()
    }

    function add () :void {
        let arr = props.list.slice(0)
        props.onAddToList((emptyItem:any) => {
            arr.splice(props.currentId + 1, 0, emptyItem)
            return arr
        })
        props.onChangeCurrent(props.currentId +1)
    }

    function remove () {
        let arr = props.list.slice(0)
        if (props.currentId === props.list.length -1) {
            arr = arr.slice(0, props.list.length -1)
            props.onListChanged(arr)
            props.onChangeCurrent(props.currentId -1)
        } else {
            arr.splice(props.currentId, 1)
            props.onListChanged(arr)
        }
    }

    const But = (props:PropsWithChildren<any>) => <>
        <Button disabled={props.disabled} onClick={props.onClick} className={props.className} style={{width:'30px', height:'30px', ...props.style,}} size="small">{props.children}</Button>
    </>

    const AddButton = () => <>
        <But className='green' onClick={add}>+</But>
    </>

    const RemoveButton = () => <>
        <But disabled={props.list.length === 1} className='red' onClick={remove}>-</But>
    </>

    const LeftButton = () => <>
        <But disabled={props.currentId < 1} onClick={left}>
            <CaretLeftOutlined style={{marginBottom:'-5px', lineHeight:'30px'}} />
        </But>
    </>

    const RightButton = () => <>
        <But disabled={props.currentId > props.list.length-2} onClick={right}>
            <CaretRightOutlined style={{marginBottom:'-5px', lineHeight:'30px'}} />
        </But>
    </>

    const ShiftLeftButton = () => <>
        <But disabled={props.currentId < 1} onClick={shiftLeft}>
            <div style={{display:'flex', marginLeft:'-3px', alignItems:'center'}}>
                <div className='green'>·</div>
                <CaretLeftOutlined />
                <div className='red'>·</div>
            </div>
        </But>
    </>

    const ShiftRightButton = () => <>
        <But disabled={props.currentId > props.list.length-2} onClick={shiftRight}>
            <div style={{display:'flex', marginLeft:'-3px', alignItems:'center'}}>
                <div className='red'>·</div>
                <CaretRightOutlined />
                <div className='green'>·</div>
            </div>
        </But>
    </>

    const CurrentButton = () => <>
        <Button className='blue' style={{height:'30px', minWidth:'30px'}} size="small">{props.currentId+1}</Button>
    </>



    return (
        <div style={{display:'flex', marginBottom:'2px'}}>
            <RemoveButton />
            <ShiftLeftButton />
            <LeftButton />
            <CurrentButton />
            <RightButton />
            <ShiftRightButton />
            <AddButton />
        </div>
    )

}