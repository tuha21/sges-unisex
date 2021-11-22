import React, { Component } from "react";
import { connect } from "react-redux";

class CartItem extends Component {

    onchangeQty = e => {
        let {cartItem} = this.props
        this.props.updateCart({
            ...cartItem,
            qty: e.target.value
        })
    }

    deleteCart = () => {
        let {id} = this.props.cartItem
        this.props.deleteCart(id)
    }

    render() {

        const { cartItem } = this.props

        return (
            <tr className="cart-item">
                <td>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="https://cf.shopee.vn/file/8fe6c485c0d9c6521a3ccd00d4201aa3" alt="jsx-a11y/img-redundant-alt"/>
                        </div>
                        <div className="col-lg-8">
                            <p>{cartItem.name}</p>
                            <p>Size: {cartItem.size} | Color: {cartItem.color}</p>
                        </div>
                    </div>
                </td>
                <td>{cartItem.price - (cartItem.price*cartItem.sale)/100}</td>
                <td>
                    <input value={cartItem.qty} onChange={this.onchangeQty} type="number" name="" id="" />
                </td>
                <td>{(cartItem.price - (cartItem.price*cartItem.sale)/100) * cartItem.qty}</td>
                <td>
                    <i className="bi bi-trash" onClick={this.deleteCart}></i>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = state => {
    return {
        productInfo: state.productInfo
    }
}

const mapStateToDispatch = dispatch => {
    return {
        updateCart: cartItem => {
            dispatch({
                type:'update_cart',
                cartItem
            })
        },
        deleteCart: id => {
            dispatch({
                type: 'remove_cart',
                id
            })
        } 
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(CartItem)