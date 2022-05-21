import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import '@css/components/tab-bar.less'
// @ts-ignore
import { Icon } from '@components';

interface TabItem {
	path: '/' | '/shop' | '/category' | '/mine',
	icon: string,
	iconChecked: string,
	iconText: '首页' | '分类' | '购物车' | '我的'
}

const tabList: TabItem[] = [
	{
		path: `/`,
		icon: `main`,
		iconChecked: `main-selected`,
		iconText: `首页`
	},
	{
		path: `/category`,
		icon: `category`,
		iconChecked: `category-selected`,
		iconText: `分类`
	},
	{
		path: `/shop`,
		icon: `shop`,
		iconChecked: `shop-selected`,
		iconText: `购物车`
	},
	{
		path: `/mine`,
		icon: `mine`,
		iconChecked: `mine-selected`,
		iconText: `我的`
	}
]
export default () => {
	const history = useHistory();
	const pathName = useLocation().pathname;
	const onTabChange = (item: TabItem) => {
		if (item.path === pathName) return;
		history.push(`${item.path}`);
	}
	return (
		<>
			<div className="tab_bar_container">
				<ul>
					{
						tabList.map((item: TabItem) => {
							return (
								<li className={item.path === pathName ? 'selected' : ''} key={item.path} onClick={() => onTabChange(item)}>
									<Icon className="tab_bar_icon" type={item.path === pathName ? item.iconChecked : item.icon} />
									<span className="tab_text">{item.iconText}</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		</>
	)
}
