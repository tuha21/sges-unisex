import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="admin-product">
            <div className="container-lg container-fluid">
                <div className="p-4">
                    <div className="row g-4 align-items-center">
                        <div className="col">
                            <nav className="mb-2" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Admin</Link>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        <Link to="#">Products</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Edit product
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Product</h3>
                        </div>
                        <div className="col-auto d-flex">
                            <Link className="btn" to="/admin/productslist">
                                Xóa
                            </Link>
                            <Link className="btn" to="/admin/productslist">
                                Lưu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-7">
                        <div className="card p-3"></div>
                    </div>
                    <div className="col-5">
                        <div className="card p-3"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
