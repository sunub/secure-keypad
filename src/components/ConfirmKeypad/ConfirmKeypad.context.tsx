import React from "react"

export const ConfirmContext = React.createContext(null);


export default function ConfirmContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <ConfirmContext.Provider value={""}>
            {children}
        </ConfirmContext.Provider>
    )
}
