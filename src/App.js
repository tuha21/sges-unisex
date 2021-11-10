import React, { Component } from "react";
import Cart from "./component/guest/cart/Cart";
import Home from "./component/guest/home/Home";
import Footer from "./component/guest/layout/Footer";
import Header from "./component/guest/layout/Header";
import ProductInfo from "./component/guest/productInfo/ProductInfo";
import Login from "./component/guest/login/Login";
import Checkout from "./component/guest/home/Checkout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sges from "./component/guest/Sges";
import AdminPage from "./component/admin/AdminPage";
import "./css/guestpage/guestpage.css";
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/sges">
                            <Sges />
                        </Route>
                        <Route path="/admin">
                            <AdminPage />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}
