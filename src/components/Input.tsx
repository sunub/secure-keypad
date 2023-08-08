import { FocusContext } from "@/context/FocusContext";
import React, { HTMLAttributes, useState } from "react";
import { styled } from "styled-components";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    id: string;
    label: string;
    children: React.ReactElement;
    bottomText: string;
}

const Label = styled.label`
    
`

export default function Input({ id, label, children, bottomText }: LabelProps) {
    const Child = React.cloneElement(children);

    return (<>
        <Label htmlFor={id}>
            {label}
        </Label>
        {Child}
        {bottomText !== null
            ? <p>{bottomText}</p>
            : null}
    </>)
}

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    error?: boolean;
    keypad?: FocusStatus;
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
}

const PasswordInput = styled.input`
    font-size: 1.5rem;

    padding: 1rem;
`

Input.TextField = React.forwardRef(function (props: InputProps, ref: React.MutableRefObject<HTMLInputElement>) {
    const uses = props.id.includes("insert") ? "insert" : "confirm";
    const otherUses = uses === "insert" ? "confirm" : "insert";

    return (
        <PasswordInput
            readOnly
            id={props.id}
            ref={ref}
            defaultValue={":"}
            onFocus={() => {
                const currOpen = props.keypad.focusStatus[uses];
                const otherOpen = props.keypad.focusStatus[otherUses];
                if (!currOpen && !otherOpen) {
                    props.keypad.setFocusStatus(status => {
                        status[uses] = !currOpen;
                        return status
                    })
                } else {
                    props.keypad.setFocusStatus(status => {
                        status[uses] = !currOpen;
                        status[otherUses] = !otherOpen;
                        return status
                    })
                }

                props.triggerState.setTrigger(!props.triggerState.trigger)
            }}
        />
    )
})