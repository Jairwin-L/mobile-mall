import { Link } from 'react-router-dom'
import { RightOutlined } from '@ant-design/icons'
import '@css/components/simple-line.less'
import Icon from "../components/icon";

export default ({ data = [] }: any) => {
	return (
		<>
			{
				data.map((item: any) => {
					return (
						<Link to={item.path} key={item.path} className="simple_item">
							<Icon type={item.icon} />
							<span className="text">{item.text}</span>
							<RightOutlined className="arrow_icon" />
						</Link>
					)
				})
			}
		</>
	)
}
