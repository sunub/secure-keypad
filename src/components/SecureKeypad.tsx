import React from "react";
import Input from "./Input";
import { styled } from "styled-components";
import Keypad from "./Keypad/index"

const Container = styled.div`
    position: relative;
`

export default function SecureKeypad({ uses }: { uses: string }) {
    const id = uses === "insert" ? "secure-keypad__insert" : "secure-keypad__confirm";

    return (
        <Container id={id} aria-label={`Close Keypad`}>
            <Input name={id} label="비밀번호" bottomText="비밀번호를 입력해주세요">
                <Input.TextField id={id} />
            </Input>
            <Keypad className={id} />
        </Container>
    )
}