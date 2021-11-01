import React, { Component } from 'react'

export default class Category extends Component {
    render() {
        return (
            <div className="category">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="category-item">
                                <p>Pant</p>
                                <img src="https://cf.shopee.vn/file/76a8f82d99aac00dfb9851877698e792" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category-item">
                                <p>Shirt</p>
                                <img src="https://cf.shopee.vn/file/76a8f82d99aac00dfb9851877698e792" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="category-item">
                                <p>Accessories</p>
                                <img src="https://cf.shopee.vn/file/76a8f82d99aac00dfb9851877698e792" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
