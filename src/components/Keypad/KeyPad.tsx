import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import NumKeypad from "./NumKeypad"
import { createPadButtons } from "./KeypadButtons.helper"
import FunctionKeypad from "./FunctionKeypad"

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

export default function KeyPad({ id }: { id: string }) {
    const padButtons = React.useMemo(createPadButtons, []);

    return (
        <Container id={id} aria-hidden={true}>
            <NumKeypad numpadButton={padButtons.numpad} />
            <FunctionKeypad fnKeypadButton={padButtons.functionpad} />
        </Container>
    )
}