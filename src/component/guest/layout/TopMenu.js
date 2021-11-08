import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopMenu extends Component {
    render() {
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
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="menu-item" to="/sges/shop">
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="menu-item" to="/sges/feature">
                                            Feature
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="right-menu text-end">
                                <span>
                                    <i class="bi bi-search"></i>
                                </span>
                                <span>
                                    <Link to="/sges/cart">
                                        <i class="bi bi-cart-fill"></i>
                                    </Link>
                                </span>
                                <span>
                                    <i class="bi bi-heart"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
