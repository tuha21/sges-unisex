import React from "react";
import { Link } from "react-router-dom";
import "../../../css/sidebar/sidebar.css";

const SideBar = () => {
    return (
        <div className="sider-bar">
            <div className="logo">
                <img
                    src="https://cf.shopee.vn/file/1265e20f9125287026827a9a5024d2d1_tn"
                    alt=""
                    style={{ height: "40px" }}
                />
                <span>SGES</span>
                <span className="span2">ADMIN</span>
            </div>
            <div className="menu">
                <div className="catalog">
                    <p className="menu-sub-title">APPLICATION</p>
                    <ul className="menu-sub-list">
                        <li>
                            <Link className="link" to="/admin">
                                <i className="fas fa-tachometer-alt"></i>Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link className="link btn" to="/admin/#">
                                <i class="fas fa-database"></i>Catalog
                            </Link>
                            <i class="fas fa-angle-down"></i>
                            <ul style={{ display: "block" }}>
                                <li>
                                    <Link className="link btn" to="/admin/productslist">
                                        Products List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link btn" to="/admin/product">
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/categorieslist">
                                        Categories List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/category">
                                        Category
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i class="fas fa-user"></i>Customers
                            </Link>
                            <ul>
                                <li>
                                    <Link className="link" to="/admin/customerslist">
                                        Customers List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/customer">
                                        Customer
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i class="fas fa-shopping-cart"></i>Orders
                            </Link>
                            <ul>
                                <li>
                                    <Link className="link" to="/adminorderslist">
                                        Orders List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/order">
                                        Order Detail
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i class="fas fa-calendar-check"></i>Event
                            </Link>
                            <ul>
                                <li>
                                    <Link className="link" to="/admin/voucherslist">
                                        Vouchers List
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/voucher">
                                        Voucher
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/inbox">
                                <i class="fas fa-comments"></i>Inbox
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/admin/feedback">
                                <i class="fas fa-envelope"></i>Feedback
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
