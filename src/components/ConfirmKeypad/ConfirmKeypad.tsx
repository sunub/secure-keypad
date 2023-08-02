import React from "react";
import ConfirmContextProvider from "./ConfirmKeypad.context";
import Input from "../Input";
import KeyPad from "../Keypad/KeyPad";

export default function ConfirmKeypad() {
    return (<>
        <Input className="secure-keypad__confirm" label="보안 키 확인">
            <Input.TextField id="secure-keypad__confirm" />
        </Input>
        <KeyPad id="secure-keypad__confirm-keypad" />
    </>)
}