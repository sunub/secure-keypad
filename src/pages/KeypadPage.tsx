import React from "react"
import Txt from "@components/Txt"
import Keypad from "@components/Keypad/Keypad"
import Spacer from "@/components/Spacer"
import { styled } from "styled-components"
import { FocusContext } from "@/context/FocusContext"
import { z } from "zod"
import { http } from "@/utils/http"
import { submitPassword } from "./remotes"
import axios from "axios"

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
                    // const c = {
                    //     pas: a,
                    //     con: b
                    // };
                    // console.log(KeypadInputResultSchema)

                    // const { pas, con } = z.object({
                    //     pas: KeypadInputResultSchema,
                    //     con: KeypadInputResultSchema
                    // }).parse(c)
                    // console.log(pas)
                    // console.log(con)

                    // const { password, confirmPassword } = z
                    //     .object({
                    //         password: KeypadInputResultSchema,
                    //         confirmPassword: KeypadInputResultSchema,
                    //     })
                    //     .parse(req.body);

                    async function sendDataToServer() {
                        type KeypadInputResult = {
                            uid: string;
                            coords: Array<{ x: number; y: number }>;
                        };

                        const KeypadInputResultSchema = z.object({
                            uid: z.string(),
                            coords: z.array(
                                z.object({
                                    x: z.number(),
                                    y: z.number(),
                                })
                            ),
                        });

                        const a = KeypadInputResultSchema.parse({
                            uid: "HI",
                            coords: [{ x: 3, y: 4 }]
                        })
                        const b = KeypadInputResultSchema.parse({
                            uid: "HELLO",
                            coords: [{ x: 3, y: 4 }]
                        })
                        const result = await submitPassword(a, b);
                    }
                    sendDataToServer()
                }}>완료</ConfirmBtn>
        </Container>
    )
}