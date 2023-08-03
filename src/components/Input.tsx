import React, { HTMLAttributes, InputHTMLAttributes, MutableRefObject, ReactNode, Children, forwardRef, cloneElement } from "react"
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

const BottomText = styled.span`
    display: none;
`

interface InputProps extends HTMLAttributes<HTMLDivElement> {
    name: string;
    label?: ReactNode;
    children: React.ReactElement;
    bottomText?: string;
}

export default function Input({ name, label, children, bottomText }: InputProps) {
    const child = Children.only(children);

    return (
        <Container>
            <Label htmlFor={`${name}-input`}>
                비밀번호
            </Label>
            {cloneElement(child, { name, ...child.props })}
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
}

Input.TextField = forwardRef(
    ({ error, ...props }: TextFieldProps,
        ref: MutableRefObject<HTMLInputElement>) => {
        const { isFocus, setFocusStatus } = React.useContext(KeypadContext);
        const [status, setStauts] = React.useState("Close");
        const id = `${props.id}-input`;

        React.useEffect(() => {
            const statusContainer = document.querySelector(`#${props.id}`) as HTMLElement
            const currStatus = statusContainer.getAttribute("aria-label");

            const value = currStatus === "Close Keypad" ? "Close" : "Open"
            setStauts(value)
        }, [isFocus])

        return (<>
            <InputPadNumber
                id={id}
                ref={ref}
                onFocus={() => {
                    const btm = document.querySelector(".bottom-text") as HTMLElement;
                    btm.style.display = "block";
                    setFocusStatus(isFocus, props.id);
                }}
                defaultValue={status === "Close" ? null : "******"}
                aria-label="비밀번호"
                readOnly
            />
            {status === "Close" ? null : <p>6자리로 입력해주세요</p>}
        </>)
    })