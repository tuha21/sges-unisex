import { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import ProductInfo from "./productInfo/ProductInfo";
import Login from "./login/Login";
import Checkout from "./home/Checkout";
import Shop from "./shop/Shop";
import Combo from "./home/Combo";

export default class Sges extends Component {

    topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Route exact path="/sges">
                        <Home />
                    </Route>
                    <Route path="/sges/product-detail">
                        <ProductInfo />
                    </Route>
                    <Route path="/sges/cart">
                        <Cart />
                    </Route>
                    <Route path="/sges/login">
                        <Login />
                    </Route>
                    <Route path="/sges/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/sges/combo">
                        <Combo />
                    </Route>
                    <Route path="/sges/shop">
                        <Shop />
                    </Route>
                    <Footer />
                    <button onClick={this.topFunction} id="myBtn" title="Go to top">Top</button>
                </Router>
            </div>
        );
    }
}
