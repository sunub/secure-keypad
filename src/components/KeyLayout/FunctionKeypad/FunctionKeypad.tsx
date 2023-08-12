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
                    if (keypad.data.length < 6) {
                        inputRef.current.value = "";
                    }
                    keypad.setter.length(0);

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
            <button>
                <span
                    onClick={() => {
                        if (inputRef.current) {
                            let curr = inputRef.current.value;
                            curr = curr.slice(0, curr.length - 1);
                            inputRef.current.value = curr;
                        }
                    }}
                    className="material-symbols-outlined">
                    backspace
                </span>
            </button>
        </div>
    )
}