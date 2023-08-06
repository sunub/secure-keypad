import React from "react";
import styled from "styled-components";
import PageLayout from "./components/PageLayout";
import KeypadPage from "./pages/KeypadPage";
import FocusProvider from "./context/FocusContext";

const Global = styled.div`
	width: 100dvw;
	height: 100dvh;
`;

export default function App() {

	return (
		<Global>
			<PageLayout>
				<FocusProvider>
					<KeypadPage />
				</FocusProvider>
			</PageLayout>
		</Global>
	);
}