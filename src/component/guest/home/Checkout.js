import { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../cart/CartItem";
import Paypal from "../pay/PayPal";

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            payment: false,

            txtVoucher: '',
            discount: 0
        }
    }

    paypalPay = () => {
        this.setState({
            payment: true
        })
    }

    paymentOnDelivery = () => {
        this.setState({
            payment: false
        })
    }

    onChangeVoucher = (e) => {
        const { value } = e.target
        this.setState({
            txtVoucher: value
        })
    }

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
        const totalPay = this.total(this.props.cart) + 30000
        const hasItem = this.props.cart.length > 0
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 border-end">
                        <h1>Order</h1>
                        <h3>Thông tin giỏ hàng</h3>
                        <div className="row pt-4">
                            <div className="col-6 position-relative">
                                <label class="form-check-label position-absolute top-50 translate-middle-y px-3">
                                    <input
                                        type="radio"
                                        class="form-check-input mx-1"
                                        name="giao-hang"
                                        value="checkedValue"
                                    />
                                    Giao tận nơi
                                </label>
                            </div>
                            <div className="col-6 text-end">
                                <div className="btn">Thay đổi</div>
                            </div>
                        </div>
                        <div class="form-group p-3">
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="Phone"
                            />
                        </div>
                        <div class="form-group p-3">
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="Họ tên người nhận"
                            />
                        </div>
                        <div class="form-group p-3">
                            <input
                                type="text"
                                class="form-control form-control-lg"
                                placeholder="Địa chỉ nhận hàng"
                            />
                        </div>
                        <hr />
                        <div className="py-4 p-3">
                            <div className="row position-relative py-3">
                                <div className="col">
                                    <label class="form-check-label position-absolute top-50 translate-middle-y">
                                        <input
                                            type="radio"
                                            class="form-check-input mx-1"
                                            name="giao-hang"
                                            value="checkedValue"
                                        />
                                        Nhận tại cửa hàng
                                    </label>
                                </div>
                            </div>
                            <div className="row py-2 pb-3">
                                <div className="col">
                                    <select className="form-select">
                                        <option value="0" selected>
                                            Chọn cửa hàng
                                        </option>
                                        <option value="1">Cửa hàng 1</option>
                                        <option value="2">Cửa hàng 2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <h3>Phương thức thanh toán</h3>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-outline-dark me-3" onClick={this.paypalPay}>Ví điện tử</button>
                                <button className="btn btn-outline-dark" onClick={this.paymentOnDelivery}>Thanh toán khi nhận hàng</button>
                                <div className="mt-3">
                                    {this.state.payment ? <Paypal totalPay={totalPay} /> : ""}
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        hasItem ? <div className="col-lg-6">
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
                                <input
                                    value={this.state.txtVoucher}
                                    onChange={this.onChangeVoucher}
                                    className="voucher-input"
                                    placeholder="voucher"
                                />
                                <button onClick={this.useVoucher} className="ms-2 apply-voucher">
                                    Apply voucher
                                </button>
                                <p>
                                    <h5>TOTAL: {this.total() + 30000 - this.state.discount} đ</h5>
                                </p>
                            </div>
                        </div> : ''
                    }
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

export default connect(mapStateToProps, mapStateToDispatch)(Checkout)