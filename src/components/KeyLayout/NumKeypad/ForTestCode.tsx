import React from "react";
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

export default function ForTestCode({ buttons, insertDataState, inputRef, triggerState }: NumKeypadProps) {
    let padPositionIndex = -1;
    const [padNumber, setPadNumber] = React.useState<any[]>(Array.from({ length: 12 }, () => 0));

    React.useEffect(() => {
        const shuffledSVG = buttons.numpad.flat(1);

        SVG_HTMLS.map((svg, value) => {
            for (let i = 0; i < shuffledSVG.length; i++) {
                if (svg === shuffledSVG[i]) {
                    padNumber[i] = value + 1;
                    break;
                }
            }
        })

        setPadNumber(padNumber);
    }, [insertDataState.data])

    return (
        <NumpadLayout>
            <tbody>
                {
                    buttons.numpad.map(col => {
                        return (
                            <PadLayout
                                key={Math.random() * Number.MAX_VALUE}
                            >
                                {
                                    col.map(svg => {
                                        padPositionIndex += 1
                                        return (
                                            <NumpadButtons
                                                key={Math.random() * Number.MAX_VALUE}
                                                svg={svg}
                                                inputRef={inputRef}
                                                positionIndex={padPositionIndex}
                                                padButtonNumbers={padNumber}
                                                insertDataState={{
                                                    data: insertDataState.data,
                                                    setter: insertDataState.setter
                                                }}
                                            />
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

interface NumpadButtonsProps {
    svg: string,
    inputRef: React.MutableRefObject<HTMLInputElement>,
    positionIndex: number,
    padButtonNumbers: any[],
    insertDataState: {
        data: number,
        setter: React.Dispatch<React.SetStateAction<number>>,
    },
}

function NumpadButtons({ svg, inputRef, positionIndex, padButtonNumbers, insertDataState }: NumpadButtonsProps) {
    return (
        <ButtonContainer
            className={`key-pad-buttons`}
            key={Math.random()}>
            <Buttons
                onMouseDown={() => {
                    if (insertDataState.data < 6) {
                        let inputValue: any = 0;
                        switch (padButtonNumbers[positionIndex]) {
                            case 10:
                                inputValue = 0;
                                break;
                            case 11:
                                inputValue = "shuffle";
                                break;
                            case 12:
                                inputValue = "blank";
                                break;
                            default:
                                inputValue = padButtonNumbers[positionIndex];
                                break;
                        }

                        if (typeof inputValue !== "string") {
                            inputRef.current.value += inputValue;
                            insertDataState.setter(insertDataState.data + 1);
                        }
                    }
                }}
                key={Math.random()}
                dangerouslySetInnerHTML={{ __html: svg }}
            />
        </ButtonContainer>
    )
}