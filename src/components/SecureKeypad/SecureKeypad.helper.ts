export function trackingFocusingInput(
	insert: HTMLInputElement,
	confirm: HTMLInputElement,
	isFocus: boolean,
	curr: string
) {
	const insertId = insert.getAttribute("id");
	const confirmId = confirm.getAttribute("id");

	const insertState = isFocus && curr !== insertId;
	const confirmState = isFocus && curr !== confirmId;

	if (insertState) {
		insert.setAttribute("disabled", "true");
	}

	if (confirmState) {
		confirm.setAttribute("disabled", "true");
	}
}
