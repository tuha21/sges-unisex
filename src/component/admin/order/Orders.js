import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <div className="admin-order">
            <div className="container-fluid">
                <div className="p-4">
                    <div className="row g-4 align-items-center">
                        <div className="col">
                            <nav className="mb-2" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/admin">Admin</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Orders
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Hóa đơn</h3>
                        </div>
                        <div className="col-auto d-flex">
                            <Link className="btn" to="/admin/product">
                                Xuất hóa đơn
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
