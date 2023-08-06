import { FocusContext } from "@/context/FocusContext";
import React from "react";

interface FunctionPadProps {
    uses: string;
    set: React.Dispatch<React.SetStateAction<InputStatus>>;
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
}

export default function FunctionKeypad({ uses, set, triggerState }: FunctionPadProps) {
    const keypad = React.useContext(FocusContext);

    return (
        <div>
            <button
                onClick={() => {
                    triggerState.setTrigger(!triggerState.trigger)
                    set(status => {
                        status[uses] = false;
                        return status
                    })
                }}
            >
                확인
            </button>
            <button>
                삭제
            </button>
        </div>
    )
}