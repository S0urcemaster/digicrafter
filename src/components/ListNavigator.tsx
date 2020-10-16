import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button} from "antd";
import {CaretLeftOutlined, CaretRightOutlined,} from '@ant-design/icons';
import '../css/colors.css'

export default function (props:any) {

    const list:any = props.list
    const currentId:number = props.currentId
    const supportAdd = props.supportAdd ?? true
    const allowDeleteLastItem:boolean = props.allowDeleteLastItem

    function left() {
        props.onChangeCurrent(currentId -1)
    }

    function right() {
        props.onChangeCurrent(currentId +1)
    }

    function shiftLeft() {
        let arr = list.slice(0)
        const removed = arr.splice(currentId, 1)[0]
        arr.splice(currentId -1, 0, removed)
        props.onListChanged(arr)
        left()
    }

    function shiftRight() {
        const arr = list.slice(0)
        const removed = arr.splice(currentId, 1)[0]
        arr.splice(currentId +1, 0, removed)
        props.onListChanged(arr)
        right()
    }

    function add () :void {
        let arr = list.slice(0)
        props.onAddToList((emptyItem:any) => {
            arr.splice(currentId + 1, 0, emptyItem)
            return arr
        })
        props.onChangeCurrent(props.currentId +1)
    }

    function remove () {
        if(list.length === 1 && !allowDeleteLastItem) {
            return
        }
        let arr = list.slice(0)
        if (currentId === list.length -1) {
            arr = arr.slice(0, list.length -1)
            props.onListChanged(arr)
            props.onChangeCurrent(currentId -1)
        } else {
            arr.splice(currentId, 1)
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
        <But disabled={list.length < 2 && (list.length === 0 || (list.length === 1 && !allowDeleteLastItem))} className='red' onClick={remove}>-</But>
    </>

    const LeftButton = () => <>
        <But disabled={currentId < 1} onClick={left}>
            <CaretLeftOutlined style={{marginBottom:'-5px', lineHeight:'30px'}} />
        </But>
    </>

    const RightButton = () => <>
        <But disabled={currentId > list.length-2} onClick={right}>
            <CaretRightOutlined style={{marginBottom:'-5px', lineHeight:'30px'}} />
        </But>
    </>

    const ShiftLeftButton = () => <>
        <But disabled={currentId < 1} onClick={shiftLeft}>
            <div style={{display:'flex', marginLeft:'-3px', alignItems:'center'}}>
                <div className='green'>·</div>
                <CaretLeftOutlined />
                <div className='red'>·</div>
            </div>
        </But>
    </>

    const ShiftRightButton = () => <>
        <But disabled={currentId > list.length-2} onClick={shiftRight}>
            <div style={{display:'flex', marginLeft:'-3px', alignItems:'center'}}>
                <div className='red'>·</div>
                <CaretRightOutlined />
                <div className='green'>·</div>
            </div>
        </But>
    </>

    const CurrentButton = () => <>
        <Button className='blue' style={{height:'30px', minWidth:'30px'}} size="small">{currentId+1}/{list.length}</Button>
    </>



    return (
        <div style={{display:'flex', marginBottom:'2px'}}>
            <RemoveButton />
            <ShiftLeftButton />
            <LeftButton />
            <CurrentButton />
            <RightButton />
            <ShiftRightButton />
            {supportAdd && <AddButton />}
        </div>
    )

}