import React from "react"
import Txt from "@components/Txt"
import Keypad from "@components/Keypad/Keypad"
import Spacer from "@/components/Spacer"
import { styled } from "styled-components"
import { FocusContext } from "@/context/FocusContext"
import { submitPassword } from "./remotes"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    `
const Container = styled.div`
    width: fit-content;
    height: 100%;

    position: relative;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ConfirmBtn = styled.button`
    
`

export default function KeypadPage() {
    const keypad = React.useContext(FocusContext);
    const [trigger, setTrigger] = React.useState(false)

    function focusingOut(e: MouseEvent) {
        const currTarget = e.target as HTMLElement;
        const keypadArea = document.getElementById("keypad-page-area");

        if (!keypadArea.contains(currTarget)) {
            keypad.setter(value => {
                value.focusing["confirm"] = false;
                value.focusing["insert"] = false;
                return value
            })
            setTrigger(!trigger);
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", focusingOut, false);

        return (() => document.body.removeEventListener("click", focusingOut))
    }, [trigger])

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
            <ConfirmBtn
                onClick={() => {
                    (async () => {
                        const password = keypad.data.inputResult.insert;
                        const confirmPassword = keypad.data.inputResult.confirm;

                        if (password.coords.length !== 6 || confirmPassword.coords.length !== 6) {
                            console.log("비밀번호 자리수는 6자리여야 합니다!")
                            return
                        }
                        const result = await submitPassword(password, confirmPassword);
                        result
                            ? console.log(`비밀번호 확인 성공!`)
                            : console.log('비밀번호 확인 실패');
                    })()
                }}>완료</ConfirmBtn>
        </Container>
    )
}