import { Component } from "react";
import CartItem from "../cart/CartItem";

export default class Checkout extends Component {
    render() {
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
                        <h3>Phương thức thanh</h3>
                        <div className="row p-3">
                            <div className="col">
                                <div className="btn btn-outline-dark mx-1">Ví điện tử</div>
                                <div className="btn btn-outline-dark mx-1">
                                    Thanh toán khi nhận hàng
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
