import { http } from "@/utils/http";

export function createKeypad() {
	return http.post("/api/keypad");
}

interface KeypadInputResult {
	uid: string;
	keypad: Array<{ x: number; y: number }>;
}

export function submitPassword(password) {}
