import { FocusContext } from "@/context/FocusContext";
import React from "react";

interface FunctionPadProps {
    uses: string;
    set: React.Dispatch<React.SetStateAction<InputStatus>>;
    inputRef: React.MutableRefObject<HTMLInputElement>;
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    };
}

export default function FunctionKeypad({ uses, set, inputRef, triggerState }: FunctionPadProps) {
    const keypad = React.useContext(FocusContext);

    return (
        <div>
            <button
                onClick={() => {
                    const currDataLength = inputRef.current.value.length;

                    if (currDataLength < 6) {
                        inputRef.current.value = "";
                    }

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