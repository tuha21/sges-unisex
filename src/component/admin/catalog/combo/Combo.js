import React from "react";
import { Link } from "react-router-dom";
import * as CgIcons from "react-icons/cg";
import Paginate from "../../paginate/Paginate";

const Combo = () => {
    return (
        <div className="admin-combo">
            <div className="container">
                <div className="py-5">
                    <div className="row g-4 align-items-center">
                        <div className="col">
                            <nav className="mb-2" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link to="/admin">Admin</Link>
                                    </li>
                                    <li class="breadcrumb-item" aria-current="page">
                                        <Link to="/admin/comboslist">Combos</Link>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Combo
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Combo</h3>
                        </div>
                        <div className="col-auto d-flex">
                            <Link className="btn btn-xoa" to="/admin/category">
                                Xóa
                            </Link>
                            <Link className="btn" to="/admin/category">
                                Lưu
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="p-3">
                                <form className="pb-4">
                                    <div className="form-group">
                                        <label htmlFor="name">
                                            <h4>Tên combo</h4>
                                        </label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={""}
                                            placeholder="VD: Streer new feed"
                                        />
                                    </div>
                                </form>
                                <h4>Mặt hàng</h4>
                                <table className="table table-striped">
                                    <thead style={{ fontWeight: "bold" }}>
                                        <tr>
                                            <td style={{ paddingLeft: "20px" }}>HÌnh ảnh</td>
                                            <td>Tên mặt hàng</td>
                                            <td>Giá</td>
                                            <td width="20px"></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Hinh ảnh 1</td>
                                            <td>Sản phẩm 1</td>
                                            <td>100000</td>
                                            <td>
                                                <div className="btn">
                                                    <CgIcons.CgClose />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hinh ảnh 1</td>
                                            <td>Sản phẩm 1</td>
                                            <td>100000</td>
                                            <td>
                                                <div className="btn">
                                                    <CgIcons.CgClose />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Hinh ảnh 1</td>
                                            <td>Sản phẩm 1</td>
                                            <td>100000</td>
                                            <td>
                                                <div className="btn">
                                                    <CgIcons.CgClose />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" className="px-5">
                                                <h5>Tổng số</h5>
                                            </td>
                                            <td colSpan="2">
                                                <h4 className="text-end px-5">3</h4>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" className="px-5">
                                                <h5>Tổng tiền</h5>
                                            </td>
                                            <td colSpan="2">
                                                <h5 className="text-end px-5">300000</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2" className="px-5">
                                                <h5>Giá bán</h5>
                                            </td>
                                            <td colSpan="2">
                                                <h5 className="text-end px-5">200000</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-5">
                    <div className="col-12">
                        <div className="card">
                            <div className="p-3">
                                <div className="tbl-sanpham py-5">
                                    <h4 className="pb-4">Danh sách sản phẩm</h4>
                                    <table className="table table-striped">
                                        <thead>
                                            <th style={{ paddingLeft: "20px" }}>Image</th>
                                            <th style={{ paddingLeft: "20px" }}>Tên</th>
                                            <th style={{ paddingLeft: "20px" }}>Giá</th>
                                            <th style={{ width: "200px", paddingLeft: "20px" }}>
                                                option
                                            </th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Image</td>
                                                <td>Ao khoac Sges</td>
                                                <td>100000</td>
                                                <td>
                                                    <Link className="btn" to="#">
                                                        Thêm vào combo
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Image</td>
                                                <td>Ao khoac Sges</td>
                                                <td>100000</td>
                                                <td>
                                                    <Link className="btn" to="#">
                                                        Thêm vào combo
                                                    </Link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Image</td>
                                                <td>Ao khoac Sges</td>
                                                <td>100000</td>
                                                <td>
                                                    <Link className="btn" to="#">
                                                        Thêm vào combo
                                                    </Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Paginate />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Combo;
