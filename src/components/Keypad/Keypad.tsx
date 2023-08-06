import React from "react"
import Input from "../Input"
import Pads from "../KeyLayout/index"
import { styled } from "styled-components"

type Setters = {
    focus: React.Dispatch<React.SetStateAction<boolean>>
}

interface KeypadProps {
    setters: Setters
}

export default function Keypad() {
    const [isFocus, setFocus] = React.useState(false);

    const setters = {
        focus: setFocus
    }

    return (
        <>
            <Input label="비밀번호">
                <Input.TextField setters={setters} />
            </Input>
            {isFocus ? <Pads setters={setters} /> : null}
        </>
    )
}
