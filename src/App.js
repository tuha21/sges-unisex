import React, { Component } from 'react'
import Cart from './component/guest/cart/Cart'
import Home from './component/guest/home/Home'
import Footer from './component/guest/layout/Footer'
import Header from './component/guest/layout/Header'
import ProductDetail from './component/guest/productDetail/ProductDetail'
import Login from "./component/guest/login/Login"
import Checkout from './component/guest/home/Checkout'
import "./css/guestpage.css"

import {
	BrowserRouter as Router,
	Route
} from "react-router-dom"

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
						<ProductDetail />
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
					<Footer />
				</Router>

			</div>
		)
	}
}
