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

        const sales = this.state.saleList.map((val, ind) => {
            return <div className="col-lg-3" key={ind}><ProductItem  productItem={val}/></div>
        })

        const topview = this.state.saleList.map((val, ind) => {
            return <div className="col-lg-3" key={ind}><ProductItem  productItem={val}/></div>
        })

        return (
            <div className="product-overview p-5">
                <div className="container">
                <h2 
                        style={{
                            color: '#F36444',
                            backgroundImage: "url('https://bizweb.dktcdn.net/100/350/547/themes/812519/assets/title-line.png?1635407163743')"
                        }}
                        className='text-center'><span className='ps-5 pe-5' style={{backgroundColor: 'white'}}>SẢN PHẨM GIẢM GIÁ</span></h2>
                </div>
                <div className="product-list">
                    <div className="container">
                        <div className="row">
                            {sales}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <h2 
                        style={{
                            color: '#F36444',
                            backgroundImage: "url('https://bizweb.dktcdn.net/100/350/547/themes/812519/assets/title-line.png?1635407163743')"
                        }}
                        className='text-center'><span className='ps-5 pe-5' style={{backgroundColor: 'white'}}>SẢN PHẨM NỔI BẬT</span></h2>
                </div>
                <div className="product-list">
                    <div className="container">
                        <div className="row">
                            {topview}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
