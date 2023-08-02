import React from "react";
import styled from "styled-components";

const Container = styled.div`
    grid-area: fn-keypad;

    display: flex;
    flex-direction: column;
`
type FnKeypad = {
    shuffle: any;
    blank: any;
};

export default function FunctionKeypad(
    { fnKeypadButton }: { fnKeypadButton: FnKeypad }) {
    return (
        <Container>
            <button>
                확인
            </button>
            <button>
                삭제
            </button>
        </Container>
    )
}