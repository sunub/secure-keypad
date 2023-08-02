import React from "react"
import styled from "styled-components";

export const InsertContext = React.createContext(null);

const InsertContainer = styled.div`
    display: flex;
`

export default function InsertContextProvider({ children }: { children: React.ReactNode }) {
    const [isFocus, setFocus] = React.useState<boolean>(false)

    const contextValue = React.useMemo(() => {
        function setFocusStatus(isFocus: boolean) {
            const insert = document.querySelector('div[aria-label="Open Insert Keypad"]') as HTMLElement;

            const property = "aria-label";
            const status = isFocus ? "Open Insert Keypad" : "Close Insert Keypad";

            insert.setAttribute(property, status);
            setFocus(!isFocus);
        }

        return { isFocus, setFocusStatus }
    }, [isFocus, setFocus])

    return (
        <InsertContext.Provider value={contextValue}>
            <InsertContainer aria-label="Close Insert Keypad">
                {children}
            </InsertContainer>
        </InsertContext.Provider>
    )
}
