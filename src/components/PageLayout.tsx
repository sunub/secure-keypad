import React from "react";
import { styled } from "styled-components";

const Layout = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: auto;
    margin-right: auto;
    padding-left: 32px;
    padding-right: 32px;
`

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Layout>
            {children}
        </Layout>
    )
}