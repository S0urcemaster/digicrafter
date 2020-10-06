import React, {PropsWithChildren, useEffect, useState} from "react";
import {Button} from "antd";
import {CaretLeftOutlined, CaretRightOutlined,} from '@ant-design/icons';
import '../css/colors.css'

export default function (props:PropsWithChildren<any>) {

    // const [indices, setIndices] = useState <number[]>([])
    const [currentId, setCurrentId] = useState <number>(0)
    const [currentItem, setCurrentItem] = useState({})
    const [list, setList] = useState(props.list)

    useEffect(() => {
        console.log(props.list, 'current: ', currentId)
    }, [currentId])

    function left() {
        const list = (([] as number[]).concat(props.items.slice(0, currentId), currentId, props.items.slice(currentId, props.items.length)))
        setCurrentId(currentId -1)
    }

    function right() {

    }

    function shiftLeft() {

    }

    function shiftRight() {

    }

    function add () :void {
        if (currentId === 0) {
            props.onChangeList([currentItem])
        } else {
            props.onChangeList(([] as any).concat(list.slice(0, currentId), currentItem, list.slice(currentId, list.length)))
        }
        setCurrentId(currentId +1)
    }

    function rem () {

    }

    const But = (props:PropsWithChildren<any>) => <>
        <Button disabled={props.disabled} onClick={props.onClick} className={props.className} style={{width:'30px', height:'30px', ...props.style,}} size="small">{props.children}</Button>
    </>

    const AddButton = () => <>
        <But className='green' onClick={add}>+</But>
    </>

    const RemoveButton = () => <>
        <But disabled={currentId === 0} className='red' onClick={rem}>-</But>
    </>

    const LeftButton = () => <>
        <But disabled={currentId < 2} onClick={left}>
            <CaretLeftOutlined style={{marginBottom:'-5px', lineHeight:'30px'}} />
        </But>
    </>

    const RightButton = () => <>
        <But disabled={props.list ? currentId === props.list.length : true} onClick={right}>
            <CaretRightOutlined style={{marginBottom:'-5px', lineHeight:'30px'}} />
        </But>
    </>

    const ShiftLeftButton = () => <>
        <But disabled={currentId < 2} onClick={shiftLeft}>
            <div style={{display:'flex', marginLeft:'-3px', alignItems:'center'}}>
                <div className='green'>·</div>
                <CaretLeftOutlined />
                <div className='red'>·</div>
            </div>
        </But>
    </>

    const ShiftRightButton = () => <>
        <But disabled={props.list ? currentId > props.list.length -2 : true} onClick={shiftRight}>
            <div style={{display:'flex', marginLeft:'-3px', alignItems:'center'}}>
                <div className='red'>·</div>
                <CaretRightOutlined />
                <div className='green'>·</div>
            </div>
        </But>
    </>

    const CurrentButton = () => <>
        <Button className='blue' style={{height:'30px', minWidth:'30px'}} size="small">{currentId}</Button>
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