import React, {useState} from 'react';
import {Typography} from 'antd'
import '../css/edit.css'
import { Editor } from '@tinymce/tinymce-react';
import {SyntheticEventData} from "react-dom/test-utils";

const {Title} = Typography


function getTextWidth(text:string, font:string): number {
    // re-use canvas object for better performance
    // @ts-ignore
    let canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

export default function Edit () {

    const inputs = [
        <input id="0" style={{backgroundColor:'#000', border:0, width:nextPara('First'), font:'38px Arial'}} value="First" onKeyDown={keyDown}></input>,
        <input id="1" style={{backgroundColor:'#000', border:0, width:nextPara('Next'), font:'38px Arial'}} value="Next" onKeyDown={keyDown}></input>,
        <input id="2" style={{backgroundColor:'#000', border:0, width:nextPara('Last'), font:'38px Arial'}} value="Last" onKeyDown={keyDown}></input>,
    ]

    const docTest = () => (
        <div style={{backgroundColor:'#333333'}}>
            <div style={{display:'inline-block'}}>
                <span style={{marginBottom:0, lineHeight:1, border:'1px solid white', fontSize:'38pt'}}>
                    {inputs[0]}
                </span>
                <span style={{marginBottom:0, lineHeight:1, border:'1px solid white', fontSize:'38pt'}}>
                    {inputs[1]}
                </span>
                <span style={{marginBottom:0, lineHeight:1, border:'1px solid white', fontSize:'38pt'}}>
                    {inputs[2]}
                </span>
            </div><br />
            {/*<div style={{display:'inline-block'}}>*/}
            {/*    <Title level={1} style={{marginBottom:0, marginTop:0, lineHeight:1, border:'1px solid white'}}>*/}
            {/*        {inputs[2]}*/}
            {/*    </Title>*/}
            {/*</div>*/}
        </div>
    )

    const [doc, setDoc] = useState(docTest)

    function nextPara(text:string) {
        return getTextWidth(text, '38px Arial') +2
    }

    function keyDown (event:any) {
        // console.log(event.key)
        switch (event.key) {
            case 'ArrowLeft':
                if ((event.target as HTMLInputElement).selectionStart === 0) {
                    let id = Number(event.target.id -1).toString()
                    console.log('Hit: ', id)
                    setCaretPosition(id, 1)
                    // const input = document.getElementById(id) as HTMLInputElement
                    // input.setSelectionRange(1,1)
                }


        }
    }
    // @ts-ignore
    function setCaretPosition(elemId, caretPos) {
        var el = document.getElementById(elemId);

        // @ts-ignore
        el.value = el.value;
        // ^ this is used to not only get "focus", but
        // to make sure we don't have it everything -selected-
        // (it causes an issue in chrome, and having it doesn't hurt any other browser)

        if (el !== null) {

            // @ts-ignore
            if (el.createTextRange) {
                // @ts-ignore
                var range = el.createTextRange();
                range.move('character', caretPos);
                range.select();
                return true;
            }

            else {
                // (el.selectionStart === 0 added for Firefox bug)
                // @ts-ignore
                if (el.selectionStart || el.selectionStart === 0) {
                    el.focus();
                    // @ts-ignore
                    el.setSelectionRange(caretPos, caretPos);
                    return true;
                }

                else  { // fail city, fortunately this never happens (as far as I've tested) :)
                    el.focus();
                    return false;
                }
            }
        }
    }

    return (

        <Editor
            initialValue="<p>Initial content</p>"
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image',
                    'charmap print preview anchor help',
                    'searchreplace visualblocks code',
                    'insertdatetime media table paste wordcount'
                ],
                toolbar:
                    'undo redo | formatselect | bold italic | \
                    alignleft aligncenter alignright | \
                    bullist numlist outdent indent | help'
            }}
            // onChange={this.handleEditorChange}
            apiKey="esa6a0rrt3bla177zpzlmmhp9xxf3neouip6q8qgc517picl"
        />

    )

}