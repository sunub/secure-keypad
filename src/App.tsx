import React from "react";
import styled from "styled-components";
import PageLayout from "./components/PageLayout";
import KeypadPage from "./pages/KeypadPage";

const Global = styled.div`
	width: 100dvw;
	height: 100dvh;
`;

export default function App() {

	return (
		<Global>
			<PageLayout>
				<KeypadPage />
			</PageLayout>
		</Global>
	);
}