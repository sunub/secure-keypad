import React from "react";
import styled from "styled-components";

type Title = "h1" | "h2" | "h3" | "h4" | "p"

const H1 = styled.h1`
    font-size: 6rem;
    font-weight: 700;
`

const H2 = styled.h2`
    font-size: 5rem;
    font-weight: 700;
`

const H3 = styled.h3`
    font-size: 4rem;
    font-weight: 700;
`

const H4 = styled.h4`
    font-size: 3rem;
    font-weight: 400;
`

const P = styled.p`
    font-size: 1rem;
    font-weight: 100;
`

export default function Txt({ type, children }: { type: Title, children: React.ReactNode }) {
    const title = {
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        p: P
    }
    const TxtTag = title[type]

    return (
        <TxtTag>
            {children}
        </TxtTag>
    )
}