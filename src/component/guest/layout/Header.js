import React, { Component } from 'react'
import TopBar from './TopBar'
import TopMenu from './TopMenu'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <TopBar/>
                <TopMenu/>
            </div>
        )
    }
}
