import React, { Component } from 'react'
import Category from './Category'
import HomeSlider from './HomeSlider'
import ProductOverView from './ProductOverView'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <HomeSlider/>
                {/* <Category/> */}
                <ProductOverView/>
            </div>
        )
    }
}
