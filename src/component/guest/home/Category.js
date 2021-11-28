import React, { Component } from 'react'

export default class Category extends Component {

    render() {
        return (
            <div className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="category-item" onClick={() => {
                                this.props.findBySubCate(2)
                            }}>
                                <p>Quần</p>
                                <img src="https://cf.shopee.vn/file/62c803ff4a2089888643bb168a8f094d" alt="jsx-a11y/img-redundant-alt" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category-item" onClick={() => {
                                this.props.findBySubCate(1)
                            }}>
                                <p>Áo</p>
                                <img src="https://cf.shopee.vn/file/76a8f82d99aac00dfb9851877698e792" alt="jsx-a11y/img-redundant-alt" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category-item ps-3 pe-3" onClick={() => {
                                this.props.findBySubCate(3)
                            }}>
                                <p>Phụ kiện</p>
                                <img src="https://cf.shopee.vn/file/5b66a29c0a4c8cdff44a0541b7afd887" alt="jsx-a11y/img-redundant-alt" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
