export const If = ({ when, children }: IBiz.IIf): any => {
	if (when) {
		return children;
	}
	return null;
};

export const Else = ({ when, children }: IBiz.IIf) => {
	if (!when) {
		return children;
	}
	return null;
};