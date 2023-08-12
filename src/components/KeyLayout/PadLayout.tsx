import React, { useEffect } from "react"
import FunctionKeypad from "./FunctionKeypad/index"
import { styled } from "styled-components"
import ForTestCode from "./NumKeypad/ForTestCode"
import { http } from "@/utils/http"

interface KeypadProps {
    uses: string;
    keypad?: ContextValue;
    inputRef: React.MutableRefObject<HTMLInputElement>;
    contextValue: ContextValue,
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

export default function PadLayout({ uses, keypad, triggerState, inputRef, contextValue }: KeypadProps) {
    const id = uses === "insert" ? "keypad__insert--keypad" : "keypad__confirm--keypad";
    const [padButtons, setPadButtons] = React.useState<CreateKeypadResponse | any>(null);

    useEffect(() => {
        async function get() {
            const responseKeypad = await http.post("/api/keypad");

            setPadButtons(responseKeypad);
        }
        get()
    }, [triggerState.trigger])

    return (
        <PadsContainer
            id={id}>
            <Caution>6자리로 입력해주세요</Caution>
            <PadsLayout >
                {
                    padButtons
                        ? <ForTestCode
                            buttons={padButtons.keypad}
                            triggerState={triggerState}
                            contextValue={contextValue}
                            inputRef={inputRef} />
                        : null
                }

                {/* <NumKeypad
                    buttons={padButtons}
                    insertDataState={{ data: insertedData, setter: setInsertedData }}
                    triggerState={triggerState}
                    inputRef={inputRef} /> */}
                <FunctionKeypad
                    uses={uses}
                    inputRef={inputRef}
                    set={keypad.setter.focusing}
                    triggerState={triggerState} />
            </PadsLayout>
        </PadsContainer>
    )
}
