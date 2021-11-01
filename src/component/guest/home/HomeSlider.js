import React, { Component } from 'react'

export default class HomeSlider extends Component {
    render() {
        return (
            <div className="home-slider">
                <div className="container">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://cf.shopee.vn/file/b108a3d40ca10b8dcabcb6fe98f8c2ca" class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src="https://cf.shopee.vn/file/067c070a21e0c79287c6b87d2145d323" class="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
