import React, { HTMLAttributes } from "react";
import { styled } from "styled-components";

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    label: string;
    children: React.ReactElement
}

const Label = styled.label`
    
`

export default function Input({ label, children }: LabelProps) {
    const Child = React.cloneElement(children);

    return (<>
        <Label>
            {label}
        </Label>
        {Child}
    </>)
}

type Setters = {
    focus: React.Dispatch<React.SetStateAction<boolean>>
}

interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, "size"> {
    error?: boolean
    setters: Setters
}

const PasswordInput = styled.input`
    font-size: 1.5rem;

    padding: 1rem;
`

Input.TextField = React.forwardRef(function (props: InputProps, ref: React.MutableRefObject<HTMLInputElement>) {
    return (
        <PasswordInput
            ref={ref}
            onFocus={() => props.setters.focus(true)}
            {...props}
        />
    )
})