import React from "react";

type InputStatus = {
    insert: boolean,
    confirm: boolean,
}

type ContextValue = {
    focusStatus: InputStatus,
    setFocusStatus: React.Dispatch<React.SetStateAction<InputStatus>>,
}

export const FocusContext = React.createContext<ContextValue>(null)

export default function FocusProvider({ children }: { children: React.ReactNode }) {
    const [focusStatus, setFocusStatus] = React.useState<InputStatus>({ insert: false, confirm: false });

    return (
        <FocusContext.Provider value={{ focusStatus, setFocusStatus }}>
            {children}
        </FocusContext.Provider>
    )
}