import styled from "styled-components";

function getHeight(size: number, axis?: "horiz" | "vert"): number {
	return axis === "horiz" ? 1 : size;
}

function getWidth(size: number, axis?: "horiz" | "vert",) {
	return axis === "vert" ? 1 : size;
}

const Space = styled.span<{ $size: number, $vertical?: "horiz" | "vert" }>`
	display: block;
	width: ${props => getWidth(props.$size, props.$vertical)}px;
	min-width: ${props => getWidth(props.$size, props.$vertical)}px;
	height: ${props => getHeight(props.$size, props.$vertical)}px;
	min-height: ${props => getHeight(props.$size, props.$vertical)}px;
`;

export default function Spacer({ vertical, size }: { vertical?: "horiz" | "vert", size: number }) {
	return <Space $size={size} $vertical={vertical} />
}

