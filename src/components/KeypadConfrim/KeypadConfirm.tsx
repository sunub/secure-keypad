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

export default function KeypadConfirm() {
    const [isFocus, setFocus] = React.useState(false);

    const setters = {
        focus: setFocus
    }
    const id = "keypad__confirm--input";

    return (
        <>
            <Input label="비밀번호 확인" id={id}>
                <Input.TextField setters={setters} id={id} />
            </Input>
            {isFocus ? <Pads setters={setters} /> : null}
        </>
    )
}
