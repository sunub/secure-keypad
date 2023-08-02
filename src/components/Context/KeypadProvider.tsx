import React, { useState } from "react";

export const KeypadContext = React.createContext(null);

export default function KeypadProvider({ children }: { children: React.ReactNode }) {
    const [isFocus, setFocus] = useState(false);

    const contextValue = React.useMemo(() => {
        function setFocusStatus(isFocus: boolean, id: string) {
            const statusContainer = document.querySelector(`.${id}`) as HTMLElement;
            const keypad = document.querySelector(`#${id}-keypad[aria-hidden]`)

            const properties = ["aria-label", "aria-hidden"];
            const status = isFocus ? "Close Keypad" : "Open Keypad";
            const value = isFocus ? "true" : "false";

            statusContainer.setAttribute(properties[0], status);
            keypad.setAttribute(properties[1], value)
            setFocus(!isFocus)
        }

        return { isFocus, setFocusStatus }
    }, [isFocus, setFocus])

    return (
        <KeypadContext.Provider value={contextValue}>
            {children}
        </KeypadContext.Provider>
    )
}