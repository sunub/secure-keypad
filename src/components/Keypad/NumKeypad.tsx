import React from "react"
import { v4 as uuidv4 } from "uuid"
import { styled } from "styled-components"

const NumPadButtons = styled.div`
    grid-area: num-keypad;

    display: flex;
    flex-direction: column;
`

function NumKeypad({ numpadButton }: { numpadButton: string[][] }) {
    return (
        <NumPadButtons>
            {
                numpadButton.map(column => {
                    return (
                        <div key={uuidv4()}>
                            {
                                column.map(svg => {
                                    return (
                                        <button
                                            key={`${uuidv4()}`}
                                            dangerouslySetInnerHTML={{ __html: svg }} />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </NumPadButtons>
    )
}

export default React.memo(NumKeypad);