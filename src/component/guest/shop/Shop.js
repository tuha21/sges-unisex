import React, { Component } from 'react'
import Category from '../home/Category'
import ProductItem from '../home/ProductItem';
export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productList: [],
        }
    }

    findBySubCate = (id) => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:8080/product/getBySubCate?id=" + id + "&p=0", requestOptions)
            .then(response => response.text())
            .then(result => {
                this.setState({
                    productList: JSON.parse(result).data
                })
            })
            .catch(error => console.log('error', error));
    }


    componentDidMount = () => {
        this.findBySubCate(2)
    }

    render() {

        const element = this.state.productList.map((val, ind) => {
            return <div className="col-lg-3" key={ind}><ProductItem  productItem={val}/></div>
        })
        return (
            <div>
                <Category findBySubCate={this.findBySubCate} />
                <div className="product-overview">
                    <div className="container">
                        <div className="product-filter">
                            <div className="product-overview-filter">
                                <div className="container">
                                    <div className="row content-filter">
                                        <div className="col-lg-4">
                                            <p>Sắp xếp</p>
                                            <ul>
                                                <li><a href="#">Tên sản phẩm</a></li>
                                                <li><a href="#">Giá</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4">
                                            <p>Giá</p>
                                            <ul>
                                                <li><a href="#">0-200.000 đ</a></li>
                                                <li><a href="#">200.000 - 500.000 đ</a></li>
                                                <li><a href="#">200.000 - 500.000 đ</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-list">
                        <div className="container">
                            <div className="row">
                                {element}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
