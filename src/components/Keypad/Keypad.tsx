import React from "react"
import Input from "../Input"
import Pads from "../KeyLayout/index"
import { styled } from "styled-components"
import { FocusContext } from "@/context/FocusContext"
import Spacer from "../Spacer"


interface KeypadProps {
    uses: string;
    label: string;
    text: string;
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
}

export default function Keypad({ uses, label, text, triggerState }: KeypadProps) {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const keypad = React.useContext(FocusContext);
    const id = uses === "insert"
        ? "keypad__insert--input"
        : "keypad__confirm--input";

    return (
        <>
            <Input label={label} id={id} bottomText={keypad.focusStatus[uses] ? text : null}>
                <Input.TextField keypad={keypad} id={id} triggerState={triggerState} ref={inputRef} />
            </Input>
            <Spacer size={24} />
            {/* <Pads uses={uses} keypad={keypad} triggerState={triggerState} inputRef={inputRef} /> */}
            {keypad.focusStatus[uses]
                ? <Pads
                    uses={uses}
                    inputRef={inputRef}
                    keypad={keypad}
                    triggerState={triggerState} />
                : null}
        </>
    )
}
