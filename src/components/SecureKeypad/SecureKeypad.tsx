import React from "react";
import { createPortal } from "react-dom";
import { trackingFocusingInput } from "./SecureKeypad.helper";
import { KeypadContext } from "../Context/KeypadProvider";
import Password from "../Password/Password";
import Keypad from "../Keypad/Keypad";

function SecureKeypad() {
    const [insertKeypad, setInsertKepad] = React.useState(false);
    const [confirmKeypad, setConfirmKeypad] = React.useState(false);
    const [isFocus, setFocus] = React.useState(false);

    const { status, setCurrentStatus } = React.useContext(KeypadContext);
    const [insertInputRef, confirmInputRef] = [React.useRef<HTMLInputElement>(null), React.useRef<HTMLInputElement>(null)];

    function trackingFocusingOut(e: Event) {
        const currTarget = e.target as HTMLElement
        if (isFocus) {
            const inputRef = status.curr && status.curr.includes("insert") ? confirmInputRef : insertInputRef;

            if (currTarget.id !== status.curr && inputRef.current) {
                inputRef.current.removeAttribute("disabled");
                setCurrentStatus(isFocus, null);
                setFocus(!isFocus);

                setInsertKepad(false)
                setConfirmKeypad(false)
            }
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", trackingFocusingOut)

        return (() => {
            document.removeEventListener("click", trackingFocusingOut)
        })
    }, [isFocus])

    React.useEffect(() => {
        if (status.curr) {
            if (status.curr.includes("insert")) {
                setInsertKepad(true)
            } else {
                setConfirmKeypad(true)
            }
            trackingFocusingInput(insertInputRef.current, confirmInputRef.current, status.curr);
        }
    }, [isFocus])

    return (<>
        <Password
            uses="insert"
            setStatus={setFocus}
            inputRef={insertInputRef}
        />
        {
            insertKeypad ?
                createPortal(
                    <Keypad
                        uses="insert"
                        inputRef={insertInputRef}
                        setStatus={setFocus}
                    />, document.body
                ) : null
        }

        <Password
            uses="confirm"
            setStatus={setFocus}
            inputRef={confirmInputRef}
        />
        {
            confirmKeypad ?
                createPortal(
                    <Keypad
                        uses="confirm"
                        inputRef={confirmInputRef}
                        setStatus={setFocus}
                    />,
                    document.body
                ) : null
        }
    </>)
}

export default React.memo(SecureKeypad)