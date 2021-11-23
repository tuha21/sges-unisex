import React from "react";
import { Link } from "react-router-dom";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";

const Product = () => {
    return (
        <div className="admin-product">
            <div className="container-fluid admin-product-content">
                <div className="col-8 offset-2">
                    <div className="p-4">
                        <div className="row g-4 align-items-center">
                            <div className="col">
                                <nav className="mb-2" aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link to="/admin">Admin</Link>
                                        </li>
                                        <li className="breadcrumb-item" aria-current="page">
                                            <Link to="productslist">Products</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Edit product
                                        </li>
                                    </ol>
                                </nav>
                                <h3 className="m-0">Product</h3>
                            </div>
                            <div className="col-auto d-flex">
                                <Link className="btn" to="/admin/product">
                                    Xóa
                                </Link>
                                <Link className="btn" to="/admin/product">
                                    Lưu
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row product-detail">
                    <div className="col-8 offset-2">
                        <div className="card p-4">
                            <h4>Thông tin cơ bản</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name" className="w-100">
                                        Tên sản phẩm
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        placeholder="Nhập tên sản phẩm"
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="form-group category-select">
                                            <label htmlFor="category" className="w-100">
                                                Phân loại
                                            </label>
                                            <select className="form-select">
                                                <option selected>Áo</option>
                                                <option value="1">Quẩn</option>
                                                <option value="2">Giày</option>
                                                <option value="3">Túi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group combo-select">
                                            <label htmlFor="combo" className="w-100">
                                                Combo
                                            </label>
                                            <select className="form-select">
                                                <option selected>Combo 1</option>
                                                <option value="2">Combo 2</option>
                                                <option value="3">Combo 3</option>
                                                <option value="4">Combo 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <label for="des" class="form-label">
                                        Mô tả sản phẩm
                                    </label>
                                    <textarea class="form-control" id="des" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="card p-4 my-4">
                            <h4>Thông tin phân loại</h4>
                            <form>
                                <div className="row">
                                    <div class="form-group row">
                                        <label className="p-3">Thiết lập phân loại</label>
                                        <div class="col-sm-3">
                                            <input class="form-control" placeholder="Giá" />
                                        </div>
                                        <div class="col-sm px-0">
                                            <input class="form-control" placeholder="Kho hàng" />
                                        </div>
                                        <div class="col-sm px-0">
                                            <input
                                                class="form-control"
                                                placeholder="Số lượng tối thiểu"
                                            />
                                        </div>
                                        <div className="btn col-sm">
                                            Áp dụng cho tất cả sản phẩm
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="color" className="w-25">
                                                Màu sắc
                                            </label>
                                            <div className="form-group d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="color"
                                                    style={{ marginRight: "5px" }}
                                                />
                                                <Link className="btn mt-0" to="#">
                                                    <FiIcons.FiDelete />
                                                </Link>
                                            </div>
                                            <Link to="#" className="btn w-100">
                                                <RiIcons.RiAddCircleLine />
                                                Thêm màu sắc
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-group">
                                            <label htmlFor="size" className="w-25">
                                                Kích cỡ
                                            </label>
                                            <div className="form-group d-flex">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="size"
                                                    style={{ marginRight: "5px" }}
                                                />
                                                <Link className="btn mt-0" to="#">
                                                    <FiIcons.FiDelete />
                                                </Link>
                                            </div>
                                            <Link to="#" className="btn w-100">
                                                <RiIcons.RiAddCircleLine />
                                                Thêm kích cỡ
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="py-3">
                                <h4>Danh sách phân loại</h4>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <td style={{}}>Hình ảnh</td>
                                            <td style={{ width: "10%" }}>Màu sắc</td>
                                            <td style={{ width: "10%" }}>Kích cỡ</td>
                                            <td style={{ width: "20%" }}>Giá</td>
                                            <td style={{ width: "20%" }}>Kho hàng</td>
                                            <td style={{ width: "20%" }}>Số lượng tối thiểu</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            <td style={{}}>
                                                <input type="file" name="image" />
                                            </td>
                                            <td>Đỏ</td>
                                            <td>
                                                <tr>
                                                    <td>M</td>
                                                </tr>
                                                <tr>
                                                    <td>L</td>
                                                </tr>
                                                <tr>
                                                    <td>S</td>
                                                </tr>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="price"
                                                                placeholder="Nhập giá"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="price"
                                                                placeholder="Nhập giá"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name=""
                                                                placeholder="Nhập giá"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="quantity"
                                                                placeholder="Nhập số lượng"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="quantity"
                                                                placeholder="Nhập số lượng"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="quantity"
                                                                placeholder="Nhập số lượng"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </td>
                                            <td>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="quantity"
                                                                placeholder="Nhập số lượng"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="quantity"
                                                                placeholder="Nhập số lượng"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div class="form-group">
                                                            <input
                                                                class="form-control"
                                                                name="quantity"
                                                                placeholder="Nhập số lượng"
                                                            />
                                                        </div>
                                                    </td>
                                                </tr>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
