import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            size: 0,
            qty: 0,
            color: 0,
            message: '',

            sizeList: [],
            colorList: [],
        }
    }

    componentDidMount = () => {
        this.getSize()
        this.getColor()
    }

    getSize = () => {
        const { productInfo } = this.props;
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/product/getSize/" + productInfo.id, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    sizeList: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    getColor = () => {
        const { productInfo } = this.props
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/product/getColor/" + productInfo.id, requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    colorList: JSON.parse(result)
                })
            })
            .catch(error => console.log('error', error));
    }

    addToCart = (e) => {
        e.preventDefault()
        if (this.isValid()) {
            var { productInfo } = this.props
            const cartItem = {
                ...productInfo,
                size: this.state.size,
                qty: this.state.qty,
                color: this.state.color
            }
            this.props.addToCart(cartItem)
            this.setState({
                message: 'Đã thêm vào giỏ hàng'
            })
        }
    }

    isValid = () => {
        if (this.state.qty <= 0) {
            this.setState({
                message: 'Nhấp số lượng'
            })
            return false
        }
        if (this.state.color === 0) {
            this.setState({
                message: 'Chọn màu'
            })
            return false
        }
        if (this.state.size === 0) {
            this.setState({
                message: 'Chọn size'
            })
            return false
        }
        return true
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { productInfo } = this.props

        const { sizeList, colorList } = this.state;
        const cbxSize = sizeList.map((val, ind) => {
            return <option key={ind} value={val}>{val}</option>
        })
        const cbxColor = colorList.map((val, ind) => {
            return <option key={ind} value={val}>{val}</option>
        })
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
                            <h5 className="product-name">{productInfo.name}</h5>
                            <h6 style={{color: 'lightgray'}}><del>{productInfo.price} đ</del></h6>
                            <h5 style={{color: 'red'}}>{(100 - productInfo.sale) * productInfo.price / 100} <u style={{fontSize: 15}}>đ</u></h5>
                            <form className="pt-2">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Size</label>
                                    <select onChange={this.onChange} name="size" className="form-control cbo-size" value={this.state.size}>
                                        <option value={0}>Chọn size</option>
                                        {cbxSize}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Màu sắc</label>
                                    <select value={this.state.color} onChange={this.onChange} name="color" className="form-control cbo-color">
                                        <option value={0}>Chọn màu</option>
                                        {cbxColor}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Quantity</label>
                                    <input value={this.state.qty} onChange={this.onChange} name="qty" type="number" min={0} class="form-control" />
                                </div>

                                <div className="row">
                                    <div className='col-12'>
                                        <p style={{ color: 'red' }}>{this.state.message}</p>
                                    </div>
                                    <div className="col-lg-10">
                                        <button class="btn btn-primary w-100" onClick={this.addToCart}>Thêm vào giỏ hàng</button>
                                    </div>
                                    <div className="col-lg-2">
                                        <button type="submit" class="btn btn-primary w-100"><i class="bi bi-heart"></i></button>
                                    </div>
                                </div>
                                <div className="row pt-5">
                                    <div className='col-12'>
                                        <p><strong>Mô tả sản phẩm</strong></p>
                                        <ul style={{padding: 0}}>
                                            <li>Sản phẩm gồm các size: S/M/L</li>
                                            <li>Sản phẩm gồm các màu: Đỏ/Tím/Vàng</li>
                                            <li>Đây là sản phẩm được áo thun được sản xuất bởi Sges unisex</li>
                                        </ul>
                                        <p><strong>Theo dõi Sges</strong></p>
                                        <i class="bi bi-facebook pe-3"></i>
                                        <i class="bi bi-twitter pe-3"></i>
                                        <i class="bi bi-instagram pe-3"></i>
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

const mapStateToProps = state => {
    return {
        productInfo: state.productInfo
    }
}

const mapStateToDispatch = dispatch => {
    return {
        addToCart: cartItem => {
            dispatch({
                type: 'add_cart',
                cartItem: cartItem
            })
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(ProductInfo)