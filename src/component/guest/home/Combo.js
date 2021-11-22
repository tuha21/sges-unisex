import React, { Component } from 'react'
import comboService from '../../../service/comboService'

export default class Combo extends Component {

    constructor(props){
        super(props)
        this.state = {
            comboList: []
        }
    }

    componentDidMount = () => {
        this.findAllCombo()
    }

    findAllCombo = () => {
        comboService.getAll(0, 10000)
        .then(response => response.text())
        .then(result => {
            this.setState({
                comboList: JSON.parse(result).data
            })
        })
        .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div className="container">
                
            </div>
        )
    }
}
