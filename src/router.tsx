import Main from '@pages/main'
import Category from '@pages/category'
import Shop from '@pages/shop'
import Detail from '@pages/shop/detail'
import Mine from '@pages/mine'
import Collection from '@pages/mine/collection'
import Help from '@pages/mine/help'
import Order from '@pages/mine/order'
import ChangePassword from '@pages/auth/change-password'
import Ad from '@pages/mine/ad';
import Address from '@pages/mine/address/list'
import AddressAdd from '@pages/mine/address/add'
import AddressEdit from '@pages/mine/address/edit'
import Login from '@pages/auth/login'
import NotFound from '@pages/auth/not-found'
import { ReactNode } from 'react'

interface IRouter {
	path: string;
	element: ReactNode;
	meta?: {
		title: string;
	}
}

export const routers: IRouter[] = [
	{
		path: '/',
		element: <Main />,
		meta: {
			title: '首页',
		}
	},
	{
		path: '/category',
		element: <Category />,
		meta: {
			title: '分类',
		}
	},
	{
		path: '/shop',
		element: <Shop />,
	},
	{
		path: '/detail/:id',
		element: <Detail />,
	},
	{
		path: '/mine',
		element: <Mine />,
	},
	{
		path: '/order',
		element: <Order />,
	},
	{
		path: '/help',
		element: <Help />,
	},
	{
		path: '/collection',
		element: <Collection />,
	},
	{
		path: '/change-password',
		element: <ChangePassword />,
	},
	{
		path: '/ad',
		element: <Ad />,
	},
	{
		path: '/address/list',
		element: <Address />,
	},
	{
		path: '/address/add',
		element: <AddressAdd />,
	},
	{
		path: '/address/edit',
		element: <AddressEdit />,
	},
	{
		path: '/auth/login',
		element: <Login />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]
