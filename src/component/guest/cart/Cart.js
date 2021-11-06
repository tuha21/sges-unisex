import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

class Cart extends Component {

    componentDidMount = () => {

    }

    total = (cart) => {
        let total = 0;
        cart.forEach(element => {
           total = total + ((100 - element.sale) * element.price/100)* element.qty 
        });
        return total
    }

    render() {
        const element = this.props.cart.map((val, ind) => {
            return <CartItem key={ind} cartItem={val}></CartItem>
        })
        
        return (
            <div className="cart">
                <div className="container">
                    <div className="breadcrumb">{"Home > Shirt > I am a product"}</div>
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
                                    {element}
                                    <tr>
                                        <td colSpan={5}>
                                            <input
                                                className="voucher-input"
                                                placeholder="voucher"
                                            />
                                            <button className="ms-2 apply-voucher">
                                                Apply voucher
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4">
                            <div className="cart-total">
                                <p>
                                    <h5>CART TOTALS</h5>
                                </p>
                                <p>
                                    <h6>Subtotal: 300.000 đ</h6>
                                </p>
                                <p>
                                    <h>Shipping: 30.000 đ</h>
                                </p>
                                <p>
                                    <h5>TOTAL: {this.total(this.props.cart) + 30000} đ</h5>
                                </p>
                                <Link to="checkout">
                                    <button>Check out</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToDispatch = dispatch => {
    return {
        setProductInfo: product => {
            dispatch({
                type: 'set',
                product
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Cart)