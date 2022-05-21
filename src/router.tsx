import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import Category from './pages/category'
import Shop from './pages/shop'
import Detail from './pages/shop/detail'
import Mine from './pages/mine'
import Collection from './pages/mine/collection'
import Help from './pages/mine/help'
import Order from './pages/mine/order'
import ChangePassword from './pages/auth/change-password'
import Ad from './pages/mine/ad';
import Address from './pages/mine/address/list'
import AddressAdd from './pages/mine/address/add'
import AddressEdit from './pages/mine/address/edit'
import Login from './pages/auth/login'
import Demo from './pages/demo/demo'
import NotFound from '@pages/auth/not-found'

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/category" element={<Category />} />
			<Route path="/shop" element={<Shop />} />
			<Route path="/detail/:id" element={<Detail />} />
			<Route path="/mine" element={<Mine />} />
			<Route path="/order" element={<Order />} />
			<Route path="/help" element={<Help />} />
			<Route path="/collection" element={<Collection />} />
			<Route path="/change-password" element={<ChangePassword />} />
			<Route path="/ad" element={<Ad />} />
			<Route path="/address/list" element={<Address />} />
			<Route path="/address/add" element={<AddressAdd />} />
			<Route path="/address/edit" element={<AddressEdit />} />
			<Route path="/auth/login" element={<Login />} />
			<Route path="/demo" element={<Demo />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
)
export default Router
