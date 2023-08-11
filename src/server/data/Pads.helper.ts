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
