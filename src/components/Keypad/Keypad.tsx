import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import NumKeypad from "./Numpad/Numpad"
import { createPadButtons } from "./KeypadButtons.helper"
import FunctionKeypad from "./FunctionPad/Functionpad"

const Container = styled.div`
    &[aria-hidden=true] {
        display: none;
    }
    &[aria-hidden=false] {
        display: grid;
        grid-template-columns: [num-keypad] 1fr [fn-keypad] .2fr;
    }

    background: gray;
`

export default function KeyPad({ className }: { className: string }) {
    const [dataLength, setDataLength] = React.useState(0);
    const padButtons = React.useMemo(createPadButtons, []);
    console.log(dataLength);
    return (
        <Container className={`${className}--keypad`} aria-hidden={true} >
            <NumKeypad className={className} numpadButton={padButtons.numpad} update={setDataLength} />
            <FunctionKeypad dataLength={dataLength} className={className} />
        </Container>
    )
}