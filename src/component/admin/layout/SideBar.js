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
                    <p className="menu-sub-title">Application</p>
                    <ul className="menu-sub-list">
                        <li>
                            <Link className="link" to="/admin">
                                <i className="fas fa-tachometer-alt first-icon"></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i className="fas fa-database first-icon"></i>
                                <span>Catalog</span>
                                <i className="fas fa-angle-left last-icon"></i>
                            </Link>
                            {/* <i class="fas fa-angle-down"></i> */}
                            <ul className="menu-sub-list-2" style={{ display: "block" }}>
                                <li>
                                    <Link className="link" to="/admin/productslist">
                                        <span>Products List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/product">
                                        <span>Product</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/categorieslist">
                                        <span>Categories List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/category">
                                        <span>Category</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i class="fas fa-user first-icon"></i>
                                <span>Customers</span>
                            </Link>
                            <ul className="menu-sub-list-2" style={{ display: "block" }}>
                                <li>
                                    <Link className="link" to="/admin/customerslist">
                                        <span>Customers List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/customer">
                                        <span>Customer</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i class="fas fa-shopping-cart first-icon"></i>
                                <span>Orders</span>
                            </Link>
                            <ul className="menu-sub-list-2" style={{ display: "block" }}>
                                <li>
                                    <Link className="link" to="/adminorderslist">
                                        <span>Orders List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/order">
                                        <span>Order Detail</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/#">
                                <i class="fas fa-calendar-check first-icon"></i>
                                <span>Event</span>
                            </Link>
                            <ul className="menu-sub-list-2" style={{ display: "block" }}>
                                <li>
                                    <Link className="link" to="/admin/voucherslist">
                                        <span>Vouchers List</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="link" to="/admin/voucher">
                                        <span>Voucher</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="link" to="/admin/inbox">
                                <i class="fas fa-comments first-icon"></i>
                                <span>Inbox</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="link" to="/admin/feedback">
                                <i class="fas fa-envelope first-icon"></i>
                                <span>Feedback</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
