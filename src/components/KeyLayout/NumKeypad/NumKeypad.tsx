import React from "react";

type FunctionPad = {
    shuffle: string[],
    blank: string[],
}

interface NumKeypadProps {
    buttons: {
        numpad: string[][],
        functionpad: FunctionPad,
    }
}

export default function NumKeypad({ buttons }: NumKeypadProps) {

    return (
        <div>
            {
                buttons.numpad.map(col => {
                    return (
                        <div key={Math.random()}>
                            {
                                col.map(svg => {
                                    return (
                                        <button
                                            key={Math.random()}
                                            dangerouslySetInnerHTML={{ __html: svg }}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}