import React, { MutableRefObject, RefObject } from "react"
import Input from "../components/Form/Input"
import KeyPadConfirm from "../components/Keypad/KeyPadConfirm"
import Txt from "../components/Txt"
import Form from "../components/Form/Form"
import KeyPad from "../components/Keypad/KeyPad"

export default function KeypadPage() {
    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <Form inputRef={inputRef}>
            <Txt typography="h3" color="red">
                Secure Keypad
            </Txt>
            <Input label="보안 키 입력">
                <Input.TextField ref={inputRef} />
            </Input>
            <KeyPad />
            <Input label="보안 키 확인">
                <Input.TextField />
            </Input>
            <KeyPadConfirm />
        </Form>
    )
}