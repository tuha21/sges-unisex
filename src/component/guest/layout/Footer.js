import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="footer-item-title">CATEGORIES</p>
                            <ul>
                                <li><a href="#">Shirt</a></li>
                                <li><a href="#">Pant</a></li>
                                <li><a href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <p className="footer-item-title">HELP</p>
                            <ul>
                                <li><a href="#">Shirt</a></li>
                                <li><a href="#">Pant</a></li>
                                <li><a href="#">Accessories</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <p className="footer-item-title">GET IN TOUCH</p>
                            <ul>
                                <li><a href="#">Shirt</a></li>
                                <li><a href="#">Pant</a></li>
                                <li>
                                    <a href="#" className="me-2"><i class="bi bi-facebook"></i></a>
                                    <a href="#"><i class="bi bi-instagram"></i></a>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <p className="footer-item-title">NEWSLETTER</p>
                            <ul>
                                <li><a href="#">Shirt</a></li>
                                <li><a href="#">Pant</a></li>
                                <li><a href="#">Accessories</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="coppyright">
                        <p>Copyright ©2021 All rights reserved | This template is made with  by Colorlib</p>
                    </div>
                </div>
            </div>
        )
    }
}
