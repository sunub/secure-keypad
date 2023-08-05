import React from "react";

export function ThrowError() {
    throw Error("에러 발생!");
}

export function App() {
    const [isClick, setClick] = React.useState(false);

    React.useEffect(() => {
        // document.body.addEventListener("click", () => {
        //     document.querySelector("#insert-string").innerHTML = "Hell"
        // })
    }, [])

    return (<>
        <label htmlFor="비밀번호">
            비밀번호
        </label>
        <input
            onClick={() => {
                const curr = document.querySelector("#insert-string") as HTMLElement
                curr.innerHTML = "비밀번호를 입력해주세요"
                setClick(true)
            }}
            aria-label="비밀번호"
        />
        <span id="insert-string" />
        {
            isClick ? <button
                id="insert-button"
                onClick={() => {
                    const curr = document.querySelector("#insert-string") as HTMLElement
                    curr.innerHTML = ""
                }}
            >
                확인
            </button>
                : null
        }
        <OtherComponent />
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
