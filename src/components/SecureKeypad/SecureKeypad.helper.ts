export function trackingFocusingInput(
	insert: HTMLInputElement,
	confirm: HTMLInputElement,
	curr: string
) {
	if (curr) {
		const currState = curr.includes("insert") ? "insert" : "confrim";
		const needToChangeRef = currState === "insert" ? confirm : insert;

		needToChangeRef.setAttribute("disabled", "true");
	}
}
export function trackingFocusingKeypad(
	insert: HTMLDivElement,
	confirm: HTMLDivElement,
	curr: string
) {
	if (curr) {
		const currState = curr.includes("insert") ? "insert" : "confrim";
		const currRef = currState === "insert" ? insert : insert;

		currRef.setAttribute("aria-hidden", "false");
	}
}
