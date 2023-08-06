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
