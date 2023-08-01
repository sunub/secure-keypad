import React from "react"
import styled from "styled-components"


export default function Txt({ typography = "p", color, children, ...props }: { typography: string , color: string, children: React.ReactNode}) {
    const Component = TypographyConstant[`${typography}`]

    return (
        <Component $color={color} {...props}>
            { children }
        </Component>
    )
}

const TypographyConstant = {
    "p": styled.p<{ $color: string }>`
        font-weight: 10;
        font-size: .5rem;
        color: ${props => props.$color};
        `,
    "h1" : styled.h1<{ $color: string }>`
        font-weight  : 700;
        font-size: 6rem;
        color: ${props => props.$color};
    `,
    "h2" : styled.h2<{ $color: string }>`
        font-weight  : 700;
        font-size: 5rem;
        color: ${props => props.$color};
    `,
    "h3" : styled.h3<{ $color: string }>`
        font-weight  : 700;
        font-size: 4rem;
        color: ${props => props.$color};
    `,
    "h4" : styled.h4<{ $color: string }>`
        font-weight  : 700;
        font-size: 3rem;
        color: ${props => props.$color};
    `,
    "h5" : styled.h5<{ $color: string }>`
        font-weight  : 700;
        font-size: 2rem;
        color: ${props => props.$color};
    `,
}