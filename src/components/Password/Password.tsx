import React, { useState } from "react";
import Input from "./Input";
import { styled } from "styled-components";

type SecureKeypadProps = {
    uses: string,
    inputRef: React.MutableRefObject<HTMLInputElement>
    setStatus: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Password({ uses, inputRef, setStatus }: SecureKeypadProps) {
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

    return (
        <Input id={props[uses].id} label={props[uses].label}>
            <Input.TextField id={props[uses].id} ref={inputRef} setStatus={setStatus} />
        </Input>
    )
}