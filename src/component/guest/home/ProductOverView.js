import React, { Component } from 'react'
import ProductItem from './ProductItem'
import productService from "../../../service/productService"

export default class ProductOverView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saleList : [],
            topViewList: []
        }
    }

    componentDidMount = () => {
        productService.getSaleProduct()
        .then(response => response.text())
        .then(result => {
            this.setState({
                saleList: JSON.parse(result).data
            })
        })
        .catch(error => console.log('error', error));


        productService.getTopViewProduct()
        .then(response => response.text())
        .then(result => {
            this.setState({
                topViewList: JSON.parse(result).data
            })
        })
        .catch(error => console.log('error', error));
    }

    render() {

        const element = this.state.saleList.map((val, ind) => {
            return <div className="col-lg-3" key={ind}><ProductItem  productItem={val}/></div>
        })

        return (
            <div className="product-overview p-5">
                <div className="container">
                    <h2 style={{color: '#F36444'}} className='text-center'>SẢN PHẨM GIẢM GIÁ</h2>
                </div>
                <div className="product-list">
                    <div className="container">
                        <div className="row">
                            {element}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 style={{color: '#F36444'}} className='text-center'>SẢN PHẨM NỔI BẬT</h2>
                </div>
                <div className="product-list">
                    <div className="container">
                        <div className="row">
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
