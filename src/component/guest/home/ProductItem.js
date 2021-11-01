import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProductItem extends Component {
    render() {
        return (
            <div className="product-item">
                <img src="https://cf.shopee.vn/file/8fe6c485c0d9c6521a3ccd00d4201aa3" />
                <div className="product-item-action">
                    <button>Quick View</button>
                </div>
                <div className="product-info pt-2">
                    <Link className="product-name" to="/product-detail">I am first product</Link>
                    <div className="row">
                        <div className="col-lg-10">
                            <p className="product-price">$35.00</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="product-price text-end"><i class="bi bi-heart"></i></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
