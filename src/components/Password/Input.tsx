import React, { HTMLAttributes, InputHTMLAttributes, MutableRefObject, ReactNode, Children, forwardRef, cloneElement, useState } from "react"
import styled from "styled-components"
import { KeypadContext } from "../Context/KeypadProvider"
import { createPortal } from "react-dom"

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
    const child = Children.only(children);

    return (
        <Container aria-label="Close Keypad">
            <Label htmlFor={id}>
                {label}
            </Label>
            {cloneElement(child, { id, ...child.props })}
            {bottomText !== null ? (
                <BottomText className="bottom-text">
                    {bottomText}
                </BottomText>
            ) : null}
        </Container>
    )
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    error?: boolean
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
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
                }}
                readOnly
            />
            {status === "Close" ? null : <p>6자리로 입력해주세요</p>}
        </>)
    })