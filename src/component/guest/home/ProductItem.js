import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ProductItem extends Component {
    setProductInfo = () => {
        const { productItem } = this.props;
        this.props.setProductInfo(productItem);
    };

    render() {
        const { productItem } = this.props;
        return (
            <div className="product-item">
                <img src="https://cf.shopee.vn/file/8fe6c485c0d9c6521a3ccd00d4201aa3" />
                <div className="product-item-action">
                    <button>Quick View</button>
                </div>
                <div className="product-info pt-2">
                    <Link onClick={this.setProductInfo} className="product-name" to="/sges/product-detail">
                        {productItem.name}
                    </Link>
                    <div className="row">
                        <div className="col-lg-10">
                            <p className="product-price">{productItem.price} đ</p>
                        </div>
                        <div className="col-lg-2">
                            <p className="product-price text-end">
                                <i class="bi bi-heart"></i>
                            </p>
                        </div>
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
                type: "set_product_info",
                product,
            });
        },
    };
};

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, mapStateToDispatch)(ProductItem);
