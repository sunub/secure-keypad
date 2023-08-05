import React, { HTMLAttributes, useContext, useEffect } from "react"
import styled from "styled-components"
import NumKeypad from "./Numpad/Numpad"
import { createPadButtons } from "./KeypadButtons.helper"
import FunctionKeypad from "./FunctionPad/Functionpad"

const Container = styled.div`
    display: grid;
    grid-template-columns: [num-keypad] 1fr [fn-keypad] .2fr;

    width: fit-content;
    background: gray;
`
interface KeypadProps {
    uses?: string;
    inputRef?: React.RefObject<HTMLInputElement>
    setStatus?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Keypad({ uses, inputRef, setStatus }: KeypadProps) {
    const [dataLength, setDataLength] = React.useState(0);
    const [insertData, setInsertData] = React.useState("");
    const padButtons = React.useMemo(createPadButtons, []);
    const id = uses === "insert" ? "secure-keypad__insert--keypad" : "secure-keypad__confirm--keypad";

    console.log(dataLength);
    return (<>
        <p>6자리로 입력해주세요</p>
        <p>비밀번호를 입력하세요</p>
        <Container id={`${id}`} aria-hidden={true} >
            <NumKeypad
                className={id}
                numpadButton={padButtons.numpad}
                inputRef={inputRef}
                update={setDataLength}
                updateData={setInsertData}
            />
            <FunctionKeypad
                dataLength={dataLength}
                className={id} setStatus={setStatus}
                inputRef={inputRef}
            />
        </Container>
    </>)
}