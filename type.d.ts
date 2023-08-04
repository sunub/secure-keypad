type FocusType = {
	isFocus: boolean;
	curr: HTMLElement;
};

declare type StatusProvider = {
	status: FocusType;
	setCurrentStatus: (isFocus: boolean, id: string) => void;
};
