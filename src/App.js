import React, { Component } from 'react'
import Cart from './component/guest/cart/Cart'
import Home from './component/guest/home/Home'
import Footer from './component/guest/layout/Footer'
import Header from './component/guest/layout/Header'
import ProductInfo from './component/guest/productInfo/ProductInfo'
import Login from "./component/guest/login/Login"
import Checkout from './component/guest/home/Checkout'
import "./css/guestpage.css"

import {
	BrowserRouter as Router,
	Route
} from "react-router-dom"
import Shop from './component/guest/shop/Shop'

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header/>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/product-detail">
						<ProductInfo />
					</Route>
					<Route path="/cart">
						<Cart />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/checkout">
						<Checkout />
					</Route>
					<Route path="/shop">
						<Shop />
					</Route>
					<Footer />
				</Router>

			</div>
		)
	}
}
