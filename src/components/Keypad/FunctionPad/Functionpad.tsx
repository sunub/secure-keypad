import React from "react";
import styled from "styled-components";
import { KeypadContext } from "../../Context/KeypadProvider";
import { handleError } from "./Functionpad.helper";

const Container = styled.div`
    grid-area: fn-keypad;

    display: flex;
    flex-direction: column;
`
type FunctionpadProps = {
    className: string;
    dataLength: number;
    inputRef: React.RefObject<HTMLInputElement>
    setStatus?: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Functionpad({ className, dataLength, inputRef, setStatus }: FunctionpadProps) {
    const { isFocus, setFocusStatus } = React.useContext(KeypadContext);

    return (
        <Container>
            <button
                className={`send-button`}
                onClick={() => {
                    setStatus(isFocus)
                }}
            >
                확인
            </button>
            <button
                className={`delete-button`}
            >
                삭제
            </button>
        </Container>
    )
}