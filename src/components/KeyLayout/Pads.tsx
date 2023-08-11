import React, { useEffect } from "react"
import NumKeypad from "./NumKeypad/index"
import FunctionKeypad from "./FunctionKeypad/index"
import { styled } from "styled-components"
import { getCreatedKeypad } from "./Pads.helper"
import ForTestCode from "./NumKeypad/ForTestCode"
import useHasMouted from "@/hooks/use-mouted"
import { createKeypad } from "@/pages/remotes"
import axios from "axios"

interface KeypadProps {
    uses: string;
    keypad?: FocusStatus;
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
    const isPending = useHasMouted();
    const id = uses === "insert" ? "keypad__insert--keypad" : "keypad__confirm--keypad";
    const [insertedData, setInsertedData] = React.useState(0);
    const [padButtons, setPadButtons] = React.useState(null);
    const host = "http://localhost:3001/";

    useEffect(() => {
        async function fetchData() {
            const a = (await axios.post("/api/keypad")).data
            setPadButtons(a)
        }
        fetchData();
    }, [triggerState.trigger])

    return (
        <PadsContainer
            id={id}>
            <Caution>6자리로 입력해주세요</Caution>
            <PadsLayout >
                {
                    padButtons
                        ? <ForTestCode
                            buttons={padButtons}
                            insertDataState={{ data: insertedData, setter: setInsertedData }}
                            triggerState={triggerState}
                            inputRef={inputRef} />
                        : null
                }

                {/* <NumKeypad
                    buttons={padButtons}
                    insertDataState={{ data: insertedData, setter: setInsertedData }}
                    triggerState={triggerState}
                    inputRef={inputRef} /> */}
                {/* <FunctionKeypad
                    uses={uses}
                    inputRef={inputRef}
                    set={keypad.setFocusStatus}
                    insertDataState={{ data: insertedData, setter: setInsertedData }}
                    triggerState={triggerState} /> */}
            </PadsLayout>
        </PadsContainer>
    )
}
