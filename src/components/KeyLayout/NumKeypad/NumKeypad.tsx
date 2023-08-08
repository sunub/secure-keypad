import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { SVG_HTMLS } from "@/constants/svg";

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
    triggerState: {
        trigger: boolean,
        setTrigger: React.Dispatch<React.SetStateAction<boolean>>,
    }
    insertDataState: {
        data: number,
        setter: React.Dispatch<React.SetStateAction<number>>,
    }
}

const NumpadLayout = styled.table`
    border-collapse: collapse;
    width: 100%;
    max-width: 390px;
    margin: 0 auto;
    table-layout: fixed;
    position: relative;
`
const PadLayout = styled.tr`
`

const ButtonContainer = styled.td`
    position: relative;
    margin: 0;
    padding: 0;
`

const Buttons = styled.button`
    display: block;
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

export default function NumKeypad({ buttons, insertDataState, inputRef, triggerState }: NumKeypadProps) {
    const [padPosition, setPadPosition] = React.useState<any[]>(Array.from({ length: 12 }, () => 0))
    const [padNumber, setPadNumber] = useState<any[]>(Array.from({ length: 12 }, () => 0));

    useEffect(() => {
        const shuffledSVG = buttons.numpad.flat(1);
        const newPadNumber = [...padNumber];

        SVG_HTMLS.map((svg, value) => {
            for (let i = 0; i < shuffledSVG.length; i++) {
                if (svg === shuffledSVG[i]) {
                    newPadNumber[i] = value + 1;
                    break;
                }
            }
        })

        setPadNumber(newPadNumber);

        let index = 0;
        document.querySelectorAll(".key-pad-buttons").forEach((node: HTMLElement) => {
            padPosition[index] = [node.offsetLeft, node.offsetTop];
            index += 1
        })
        setPadPosition(padPosition);
    }, [triggerState.trigger])

    useEffect(() => {
        document.querySelectorAll("div.pads-num-buttons button").forEach(button => {
            const svg: any = button.childNodes[0];

            let index = svg.attributes[3].nodeValue;
            switch (index) {
                case ("shuffle"):
                    index = 10
                    break;

                case ("blank"):
                    index = 11
                    break;
                default:
                    index = Number(index)
                    break;
            }
            padPosition[index] = button.getClientRects()[0];
            setPadPosition([...padPosition])
        })
    }, [insertDataState.data])

    return (
        <NumpadLayout>
            <tbody>
                {
                    buttons.numpad.map(col => {
                        return (
                            <PadLayout key={Math.random()}>
                                {
                                    col.map(svg => {
                                        return (
                                            <NumpadButtons svg={svg} inputRef={inputRef} />
                                        )
                                    })
                                }
                            </PadLayout>
                        )
                    })
                }
            </tbody>
        </NumpadLayout>
    )
}

function NumpadButtons({ svg, inputRef }: { svg: string, inputRef: React.MutableRefObject<HTMLInputElement> }) {
    return (
        <ButtonContainer
            className="key-pad-buttons"
            key={Math.random()}>
            <Buttons
                onMouseDown={(e) => {
                    console.log(e.currentTarget.offsetLeft);
                    if (inputRef.current) {
                        const curr = inputRef.current.value ?? ""
                        const newValue = curr + "1";
                        inputRef.current.value = newValue;
                    }
                }}
                key={Math.random()}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        </ButtonContainer>
    )
}