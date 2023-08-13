import React, { useEffect } from "react"
import FunctionKeypad from "./FunctionKeypad/index"
import { styled } from "styled-components"
import ForTestCode from "./NumKeypad/ForTestCode"
import { createKeypad } from "@/pages/remotes"
import { http } from "@/utils/http"

interface KeypadProps {
    uses: string;
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

export default function PadLayout({ uses, triggerState, inputRef }: KeypadProps) {
    const [padButtons, setPadButtons] = React.useState<CreateKeypadResponse | any>(null);
    const [coords, setCoords] = React.useState<number[][]>([]);

    let uid: string;
    const id = uses === "insert" ? "keypad__insert--keypad" : "keypad__confirm--keypad";

    useEffect(() => {
        async function get() {
            const responseKeypad = await createKeypad();

            uid = responseKeypad['uid'];
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
                        ? (<>
                            <ForTestCode
                                keypad={padButtons.keypad}
                                triggerState={triggerState}
                                coords={{ data: coords, setter: setCoords }}
                                inputRef={inputRef} />
                            <FunctionKeypad
                                uid={padButtons.uid}
                                uses={uses}
                                inputRef={inputRef}
                                coords={{ data: coords, setter: setCoords }}
                                triggerState={triggerState} />
                        </>)
                        : null
                }

                {/* <NumKeypad
                    buttons={padButtons}
                    insertDataState={{ data: insertedData, setter: setInsertedData }}
                    triggerState={triggerState}
                    inputRef={inputRef} /> */}
            </PadsLayout>
        </PadsContainer>
    )
}
