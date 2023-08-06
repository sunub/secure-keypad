import React from "react"
import Txt from "@components/Txt"
import Keypad from "@components/Keypad/Keypad"
import Spacer from "@/components/Spacer"
import { styled } from "styled-components"
import FocusProvider, { FocusContext } from "@/context/FocusContext"

const Section = styled.section`
    display: flex;
    flex-direction: column;

    width: fit-content;
    `
const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default function KeypadPage() {
    const keypad = React.useContext(FocusContext);
    const [trigger, setTrigger] = React.useState(false)

    function focusingOut(e: MouseEvent) {
        const currTarget = e.target as HTMLElement;
        const keypadArea = document.getElementById("keypad-page-area");

        if (!keypadArea.contains(currTarget)) {
            console.log(32);
        }
    }

    React.useEffect(() => {
        document.addEventListener("click", e => focusingOut(e))

        return document.removeEventListener("click", focusingOut)
    }, [])

    return (
        <Container>
            <Txt type="h3">
                Secure Keypad Project
            </Txt>
            <Section id="keypad-page-area">
                <Keypad
                    uses="insert"
                    label="비밀번호"
                    text="비밀번호를 입력해주세요"
                    triggerState={{ trigger, setTrigger }} />
                <Spacer vertical="vert" size={24} />

                <Keypad
                    uses="confirm"
                    label="비밀번호 확인"
                    text="비밀번호를 입력하세요"
                    triggerState={{ trigger, setTrigger }} />
            </Section>
        </Container>
    )
}