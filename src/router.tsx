import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
// import loadable from './utils/loadable'
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

// import AddressRouter from './pages/mine/address/router'


// const Main = loadable(() => import('./pages/main'))

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/category" exact component={Category} />
			<Route path="/shop" exact component={Shop} />
			<Route path="/detail/:id" exact component={Detail} />
			<Route path="/mine" exact component={Mine} />
			<Route path="/order" exact component={Order} />
			<Route path="/help" exact component={Help} />
			<Route path="/collection" exact component={Collection} />
			<Route path="/change-password" exact component={ChangePassword} />
			<Route path="/ad" exact component={Ad} />
			<Route path="/address/list" exact component={Address} />
			<Route path="/address/add" exact component={AddressAdd} />
			<Route path="/address/edit" exact component={AddressEdit} />
			<Route path="/auth/login" exact component={Login} />
			<Route path="/demo" exact component={Demo} />
			<Redirect to="/not-found" />
		</Switch>
	</BrowserRouter>
)
export default Router