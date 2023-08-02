import React, { createContext, MutableRefObject, useMemo } from "react"
import styled from "styled-components"
import KeyPad from "../Keypad/KeyPad"

const Form = styled.form`
`

export const FormContext = createContext(null)

interface FormProps {
    inputRef: MutableRefObject<HTMLInputElement>,
    children: React.ReactNode
}

export default function FormProvider({ inputRef, children }: { inputRef: MutableRefObject<HTMLInputElement> | null, children: React.ReactNode }) {
    const [isFocus, setFoucs] = React.useState<boolean>(false)

    const contextValue = useMemo(() => {
        function setKeypadStatus(isFocus: boolean, id: string) {
            const form = document.getElementById("secure-keypad__form") as HTMLElement
            const isOpen = form.getAttribute("aria-label")

            if (isFocus) {
                const status = id === "secure-keypad__insert-keypad" ? "Open Insert Keypad" : "Open Confirm Keypad"
                setFoucs(isFocus)
                form.setAttribute("aria-label", status)
            } else {
                const status = id === "secure-keypad__insert-keypad" ? "Close Insert Keypad" : "Close Confirm Keypad";
                setFoucs(isFocus)
                form.setAttribute("aria-label", status)
            }
        }

        return { isFocus, setKeypadStatus }
    }, [isFocus, setFoucs])

    return (
        <FormContext.Provider value={contextValue}>
            <div id="secure-keypad__form" aria-label="Close Keypad" >
                {children}
            </div>
        </FormContext.Provider>
    )
}