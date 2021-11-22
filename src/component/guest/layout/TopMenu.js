import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class TopMenu extends Component {
    render() {

        const {cart} = this.props

        return (
            <div className="top-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="left-menu">
                                <a className="logo" href="#">
                                    SGES
                                </a>
                                <ul className="menu">
                                    <li>
                                        <Link className="menu-item" to="/sges">
                                            Trang chủ
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="menu-item" to="/sges/shop">
                                            Cửa hàng
                                        </Link>
                                    </li>   
                                    <li>
                                        <Link className="menu-item" to="/sges/combo">
                                            Combo
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="right-menu text-end">
                                <span>
                                    <i className="bi bi-search"></i>
                                </span>
                                <span>
                                    <Link to="/sges/cart">
                                        <i className="bi bi-cart-fill"></i>
                                        <span className="cart-count">{cart.length}</span>
                                    </Link>
                                </span>
                                <span>
                                    <i className="bi bi-heart"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(TopMenu)