declare module "*.scss" {
	const content: Record<string, string>;
	export default content;
}

interface Setters {
	focus: React.Dispatch<React.SetStateAction<boolean>>;
}

type InputStatus = {
	insert: boolean;
	confirm: boolean;
};

type FocusStatus = {
	focusStatus: InputStatus;
	setFocusStatus: React.Dispatch<React.SetStateAction<InputStatus>>;
};

type Setter = {
	status: InputStatus;
	setter: React.Dispatch<React.SetStateAction<InputStatus>>;
};

interface FunctionKey {
	symbol: string;
	rowIndex: number;
	columnIndex: number;
}

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
