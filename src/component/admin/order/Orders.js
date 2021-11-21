import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
    return (
        <div className="admin-order">
            <div className="container">
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
                            <Link
                                className="btn"
                                to="/admin/product"
                                style={{ backgroundColor: "#068cc1", color: "#fff" }}
                            >
                                Xuất hóa đơn
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col pb-5">
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
                                    Chờ xác nhận
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#">
                                    Chờ lấy hàng
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#">
                                    Đang giao hàng
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#">
                                    Đã giao hàng
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#">
                                    Đơn hủy
                                </a>
                            </li>
                        </ul>
                        <div className="p-2 tim-kiem">
                            <form className="p-3">
                                <div className="form-group">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Tìm kiếm hóa đơn..."
                                    />
                                    <div className="btn d-flex align-items-center">Tìm kiếm</div>
                                </div>
                            </form>
                        </div>
                        <div className="p-4">
                            <div className="text-end pb-4">
                                <div
                                    className="btn"
                                    style={{ backgroundColor: "#068cc1", color: "#fff" }}
                                >
                                    Xác nhận tất cả
                                </div>
                            </div>
                            <table className="table table-borderless table-light">
                                <thead>
                                    <tr>
                                        <th width="30%" style={{ paddingLeft: "20px" }}>
                                            Sản phẩm
                                        </th>
                                        <th>Tổng tiền</th>
                                        <th>Ngày tạo</th>
                                        <th>Trạng thái</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <td colSpan="5">
                                    <hr />
                                    <div className="p-2"></div>
                                </td>
                                <tbody>
                                    <tr
                                        style={{
                                            height: "50px",
                                            lineHeight: "50px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <td colSpan="3">
                                            Số 16, ngách 347/57 Cổ Nhuế, Cổ Nhuế 2, Bắc Từ Liêm, Hà
                                            Nội
                                        </td>
                                        <td colSpan="2">0966112738 - Nguyễn Tùng</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-4">Hình ảnh</div>
                                                <div className="col-6 d-grid">
                                                    <span>Áo thu đông 1</span>
                                                    <span>Đỏ</span>
                                                    <span>M</span>
                                                </div>
                                                <div className="col-2">x2</div>
                                            </div>
                                        </td>
                                        <td>200000</td>
                                        <td>20/11/2021</td>
                                        <td>Chờ xác nhận</td>
                                        <td>
                                            <div>
                                                <select
                                                    className="col w-100 p-2"
                                                    style={{ height: "50px", border: "none" }}
                                                >
                                                    <option value="5">Xác nhận</option>
                                                    <option value="10">Chờ lấy hàng</option>
                                                    <option value="15">Đang giao hàng</option>
                                                    <option value="15">Đã giao hàng</option>
                                                    <option value="15">Hủy</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <td colSpan="5">
                                    <hr />
                                    <div className="p-2"></div>
                                </td>
                                <tbody>
                                    <tr
                                        style={{
                                            height: "50px",
                                            lineHeight: "50px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <td colSpan="3">
                                            Số 16, ngách 347/57 Cổ Nhuế, Cổ Nhuế 2, Bắc Từ Liêm, Hà
                                            Nội
                                        </td>
                                        <td colSpan="2">0966112738 - Nguyễn Tùng</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="row">
                                                <div className="col-4">Hình ảnh</div>
                                                <div className="col-6 d-grid">
                                                    <span>Áo thu đông 1</span>
                                                    <span>Đỏ</span>
                                                    <span>M</span>
                                                </div>
                                                <div className="col-2">x2</div>
                                            </div>
                                        </td>
                                        <td>200000</td>
                                        <td>20/11/2021</td>
                                        <td>Chờ xác nhận</td>
                                        <td>
                                            <div>
                                                <select
                                                    className="col w-100 p-2"
                                                    style={{ height: "50px", border: "none" }}
                                                >
                                                    <option value="5">Xác nhận</option>
                                                    <option value="10">Chờ lấy hàng</option>
                                                    <option value="15">Đang giao hàng</option>
                                                    <option value="15">Đã giao hàng</option>
                                                    <option value="15">Hủy</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
