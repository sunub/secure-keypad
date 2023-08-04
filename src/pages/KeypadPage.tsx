import React from "react"
import Txt from "../components/Txt"
import KeypadProvider, { KeypadContext } from "../components/Context/KeypadProvider";
import SecureKeypad from "../components/SecureKeypad/SecureKeypad";

export default function KeypadPage() {

    return (
        <>
            <Txt typography="h3" color="red">
                Secure Keypad
            </Txt>
            <KeypadProvider>
                <SecureKeypad />
            </KeypadProvider>
        </>
    )
}