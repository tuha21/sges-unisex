import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductOverView extends Component {
    render() {
        return (
            <div className="product-overview p-5">
                <div className="container">
                    <h2>PRODUCT OVERVIEW</h2>
                    <div className="product-filter">
                        <div className="product-overview-menu">
                            <div className="row">
                                <div className="col-lg-8">
                                    <ul>
                                        <li><a href="#">All product</a></li>
                                        <li><a href="#">Category</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="product-overview-filter">
                            <div className="container">
                                <div className="row content-filter">
                                    <div className="col-lg-4">
                                        <p>Sort By</p>
                                        <ul>
                                            <li><a href="#">Product name</a></li>
                                            <li><a href="#">Price</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-4">
                                        <p>Price</p>
                                        <ul>
                                            <li><a href="#">0-200.000 đ</a></li>
                                            <li><a href="#">200.500 đ</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                            <div className="col-lg-3"><ProductItem /></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
