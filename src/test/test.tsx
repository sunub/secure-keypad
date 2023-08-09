import React from "react";
import { styled } from "styled-components";
import { SVG_HTMLS } from "@/constants/svg";

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
    const [inputValue, setInputValue] = React.useState("");
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (inputRef.current) {
            const curr = inputRef.current.value + "1"
            inputRef.current.value = curr;
        }
    };

    return (
        <form>
            <label htmlFor="password-input" >
                비밀번호
            </label>
            <input
                ref={inputRef}
                type="password"
                id="password-input"
                name="password-input"
                value={inputValue}
                onChange={(({ target: { value } }) => setInputValue(value))}
            />
            {
                SVG_HTMLS.map((svg, i) => {
                    return (
                        <button
                            className="insert"
                            onClick={(e) => { handleClick(e) }}
                            dangerouslySetInnerHTML={{ __html: svg }} />
                    )
                })
            }
        </form>)
}
// function OtherComponent() {
//     const [isClick, setClick] = React.useState(false);

//     return (<div>
//         <label htmlFor="비밀번호 확인">
//             비밀번호
//         </label>
//         <input
//             onClick={() => {
//                 const curr = document.querySelector("#insert-string-confirm") as HTMLElement
//                 curr.innerHTML = "Open"
//                 setClick(true);
//             }}
//             aria-label="비밀번호 확인"
//         />
//         <span id="insert-string-confirm" />
//         {
//             isClick ? <button
//                 id="confirm-button"
//                 onClick={() => {
//                     const curr = document.querySelector("#insert-string") as HTMLElement
//                     curr.innerHTML = ""
//                 }}
//             >
//                 확인
//             </button>
//                 : null
//         }
//     </div>)
// }
