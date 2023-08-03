import React from "react";

export function ThrowError() {
    throw Error("에러 발생!");
}

export function App() {
    return (<>
        <label htmlFor="비밀번호">
            비밀번호
        </label>
        <input
            onClick={(e) => {
                const curr = document.querySelector("#insert-string") as HTMLElement
                curr.innerHTML = "Open"
            }}
            aria-label="비밀번호"
        />
        <span data-testid="insert-string" id="insert-string" />
        <button
            onClick={() => {
                const curr = document.querySelector("#insert-string") as HTMLElement
                curr.innerHTML = ""
            }}
        >
            확인
        </button>
    </>)
}
