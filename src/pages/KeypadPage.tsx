import React, { MutableRefObject, RefObject } from "react"
import Txt from "../components/Txt"
import KeypadProvider from "../components/Context/KeypadProvider";
import SecureKeypad from "../components/SecureKeypad";

export default function KeypadPage() {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <>
            <Txt typography="h3" color="red">
                Secure Keypad
            </Txt>
            <KeypadProvider>
                <SecureKeypad uses="insert" />
                {/* <SecureKeypad uses="confirm" /> */}
            </KeypadProvider>
        </>
    )
}