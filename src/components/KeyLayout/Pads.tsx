import React from "react"
import NumKeypad from "./NumKeypad/index"
import FunctionKeypad from "./FunctionKeypad/index"
import { createPadButtons } from "./Pads.helper"
import { FocusContext } from "@/context/FocusContext"

interface KeypadProps {
    uses: string;
    keypad: FocusStatus;
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
}

export default function Pads({ uses, keypad, triggerState }: KeypadProps) {
    const padButtons = createPadButtons();
    const id = uses === "insert" ? "keypad__insert--keypad" : "keypad__confirm--keypad"

    return (
        <div id={id}>
            <p>6자리로 입력해주세요</p>
            <NumKeypad buttons={padButtons} />
            <FunctionKeypad uses={uses} set={keypad.setFocusStatus} triggerState={triggerState} />
        </div>
    )
}
