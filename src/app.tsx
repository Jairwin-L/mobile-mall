import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';
import { routers } from './router';

const DOCUMENT_TITLE: { [key: string]: string } = {
	'/': '首页',
	'/category': '分类',
	'/shop': '购物车',
	'/detail': '详情',
	'/mine': '我的',
	'/order': '订单',
	'/help': '帮助',
	'/collection': '收藏',
	'/change-password': '修改密码',
	'/ad': '运营',
	'/address/list': '地址',
	'/address/add': '添加地址',
	'/address/edit': '修改地址',
	'/auth/login': '登录',
}

export const App = () => {
	const { pathname = '' } = useLocation();
	useEffect(() => {
		document.title = `${DOCUMENT_TITLE[pathname]} · ${window.title}`;
	}, [pathname]);
	const element = useRoutes(routers);
	return element;
}
