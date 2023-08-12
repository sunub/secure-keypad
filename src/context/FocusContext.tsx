import React from "react";

type InputStatus = {
    insert: boolean,
    confirm: boolean,
}

export const FocusContext = React.createContext<ContextValue>(null)

export default function FocusProvider({ children }: { children: React.ReactNode }) {
    const [focusStatus, setFocusStatus] = React.useState<InputStatus>({ insert: false, confirm: false });
    const [dataLength, setDataLength] = React.useState(0);

    const contextValue = {
        data: {
            focusing: focusStatus,
            length: dataLength,
        },
        setter: {
            focusing: setFocusStatus,
            length: setDataLength,
        }
    }

    React.useEffect(() => {
        console.log(dataLength)
    }, [dataLength])

    return (
        <FocusContext.Provider value={contextValue}>
            {children}
        </FocusContext.Provider>
    )
}