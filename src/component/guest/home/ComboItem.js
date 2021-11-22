import React, { Component } from 'react'
import comboService from '../../../service/comboService'

export default class ComboItem extends Component {

    render() {
        return (
            <div className="row">
                <div className='col-lg-4'>
                    <ProductItem />
                </div>
                <div className='col-lg-4'>
                    <ProductItem />
                </div>
                <div className='col-lg-4'>
                    <ProductItem />
                </div>
            </div>
        )
    }
}
