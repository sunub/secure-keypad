import React, { MutableRefObject, RefObject } from "react"
import Txt from "../components/Txt"
import InsertKeypad from "../components/InsertKeypad/index"
import ConfirmKeypad from "../components/ConfirmKeypad/index"
import KeypadProvider from "../components/Context/KeypadProvider";

export default function KeypadPage() {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <>
            <Txt typography="h3" color="red">
                Secure Keypad
            </Txt>
            <KeypadProvider>
                <InsertKeypad />
                <ConfirmKeypad />
            </KeypadProvider>
        </>
    )
}