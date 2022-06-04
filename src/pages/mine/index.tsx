import { PageLayout, SimpleLine } from '@components'
import '@css/mine/index.less'
import { useNavigate } from 'react-router-dom';
import { OrderItem } from '@typings/const';
import { ORDER_OPTION } from './order';
import { Icon } from "@components";
import { RightOutlined } from '@ant-design/icons';

const simpleLineList = [
	{
		text: '运营',
		icon: 'ad',
		path: '/ad',
	},
	{
		text: '收藏',
		icon: 'collection',
		path: '/collection',
	},
	{
		text: '地址',
		icon: 'address',
		path: '/address/list',
	},
	{
		text: '帮助中心',
		icon: 'help',
		path: '/help',
	},
	{
		text: '登录',
		icon: 'login',
		path: '/auth/login',
	},
	{
		text: '修改密码',
		icon: 'change-password',
		path: '/change-password',
	},
]
export default function Mine () {
	const navigate = useNavigate();
	return (
		<PageLayout {...{ tabbarFlag: true, footerFlag: true }}>
			<section className="user_info">
				<img src="http://diy-static.oss-cn-beijing.aliyuncs.com/default-avatar.jpg" alt="logo" />
				<div className="info">
					<p>我的商城</p>
					<p>小mall</p>
				</div>
			</section>
			<div className="common_block order_container">
				<div className="order_all" onClick={() => navigate('/order?status=ALL')}>
					<span className="order_text">我的订单</span>
					<div>
						<span className="order_margin">查看全部订单</span>
						<RightOutlined />
					</div>
				</div>
				<div className="order_list_container">
					<div className="order_list">
						{
							ORDER_OPTION.map((item: OrderItem) => {
								return (
									<div className="order_item" key={item.value} onClick={() => navigate(`/order?status=${item.value}`)}>
										<Icon type={item.icon} className="order_icon" />
										<span className="order_status">{item.label}</span>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<section className="simple_container">
				<SimpleLine data={simpleLineList} />
			</section>
		</PageLayout>
	)
}
