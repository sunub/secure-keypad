import React from "react"
import Txt from "@components/Txt"
import Keypad from "@components/Keypad/Keypad"
import Spacer from "@/components/Spacer"
import { styled } from "styled-components"

const Section = styled.section`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function KeypadPage() {
    const [isFocus, setFocus] = React.useState(false);

    const setters = {
        focus: setFocus
    }

    return (
        <Section id="keypad-page-area">
            <Txt type="h3">
                Secure Keypad Project
            </Txt>
            <Keypad />
            <Spacer vertical="vert" size={24} />
        </Section>
    )
}