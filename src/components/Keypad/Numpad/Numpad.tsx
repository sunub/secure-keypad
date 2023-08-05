import React from "react"
import { v4 as uuidv4 } from "uuid"
import { styled } from "styled-components"
import { sendInputValue } from "./Numpad.helper"

const NumPadButtons = styled.div`
    grid-area: num-keypad;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 16px;
`

const Column = styled.div`
    display: flex;
    gap: 1rem;
`

type NumpadProps = {
    numpadButton: string[][],
    className: string,
    inputRef: React.RefObject<HTMLInputElement>,
    update?: React.Dispatch<React.SetStateAction<number>>
    updateData?: React.Dispatch<React.SetStateAction<string>>
}

function Numpad({ numpadButton, className, inputRef, update }: NumpadProps) {
    const [clickCount, setClickCount] = React.useState(1);

    return (
        <NumPadButtons>
            {
                numpadButton.map(column => {
                    return (
                        <Column key={uuidv4()}>
                            {
                                column.map(svg => {
                                    return (
                                        <button
                                            key={uuidv4()}
                                            dangerouslySetInnerHTML={{ __html: svg }}
                                            onClick={(e) => {
                                                console.log(e.currentTarget);
                                                update(clickCount)
                                                setClickCount(clickCount + 1)
                                            }}
                                        />
                                    )
                                })
                            }
                        </Column>
                    )
                })
            }
        </NumPadButtons>
    )
}

export default React.memo(Numpad);