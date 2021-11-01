import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        return (
            <tr className="cart-item">
                <td>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://cf.shopee.vn/file/8fe6c485c0d9c6521a3ccd00d4201aa3" />
                        </div>
                        <div className="col-lg-8">
                            <p>I am a product</p>
                            <p>Size: M | Color: white</p>
                            {/* <p>Color: White</p> */}
                        </div>
                    </div>
                </td>
                <td>200.000</td>
                <td>
                    <input type="number"/>
                </td>
                <td>200.000</td>
                <td><i class="bi bi-trash"></i></td>
            </tr>
        )
    }
}
