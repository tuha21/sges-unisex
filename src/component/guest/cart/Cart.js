import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'

export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <div className="container">
                    <div className="breadcrumb">
                        {"Home > Shirt > I am a product"}
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                    <CartItem />
                                    <tr>
                                        <td colSpan={5}>
                                            <input className="voucher-input" placeholder="voucher" />
                                            <button className="ms-2 apply-voucher">Apply voucher</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-total">
                                <p><h5>CART TOTALS</h5></p>
                                <p><h6>Subtotal: 300.000 đ</h6></p>
                                <p><h>Shipping: 30.000 đ</h></p>
                                <p><h5>TOTALS: 330.000 đ</h5></p>
                                <Link to="checkout">
                                    <button>
                                        Check out
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
