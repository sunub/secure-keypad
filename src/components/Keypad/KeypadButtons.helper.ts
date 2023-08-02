import { SVG_HTMLS } from "../../constants/svg";
import { v4 as uuidv4 } from "uuid";

type PadButton = {
	id: string;
	functionpad: FnKeypad;
	numpad: string[][];
};

type FnKeypad = {
	shuffle: any;
	blank: any;
};

export function shuffle(array: any[]): string[] {
	let currentIndex = array.length;
	let randomIndex: number;
	const newArray = Array.from(array);

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[newArray[randomIndex], newArray[currentIndex]] = [
			newArray[currentIndex],
			newArray[randomIndex],
		];
	}

	return newArray;
}

export function createPadButtons(): PadButton {
	const shuffledSvgHtmls = shuffle(SVG_HTMLS);
	const shuffleBtn = shuffledSvgHtmls.findIndex((svgHtml) =>
		svgHtml.includes('data-testid="shuffle"')
	);
	const blankBtn = shuffledSvgHtmls.findIndex((svgHtml) =>
		svgHtml.includes('data-testid="blank"')
	);

	return {
		id: uuidv4(),
		functionpad: {
			shuffle: shuffleBtn,
			blank: blankBtn,
		},
		numpad: [
			shuffledSvgHtmls.slice(0, 4),
			shuffledSvgHtmls.slice(4, 8),
			shuffledSvgHtmls.slice(8, 12),
		],
	};
}
