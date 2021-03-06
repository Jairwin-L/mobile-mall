import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { OrderItem, OrderEnum, OrderValue } from '@typings/const';
import { getQueryParams } from '../../utils';
import '@css/mine/order.less';
import { NavBar } from 'antd-mobile';
import { ORDER_MAP } from '@constants/biz';
export const ORDER_OPTION: OrderItem[] = [
	{
		icon: "all",
		label: "全部",
		value: OrderEnum.ALL,
	},
	{
		icon: "pedding-pay",
		label: "待付款",
		value: OrderEnum.PEDDING_PAY,
	},
	{
		icon: "pedding-received",
		label: "待发货",
		value: OrderEnum.PEDDING_DELIVERED,
	},
	{
		icon: "pedding-delivered",
		label: "待收货",
		value: OrderEnum.PEDDING_RECEIVED,
	},
	{
		icon: "pedding-comment",
		label: "待评价",
		value: OrderEnum.PEDDING_COMMENT,
	},
	{
		icon: "sale",
		label: "售后",
		value: OrderEnum.AFTER_SERVICES,
	}
]

export default function Order () {
	const navigate = useNavigate();
	const location = useLocation();
	console.log('new URLSearchParams----->：', new URLSearchParams(location.search));
	const query = getQueryParams(location.search);
	console.log('query----->：', query);
	const [orderStatus, setOrderStatus] = useState<OrderValue>(query.status || OrderEnum.ALL)
	return (
		<>
			<NavBar onBack={() => navigate(-1)}>订单</NavBar>
			<div className="order_list_container">
				<div className="order_list">
					{
						ORDER_OPTION.map((item: OrderItem) => {
							return (
								<div className="key_container" key={item.value}>
									<div className="order_item_wrap">
										<div onClick={() => setOrderStatus(item.value)} className={item.value === orderStatus ? 'order_item_selected' : 'order_item'}>
											{item.label}
										</div>
									</div>
									<div className="order_line">
										<div className={item.value === orderStatus ? 'order_active' : 'order_line_none'}></div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			<div>
				{ORDER_MAP(orderStatus)}
			</div>
		</>
	)
}
