import React from "react";
import { Link } from "react-router-dom";
import { FilterData } from "./FilterData";
import { ProductData } from "./ProductData";

const ProductList = () => {
    return (
        <div className="admin-product">
            <div className="container-fluid">
                <div className="p-4">
                    <div className="row g-4 align-items-center">
                        <div className="col">
                            <nav className="mb-2" aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="/admin">Admin</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Products
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Products</h3>
                        </div>
                        <div className="col-auto d-flex">
                            <Link className="btn" to="/admin/product">
                                New Product
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-2">
                            <div className="card">
                                <div className="filter">
                                    <span>Filter</span>
                                </div>
                                <hr />
                                <div className="p-3">
                                    <span className="filter-by">Category</span>
                                    <div className="form-check py-1">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="1"
                                        />
                                        <label className="form-check-label" for="1">
                                            Short Pants
                                        </label>
                                    </div>
                                </div>
                                {FilterData.map((val, idx) => {
                                    return (
                                        <div className="p-3">
                                            <div className="dropdown-divider"></div>
                                            <span className="filter-by">{val.title}</span>
                                            <form>
                                                <div className="form-group d-flex align-items-center py-1">
                                                    <label htmlFor={val.idf} className="col-3">
                                                        Từ
                                                    </label>
                                                    <input
                                                        className="form-control p-1"
                                                        id={val.idf}
                                                        type={val.type}
                                                        value={val.valuef}
                                                    />
                                                </div>
                                                <div className="form-group d-flex align-items-center py-1">
                                                    <label htmlFor={val.idf} className="col-3">
                                                        Đến
                                                    </label>
                                                    <input
                                                        className="form-control p-1"
                                                        id={val.idt}
                                                        type={val.type}
                                                        value={val.valuet}
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="card p-2">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            data-bs-toggle="tab"
                                            aria-current="page"
                                            href="#"
                                        >
                                            Tất cả
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#">
                                            Đang hoạt động
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#">
                                            Đã ẩn
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#">
                                            Đã hết
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#">
                                            Giảm giá
                                        </a>
                                    </li>
                                </ul>
                                <div className="p-2">
                                    <form className="p-3">
                                        <div className="form-group">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                            <input
                                                id="name"
                                                type="text"
                                                placeholder="Tìm kiếm theo tên sản phẩm..."
                                            />
                                        </div>
                                    </form>
                                    <div className="px-3">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Image</th>
                                                    <th scope="col">Tên sản phẩm</th>
                                                    <th scope="col">Phân loại</th>
                                                    <th scope="col">Giá</th>
                                                    <th scope="col">Giảm giá</th>
                                                    <th scope="col">Kho hàng</th>
                                                    <th scope="col">Lượt truy cập</th>
                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ProductData.map((val, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{val.image}</td>
                                                            <td>{val.name}</td>
                                                            <td>{val.category}</td>
                                                            <td>{val.price}</td>
                                                            <td>{val.sale}</td>
                                                            <td>{val.quantity}</td>
                                                            <td>{val.view}</td>
                                                            <td>
                                                                <Link className="btn" to="#">
                                                                    Edit
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
