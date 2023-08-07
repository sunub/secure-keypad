import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

type FunctionPad = {
    shuffle: string[],
    blank: string[],
}

interface NumKeypadProps {
    buttons: {
        numpad: string[][],
        functionpad: FunctionPad,
    };
    inputRef: React.MutableRefObject<HTMLInputElement>;
    insertDataState: {
        data: number,
        setter: React.Dispatch<React.SetStateAction<number>>,
    }
}

const NumpadLayout = styled.div`
    display: flex;

    flex-direction: column;
    gap: 1rem;
`
const PadLayout = styled.div`
    display: flex;

    flex-direction: row;
    gap: 1rem;
`

const NumpadButtons = styled.button`
    display: block;
    position: relative;
    width: 100%;
    height: 45px;
    cursor: pointer;

    & > svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        width: 20px;
        height: 25px;

        cursor: none;
        pointer-events: none;
    }
`

export default function NumKeypad({ buttons, insertDataState, inputRef }: NumKeypadProps) {
    const [padPosition, setPadPosition] = useState<any[]>(Array.from({ length: 12 }, () => 0));

    // useEffect(() => {
    //     document.querySelectorAll("div.pads-num-buttons button").forEach(button => {
    //         const svg: any = button.childNodes[0];

    //         let index = svg.attributes[3].nodeValue;
    //         switch (index) {
    //             case ("shuffle"):
    //                 index = 10
    //                 break;

    //             case ("blank"):
    //                 index = 11
    //                 break;
    //             default:
    //                 index = Number(index)
    //                 break;
    //         }
    //         padPosition[index] = button.getClientRects()[0];
    //         setPadPosition([...padPosition])
    //     })
    // }, [insertDataState.data])

    return (
        <NumpadLayout className="pads-num-buttons">
            {
                buttons.numpad.map(col => {
                    return (
                        <PadLayout key={Math.random()}>
                            {
                                col.map(svg => {
                                    return (
                                        <NumpadButtons
                                            // onClick={(e) => {
                                            //     const currTarget = e.target as HTMLElement;

                                            //     const DOMRect = currTarget.getClientRects()[0];

                                            //     const currX = DOMRect.x;
                                            //     const currY = DOMRect.y;

                                            //     padPosition.map((pad, value) => {
                                            //         const padX = pad.x;
                                            //         const padY = pad.y;

                                            //         if (padX === currX && padY === currY) {
                                            //             inputRef.current.value += `${value}`;
                                            //         }
                                            //         console.log(inputRef.current.value);
                                            //     })

                                            //     insertDataState.setter(insertDataState.data += 1);
                                            // }}
                                            key={Math.random()}
                                        >
                                        </NumpadButtons>
                                    )
                                })
                            }
                        </PadLayout>
                    )
                })
            }
        </NumpadLayout>
    )
}