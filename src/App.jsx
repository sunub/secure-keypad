import React from "react";
import styled from "styled-components";

const Global = styled.div`
	width: 100%;
	height: 100%;
`;

export default function App() {
	return (
		<Global>
			<h1>HI!</h1>
			<p>Hello World!</p>
		</Global>
	);
}
