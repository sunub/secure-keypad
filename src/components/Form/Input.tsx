import React, { HTMLAttributes, InputHTMLAttributes, MutableRefObject, ReactNode, RefObject, forwardRef } from "react"
import styled from "styled-components"

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

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    label?: ReactNode;
    children: React.ReactNode;
    bottomText?: string;
}

export default function Input({ label, children }: InputProps) {
    return (
        <Container>
            <Label>
                {label}
            </Label>
            {children}
        </Container>
    )
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    error?: boolean
}

Input.TextField = forwardRef(
    ({ error, ...props }: TextFieldProps,
        ref: MutableRefObject<HTMLInputElement>) => {
        return (
            <InputPadNumber
                ref={ref}
                {...props}
                onFocus={(e) => {
                    
                }}
            />
        )
    })