import React, { useEffect, useState } from "react";
import Input from "./Input";
import styled from "styled-components";
import { KeypadContext } from "../Context/KeypadProvider";
import KeyPad from "../Keypad/Keypad";

type SecureKeypadProps = {
    uses: string;
    inputRef: React.MutableRefObject<HTMLInputElement>;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const KeypadLayout = styled.div<{ $hidden?: boolean }>`
    display: ${props => props.$hidden ? "flex" : "none"};
`

export default function Password({ uses, inputRef, setStatus }: SecureKeypadProps) {
    const [keypadOpen, setKeypadOpen] = useState(false);
    const { status, setCurrentStatus } = React.useContext(KeypadContext);

    const props = {
        insert: {
            label: "비밀번호",
            id: "secure-keypad__insert--input"
        },
        confirm: {
            label: "비밀번호 확인",
            id: "secure-keypad__confirm--input"
        }
    }

    return (<>
        <Input id={props[uses].id} label={props[uses].label}  >
            <Input.TextField id={props[uses].id} ref={inputRef} setStatus={setStatus} />
        </Input>
    </>)
}