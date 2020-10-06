import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button} from "antd";
import {CaretLeftOutlined, CaretRightOutlined,} from '@ant-design/icons';
import '../css/colors.css'

export default function (props:PropsWithChildren<any>) {

    // const [currentId, setCurrentId] = useState <number>(0)
    // const [list, setList] = useState(props.list)

    // useEffect(() => {
    //     // console.log('currentId: ', currentId)
    //     // console.log('currentId: ', list[currentId])
    //     if (list[props.currentId]) props.onChangeCurrent(list[props.currentId])
    // }, [props.currentId])

    // useEffect(() => {
    //     console.log(list, 'currentList: ', list)
    // }, [list])

    function left() {
        props.onChangeCurrent(props.currentId -1)
    }

    function right() {
        props.onChangeCurrent(props.currentId +1)
    }

    function shiftLeft() {

    }

    function shiftRight() {

    }

    function add () :void {
        if (props.currentId === 0) {
            props.onChangeList((emptyItem:any) => ([] as any).concat(props.list, emptyItem))
        } else {
            props.onChangeList((emptyItem:any) => ([] as any).concat(
                props.list.slice(0, props.currentId), emptyItem, props.list.slice(props.currentId, props.list.length)))
        }
        props.onChangeCurrent(props.currentId +1)
        // setCurrentId(currentId +1)
        // setCurrentItem(list[currentId])
    }

    function remove () {

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