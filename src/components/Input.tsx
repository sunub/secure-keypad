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
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
    contextValue: ContextValue
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
            onKeyDown={(e) => {
                if (e.code === "Backspace") {
                    const currValue = ref.current.value;
                    const currLength = props.contextValue.data.length;
                    const deletedValue = currValue.slice(0, currValue.length - 1);
                    ref.current.value = deletedValue;
                    currLength > 0
                        ? props.contextValue.setter.length(currLength - 1)
                        : null;
                }
            }}
            readOnly
            id={props.id}
            ref={ref}
            onFocus={() => {
                const currOpen = props.contextValue.data.focusing[uses];
                const otherOpen = props.contextValue.data.focusing[otherUses];

                if (!currOpen && !otherOpen) {
                    props.contextValue.setter.focusing(status => {
                        status[uses] = !currOpen;
                        props.triggerState.setTrigger(!props.triggerState.trigger)
                        return status
                    })
                } else if (!currOpen) {
                    props.contextValue.setter.focusing(status => {
                        status[uses] = !currOpen;
                        status[otherUses] = !otherOpen;
                        props.triggerState.setTrigger(!props.triggerState.trigger)
                        return status
                    })
                }

            }}
        />
    )
})