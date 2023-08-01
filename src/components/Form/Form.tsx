import React, { createContext, MutableRefObject, useMemo } from "react"
import styled from "styled-components"

const StyledFrom = styled.form`
`

export const FormContext = createContext(false)

interface FormProps {
    inputRef: MutableRefObject<HTMLInputElement>,
    children: React.ReactNode
}

export default function FormProvider({ inputRef, children }: { inputRef: MutableRefObject<HTMLInputElement> | null, children: React.ReactNode }) {
    const [isFocus, setFoucs] = React.useState<boolean>(false)

    const contextValue = useMemo(() => {
        
    }, [isFocus, setFoucs])
    
    return (
        <StyledFrom>
            {children}
        </StyledFrom>
    )
}