import React, { Component } from 'react'

export default class HomeSlider extends Component {
    render() {
        return (
            <div className="home-slider">
                <div className="container">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://cf.shopee.vn/file/bc3597e9dc2b04021207902b03071b65" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="https://cf.shopee.vn/file/067c070a21e0c79287c6b87d2145d323" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
