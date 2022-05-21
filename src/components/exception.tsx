import Icon from "../components/icon";
import "@css/components/exception.less";
import { Button } from 'antd-mobile';

const iconStyle = {
	fontSize: '50px',
}

export default ({ onRefresh }: any) => {
	return (
		<div className="exception_container">
			<Icon type="error" style={iconStyle} />
			<span>世界上最遥远的距离莫过于此</span>
			<Button size='small' color='primary' onClick={() => onRefresh && onRefresh()}>刷新</Button>
		</div>
	)
}