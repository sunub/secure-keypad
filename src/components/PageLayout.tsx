import React from "react"
import styled from "styled-components"

const Layout = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    justify-content: center;
    align-items: center;
`

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}