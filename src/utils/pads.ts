import { SVG_HTMLS } from "@/constants/svg";
import { v4 as uuidv4 } from "uuid";

interface Keypad {
	functionKeys: FunctionKey[];
	size: {
		rows: number;
		columns: number;
	};
	svgGrid: string[][];
}

interface CreateKeypadResponse {
	uid: string;
	keypad: Keypad;
}

export function shuffle(array: string[]) {
	let currIndex = array.length;
	let randomIndex: number;
	const newArray = Array.from(array);

	while (currIndex !== 0) {
		randomIndex = Math.floor(currIndex * Math.random());
		currIndex -= 1;

		[newArray[currIndex], newArray[randomIndex]] = [
			newArray[randomIndex],
			newArray[currIndex],
		];
	}

	return newArray;
}

export function createKeypadResponse(): CreateKeypadResponse {
	const shuffledSvgHtmls = shuffle(SVG_HTMLS);
	const blankIndex = shuffledSvgHtmls.findIndex((svgHtml) =>
		svgHtml.includes('data-testid="blank"')
	);
	const shuffleIndex = shuffledSvgHtmls.findIndex((svgHtml) =>
		svgHtml.includes('data-testid="shuffle"')
	);

	return {
		uid: uuidv4(),
		keypad: {
			functionKeys: [
				{
					symbol: "BLANK",
					rowIndex: Math.floor(blankIndex / 4),
					columnIndex: blankIndex % 4,
				},
				{
					symbol: "SHUFFLE",
					rowIndex: Math.floor(shuffleIndex / 4),
					columnIndex: shuffleIndex % 4,
				},
			],
			size: {
				rows: 4,
				columns: 3,
			},
			svgGrid: [
				shuffledSvgHtmls.slice(0, 3),
				shuffledSvgHtmls.slice(3, 6),
				shuffledSvgHtmls.slice(6, 9),
				shuffledSvgHtmls.slice(9, 12),
			],
		},
	};
}
