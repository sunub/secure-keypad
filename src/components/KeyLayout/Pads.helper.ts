import { SVG_HTMLS } from "@/constants/svg";
import React from "react";
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

	for (let shuffledSvgHtml of shuffledSvgHtmls) {
		shuffledSvgHtml = parser(shuffledSvgHtml);
	}
	console.log(shuffledSvgHtmls);

	return {
		id: uuidv4(),
		functionpad: {
			shuffle: shuffleBtn,
			blank: blankBtn,
		},
		numpad: [
			shuffledSvgHtmls.slice(0, 3),
			shuffledSvgHtmls.slice(3, 6),
			shuffledSvgHtmls.slice(6, 9),
			shuffledSvgHtmls.slice(9, 12),
		],
	};
}

export default function parser(svgSting: string) {
	const parser = new DOMParser();
	const svgElement = parser.parseFromString(
		svgSting,
		"image/svg+xml"
	).documentElement;
	const reactSvg = convertElementToReact(svgElement);
	return reactSvg;
}

function convertElementToReact(element: HTMLElement) {
	const type = element.tagName;
	const props = getProps(element);
	const children = Array.from(element.childNodes).map(convertElementToReact);

	return React.createElement(type, props, children);
}

function getProps(element: HTMLElement) {
	const props = {};

	for (let i = 0; i < element.attributes.length; i++) {
		const attr = element.attributes[i];
		props[attr.name] = attr.value;
	}

	return props;
}

createPadButtons();
