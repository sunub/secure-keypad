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
};

export default function Functionpad({ className, dataLength }: FunctionpadProps) {
    const { isFocus, setFocusStatus } = React.useContext(KeypadContext);

    return (
        <Container>
            <button
                onClick={() => {
                    const btm = document.querySelector(".bottom-text") as HTMLElement;
                    btm.innerHTML = "";
                    btm.style.display = "none";
                    handleError(dataLength);
                    setFocusStatus(isFocus, className)
                }}
            >
                확인
            </button>
            <button>
                삭제
            </button>
        </Container>
    )
}