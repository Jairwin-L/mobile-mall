import React from 'react';
import "@css/components/button.less";
export interface IButton {
	text?: string;
	disabled?: boolean;
	loading?: boolean;
	type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
	style?: any;
	onClick?: any
}

const btnTypeMap = {
	primary: 'primary',
	ghost: 'ghost',
	dashed: 'dashed',
	link: 'link',
	text: 'text',
	default: 'default',
}

export default ({ text = '按钮', type = 'default', disabled = false, loading = false, style, onClick }: IButton) => {
	return (
		<div style={{ ...style }} className={`btn_container ${btnTypeMap[type]} ${disabled ? 'disabled' : ''}`} onClick={onClick && onClick}>
			{loading && <div className="loading_icon" />}{text}
		</div>
	)
}
