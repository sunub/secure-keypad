import React, { HTMLAttributes, InputHTMLAttributes, MutableRefObject, ReactNode, RefObject, forwardRef } from "react"
import styled from "styled-components"
import { KeypadContext } from "./Context/KeypadProvider"

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
    className: string;
    label?: ReactNode;
    children: React.ReactNode;
    bottomText?: string;
}

export default function Input({ className, label, children }: InputProps) {
    return (
        <Container className={className} aria-label={`Close Keypad`}>
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
        const { isFocus, setFocusStatus } = React.useContext(KeypadContext);
        const [status, setStauts] = React.useState("Close");

        React.useEffect(() => {
            const statusContainer = document.querySelector(`.${props.id}`) as HTMLElement
            const currStatus = statusContainer.getAttribute("aria-label");

            const value = currStatus === "Close Keypad" ? "Close" : "Open"
            setStauts(value)
        }, [isFocus])

        return (
            <InputPadNumber
                id={props.id}
                ref={ref}
                {...props}
                onFocus={(e) => {
                    const id = e.currentTarget.getAttribute("id")
                    setFocusStatus(isFocus, id)
                }}
                defaultValue={status === "Close" ? null : "HI"}
            />
        )
    })