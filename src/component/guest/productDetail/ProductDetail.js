import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        return (
            <div className="product-detail">
                <div className="container">
                    <div className="breadcrumb">
                        {"Home > Shirt > I am a product"}
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="large-image">
                                <img className="w-100" src="https://cf.shopee.vn/file/7faae76573882f67a68f8600aae94542" />
                            </div>
                            <div className="list-small-image mt-2">
                                <div className="row">
                                    <div className="col-lg-2 me-2"><img src="https://cf.shopee.vn/file/7faae76573882f67a68f8600aae94542" /></div>
                                    <div className="col-lg-2 me-2"><img src="https://cf.shopee.vn/file/7faae76573882f67a68f8600aae94542" /></div>
                                    <div className="col-lg-2 me-2"><img src="https://cf.shopee.vn/file/7faae76573882f67a68f8600aae94542" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <h5 className="product-name">I am a product</h5>
                            <h6>200.000 đ</h6>
                            <h5>Sale: 150.000 đ</h5>
                            <form className="pt-5">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Size</label>
                                    <select className="form-control cbo-size">
                                        <option>Size S</option>
                                        <option>Size M</option>
                                        <option>Size L</option>
                                        <option>Size XL</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Size</label>
                                    <select className="form-control cbo-color">
                                        <option>Red</option>
                                        <option>Blue</option>
                                        <option>Black</option>
                                        <option>White</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Quantity</label>
                                    <input type="number" min={0} class="form-control" id="exampleInputPassword1" />
                                </div>

                                <div className="row">
                                    <div className="col-lg-10">
                                        <button type="submit" class="btn btn-primary w-100">Add to cart</button>
                                    </div>
                                    <div className="col-lg-2">
                                        <button type="submit" class="btn btn-primary w-100"><i class="bi bi-heart"></i></button>
                                    </div>
                                    <div className="col-lg-12 mt-3">
                                        <button type="submit" class="btn btn-primary w-100">Pay now</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
