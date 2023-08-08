import React from "react";
import { styled } from "styled-components";

export function ThrowError() {
    throw Error("에러 발생!");
}

const Button = styled.button`
    & > svg {
        cursor: none;
        pointer-events: none;
    }
`

export function App() {
    const [isClick, setClick] = React.useState(false);
    const [inputValue, setInputValue] = React.useState(0);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        // document.body.addEventListener("click", () => {
        //     document.querySelector("#insert-string").innerHTML = "Hell"
        // })
    }, [])

    return (<>
        <label htmlFor="비밀번호" >
            비밀번호
        </label>
        <input
            // value={inputValue}
            // onChange={e => {
            //     const curr = e.target as HTMLInputElement;
            //     setInputValue(Number(curr.value));
            // }}
            ref={inputRef}
            type="password"
            id="비밀번호"
            defaultValue={""}
            onClick={() => {
                const curr = document.querySelector("#insert-string") as HTMLElement
                curr.innerHTML = "비밀번호를 입력해주세요"
                setClick(true)
            }}
        />
        <span id="insert-string" />
        <Button
            id="insert"
            onMouseDown={() => {
                if (inputRef.current) {
                    const newValue = inputRef.current.value + "1";
                    inputRef.current.value = newValue;
                }
            }}
        >
            <svg
                data-testid="1"
                width="20" height="28" viewBox="0 0 20 28"><g>    <rect></rect>    <polygon fill-rule="nonzero" points="10.4541016 25 10.4541016 6.6601562 10.3955078 6.6601562 4.7998047 10.5566406 4.7998047 7.9052734 10.4248047 3.8623047 13.0029297 3.8623047 13.0029297 25"></polygon></g></svg>
        </Button >

    </>)
}

function OtherComponent() {
    const [isClick, setClick] = React.useState(false);

    return (<div>
        <label htmlFor="비밀번호 확인">
            비밀번호
        </label>
        <input
            onClick={() => {
                const curr = document.querySelector("#insert-string-confirm") as HTMLElement
                curr.innerHTML = "Open"
                setClick(true);
            }}
            aria-label="비밀번호 확인"
        />
        <span id="insert-string-confirm" />
        {
            isClick ? <button
                id="confirm-button"
                onClick={() => {
                    const curr = document.querySelector("#insert-string") as HTMLElement
                    curr.innerHTML = ""
                }}
            >
                확인
            </button>
                : null
        }
    </div>)
}
