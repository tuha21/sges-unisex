import { Component } from "react";

export default class Checkout extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <h2>Order</h2>
                        <h3>THông tin giỏ hàng</h3>
                        <div>
                            <input type="radio" />
                            <button>Thay đổi</button>
                        </div>
                        <div class="form-group">
                          <input type="text"
                              class="form-control form-control-sm" placeholder="Phone" />
                        </div>
                        <div class="form-group">
                          <input type="text"
                              class="form-control form-control-sm" placeholder="Họ tên người nhận" />
                        </div>
                        <div class="form-group">
                          <input type="text"
                              class="form-control form-control-sm" placeholder="Địa chỉ giao hàng" />
                        </div>
                        <hr />
                        <div>
                            <input type="radio" />
                            <button>Nhận tại cửa hàng</button>
                        </div>
                        <h1>
                            Phương thức thanh
                        </h1>
                        
                    </div>
                    <div className="col-6">

                    </div>
                </div>

            </div>
        )
    }
}