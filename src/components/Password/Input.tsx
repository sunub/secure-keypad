import React, { HTMLAttributes, InputHTMLAttributes, MutableRefObject, ReactNode, Children, forwardRef, cloneElement, useState } from "react"
import styled from "styled-components"
import { KeypadContext } from "../Context/KeypadProvider"

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Label = styled.label`
    font-size: 1.5rem;
`

const InputPadNumber = styled.input`
    font-size: 2rem;
`

const BottomText = styled.span`
    display: inline-block;
`

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    id: string;
    label?: ReactNode;
    children: React.ReactElement;
    bottomText?: string;
}

export default function Input({ id, label, children, bottomText }: InputProps) {
    const { status, setCurrentStatus } = React.useContext(KeypadContext);
    const child = Children.only(children);

    return (
        <>
            <Label htmlFor={id} >
                {label}
            </Label>
            {cloneElement(child, { id, ...child.props })}
            {/* {bottomText !== null ? (
                <BottomText>
                    {bottomText}
                </BottomText>
            ) : null} */}
        </>
    )
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    error?: boolean,
    setStatus: React.Dispatch<React.SetStateAction<boolean>>,
}

Input.TextField = forwardRef(
    ({ error, setStatus, ...props }: TextFieldProps,
        ref: MutableRefObject<HTMLInputElement>) => {
        const { status, setCurrentStatus } = React.useContext(KeypadContext);

        return (<>
            <InputPadNumber
                id={props.id}
                ref={ref}
                onFocus={() => {
                    setCurrentStatus(status.isFocus, props.id);
                    setStatus(status.isFocus);
                    // const currLabel = document.querySelector(`label[for=${props.id}]`)
                    // currLabel.setAttribute("aria-label", "Open Keypad");
                }}
                readOnly
            />
        </>)
    })