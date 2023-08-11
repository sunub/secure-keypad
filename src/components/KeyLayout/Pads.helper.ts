import isNode from "detect-node";

const host = isNode ? "http://localhost:3001/" : "";

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

export async function getCreatedKeypad() {
	const response = await fetch(`${host}api/keypad`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.then((json) => console.log(json));

	// if (!response.ok) {
	// 	throw new Error("Keypad is not loaded");
	// }

	// const createdKeypad = await response.json();
	return response;
}
