import React from "react"
import NumKeypad from "./NumKeypad/index"
import FunctionKeypad from "./FunctionKeypad/index"
import { createPadButtons } from "./Pads.helper"
import { FocusContext } from "@/context/FocusContext"
import { styled } from "styled-components"

interface KeypadProps {
    uses: string;
    keypad: FocusStatus;
    inputRef: React.MutableRefObject<HTMLInputElement>;
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
}

const PadsContainer = styled.div`
    display: grid;

    grid-template-rows: [caution] .2fr [pads] 1fr;
    justify-content: center;
`

const Caution = styled.p`
    grid-area: caution;
`

const PadsLayout = styled.div`
    grid-area: pads;

    display: flex;
    flex-direction: column;
`

export default function Pads({ uses, keypad, triggerState, inputRef }: KeypadProps) {
    const padButtons = createPadButtons();
    const id = uses === "insert" ? "keypad__insert--keypad" : "keypad__confirm--keypad";
    const [insertedData, setInsertedData] = React.useState(0);

    return (
        <PadsContainer id={id}>
            <Caution>6자리로 입력해주세요</Caution>
            <PadsLayout >
                <NumKeypad
                    buttons={padButtons}
                    insertDataState={{ data: insertedData, setter: setInsertedData }}
                    triggerState={triggerState}
                    inputRef={inputRef} />
                <FunctionKeypad
                    uses={uses}
                    inputRef={inputRef}
                    set={keypad.setFocusStatus}
                    triggerState={triggerState} />
            </PadsLayout>
        </PadsContainer>
    )
}
