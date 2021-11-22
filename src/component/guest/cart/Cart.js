import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            txtVoucher: '',
            discount: 0
        }
    }

    onChangeVoucher = (e) => {
        const { value } = e.target
        this.setState({
            txtVoucher: value
        })
    }

    componentDidMount = () => { };

    total = () => {
        let total = 0;
        this.props.cart.forEach((element) => {
            total = total + (((100 - element.sale) * element.price) / 100) * element.qty;
        });
        return total;
    };

    useVoucher = () => {
        const total = this.total()
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/voucher/getByCode/37680", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(JSON.parse(result).conditions);
                if (JSON.parse(result).conditions < total) {
                    this.setState({
                        discount: (total / 100) * JSON.parse(result).discount
                    })
                    alert("Da su dung")
                }
                
            })
            .catch(error => console.log('error', error));
    }

    render() {
        const element = this.props.cart.map((val, ind) => {
            return <CartItem key={ind} cartItem={val}></CartItem>;
        });

        const hasItem = this.props.cart.length > 0

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
                                                value={this.state.txtVoucher}
                                                onChange={this.onChangeVoucher}
                                                className="voucher-input"
                                                placeholder="voucher"
                                            />
                                            <button onClick={this.useVoucher} className="ms-2 apply-voucher">
                                                Apply voucher
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {
                            hasItem ? <div className="col-lg-4">
                                <div className="cart-total">
                                    <p>
                                        <h5>CART TOTALS</h5>
                                    </p>
                                    <p>
                                        <h6>Subtotal: {this.total()} đ</h6>
                                    </p>
                                    <p>
                                        <h>Shipping: 30.000 đ</h>
                                    </p>
                                    {
                                        this.state.discount > 0 ?
                                            <p>
                                                <h>Giam gia: {this.state.discount}đ</h>
                                            </p> : ''
                                   }
                                    <p>
                                        <h5>TOTAL: {this.total() + 30000 - this.state.discount} đ</h5>
                                    </p>
                                    <Link to="/sges/checkout">
                                        <button className='check-out-btn'>Check out</button>
                                    </Link>
                                </div>
                            </div> : ''
                        }
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        setProductInfo: (product) => {
            dispatch({
                type: "set_cart",
                product,
            });
        },
    };
};

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
};

export default connect(mapStateToProps, mapStateToDispatch)(Cart);
