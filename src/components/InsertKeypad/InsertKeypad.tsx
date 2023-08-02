import React from "react"
import InsertContextProvider from "./InsertKeypad.context"
import Input from "../Input"
import KeyPad from "../Keypad/KeyPad"



export default function InsertKeypad() {
    return (
        <>
            <Input className="secure-keypad__insert" label="보안 키 입력">
                <Input.TextField id="secure-keypad__insert" />
            </Input>
            <KeyPad id="secure-keypad__insert-keypad" />
        </>
    )
}