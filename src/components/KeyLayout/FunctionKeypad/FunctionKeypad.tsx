import React from "react";

interface FunctionPadProps {
    set: React.Dispatch<React.SetStateAction<boolean>>
}

export default function FunctionKeypad({ set }: FunctionPadProps) {
    return (
        <div>
            <button
                onClick={() => {
                    set(false);
                }}
            >
                확인
            </button>
            <button>
                삭제
            </button>
        </div>
    )
}