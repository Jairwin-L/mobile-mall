import { createFromIconfontCN } from "@ant-design/icons"
const IconPreFix = '2313308_9xnpwddl0xw'
const Icon = createFromIconfontCN({
	scriptUrl: `//at.alicdn.com/t/font_${IconPreFix}.js`,
})

interface Props {
	type: string;
	backFlag?: boolean;
	style?: any;
	className?: string;
	onClick?: any;
}

export default (props: Props) => {
	const { type, style, className, onClick } = props;
	const cssStyle = {
		...style
	}
	return (
		<Icon onClick={() => onClick && onClick()} type={type} style={cssStyle} className={className && className} />
	)
}
