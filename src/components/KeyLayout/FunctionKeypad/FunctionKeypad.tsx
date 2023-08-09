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
    insertDataState: {
        data: number,
        setter: React.Dispatch<React.SetStateAction<number>>,
    }
}

export default function FunctionKeypad({ uses, set, inputRef, triggerState, insertDataState }: FunctionPadProps) {
    const keypad = React.useContext(FocusContext);

    React.useEffect(() => {
        console.log(insertDataState.data);
    }, [insertDataState.data])

    return (
        <div>
            <button
                onClick={() => {
                    if (insertDataState.data <= 6) {
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