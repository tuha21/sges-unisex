import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FilterData } from "./FilterData";
import { ProductData } from "./ProductData";
import Paginate from "./../../paginate/Paginate";
import Header from "./Header";
import { HeaderData } from "./HeaderData";

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
                                    <span>Bộ lọc tìm kiếm</span>
                                </div>
                                <div className="p-3">
                                    <div className="filter-by">
                                        <span>Danh mục</span>
                                    </div>
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
                                        <div className="px-3 py-2">
                                            <div className="dropdown-divider"></div>
                                            <div className="filter-by">
                                                <span>{val.title}</span>
                                            </div>
                                            <form>
                                                <div className="form-group d-flex align-items-center">
                                                    <label htmlFor={val.idf} className="col-2">
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
                                                    <label htmlFor={val.idf} className="col-2">
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
                                <div className="filter-btn py-3 d-flex justify-content-center">
                                    <div className="btn w-75">Áp dụng</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10">
                            <div className="card p-2">
                                <ul className="nav nav-tabs my-2 filter-status">
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
                                            <div className="btn d-flex align-items-center">
                                                Tìm kiếm
                                            </div>
                                        </div>
                                    </form>
                                    <div className="p-3">
                                        <table className="table table-striped table-borderless">
                                            <thead>
                                                <tr>
                                                    <th className="px-3 text-center">
                                                        <input type="checkbox" name="select-all" />
                                                    </th>
                                                    <th scope="col">
                                                        <div
                                                            className="btn"
                                                            style={{ fontWeight: "500" }}
                                                        >
                                                            Image
                                                        </div>
                                                    </th>
                                                    {HeaderData.map((value, index) => {
                                                        return <Header item={value} key={index} />;
                                                    })}
                                                    <th>Option</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ProductData.map((val, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td className="px-3 text-center">
                                                                <input
                                                                    className=""
                                                                    type="checkbox"
                                                                    name=""
                                                                    id=""
                                                                />
                                                            </td>
                                                            <td className="px-2">{val.image}</td>
                                                            <td className="px-2">{val.name}</td>
                                                            <td className="px-2">{val.category}</td>
                                                            <td className="px-2">{val.price}</td>
                                                            <td className="px-2">{val.sale}</td>
                                                            <td className="px-2">{val.quantity}</td>
                                                            <td className="px-2">{val.view}</td>
                                                            <td>
                                                                <Link className="btn" to="product">
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
                                <Paginate />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
