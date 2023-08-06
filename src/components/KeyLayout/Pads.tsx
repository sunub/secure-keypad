import React from "react"
import NumKeypad from "./NumKeypad/index"
import FunctionKeypad from "./FunctionKeypad/index"
import { createPadButtons } from "./Pads.helper"

type Setters = {
    focus: React.Dispatch<React.SetStateAction<boolean>>
}

interface KeypadProps {
    setters: Setters
}

export default function Pads({ setters }: KeypadProps) {
    const padButtons = createPadButtons();

    return (

        <div>
            <NumKeypad buttons={padButtons} />
            <FunctionKeypad set={setters.focus} />
        </div>
    )
}
