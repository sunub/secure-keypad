import React, { useState } from "react";

export const KeypadContext = React.createContext(null);

type FocusType = {
    isFocus: boolean,
    curr: string
}

type StatusProvider = {
    status: FocusType
    setCurrentStatus: (isFocus: boolean, id: string) => void
}

export default function KeypadProvider({ children }: { children: React.ReactNode }) {
    const [status, setStatus] = useState<FocusType>({ isFocus: false, curr: null });


    const contextValue = React.useMemo(() => {
        function setCurrentStatus(isFocus: boolean, id: string): StatusProvider {
            setStatus((old) => {
                old.isFocus = !isFocus;
                old.curr = id
                return old
            });
            return
        }

        return { status, setCurrentStatus }
    }, [status, setStatus])

    return (
        <KeypadContext.Provider value={contextValue}>
            {children}
        </KeypadContext.Provider>
    )
}