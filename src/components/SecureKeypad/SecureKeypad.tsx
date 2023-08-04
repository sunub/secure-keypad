import React from "react";
import { trackingFocusingInput } from "./SecureKeypad.helper";
import { KeypadContext } from "../Context/KeypadProvider";
import Password from "../Password/Password";

function SecureKeypad() {
    const [isFocus, setFocus] = React.useState(false);
    const { status, setCurrentStatus } = React.useContext(KeypadContext);
    const insertRef = React.useRef<HTMLInputElement>(null);
    const confirmRef = React.useRef<HTMLInputElement>(null);

    // const checkFocus = React.useCallback(() => {
    //     if (isFocus) {
    //         const notFocusId = status.curr.includes("insert") ? "secure-keypad__confirm--input" : "secure-keypad__insert--input";
    //         const notFocusTarget = document.getElementById(notFocusId);

    //         notFocusTarget.removeAttribute("disabled");
    //     }
    // }, [isFocus, status.curr]);

    // React.useEffect(() => {
    //     document.body.addEventListener("click", checkFocus);
    //     return () => {
    //         document.body.removeEventListener("click", checkFocus)
    //     }
    // }, [checkFocus])

    React.useEffect(() => {
        trackingFocusingInput(insertRef.current, confirmRef.current, isFocus, status.curr)
    }, [isFocus])

    return (<>
        <Password uses="insert" setStatus={setFocus} inputRef={insertRef} />
        <Password uses="confirm" setStatus={setFocus} inputRef={confirmRef} />
    </>)
}

export default React.memo(SecureKeypad)