import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TopBar extends Component {
    render() {
        return (
            <div className="top-bar-guest">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-top-bar">
                                Giao hàng miễn phí cho đơn đặt hàng trên 350k
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-top-bar">
                                <div className="row">
                                    <div className="col-lg-3 top-bar-right-item">
                                        <a href="#">Help & FAGs</a>
                                    </div>
                                    <div className="col-lg-3 top-bar-right-item">
                                        <Link to="/sges/login">Đăng nhập</Link>
                                    </div>
                                    <div className="col-lg-3 top-bar-right-item">
                                        <a href="#">Liên hệ</a>
                                    </div>
                                    <div className="col-lg-3 top-bar-right-item">
                                        <a href="#">Giới thiệu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
