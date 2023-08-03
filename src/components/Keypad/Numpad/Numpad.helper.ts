export function sendInputValue(to: string, e: MouseEvent | any) {
	const input = document.querySelector(`#${to}-input`);
	input.setAttribute("value", "*");
}
