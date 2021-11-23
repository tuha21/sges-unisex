import React from "react";
import { Link } from "react-router-dom";
import Paginate from "./../../paginate/Paginate";

const Combos = () => {
    const tr = () => {
        return (
            <tr style={{ cursor: "pointer" }}>
                <td style={{ width: "20%" }}>Combo 1</td>
                <td style={{ width: "20%" }}>100000</td>
                <td style={{ width: "20%" }}> 5</td>
                <td style={{ width: "10%" }}>Trạng thái</td>
                <td style={{ width: "6%" }}>
                    <Link className="btn" to="/admin/combo">
                        Edit
                    </Link>
                </td>
            </tr>
        );
    };
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
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Combos
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Combos</h3>
                        </div>
                        <div className="col-auto d-flex">
                            <Link className="btn" to="/admin/combo">
                                New Combo
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card container">
                    <div className="p-4">
                        <form>
                            <div className="form-group">
                                <i className="fa fa-search" aria-hidden="true"></i>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Tìm kiếm theo tên combo..."
                                />
                                <div className="btn">Áp dụng</div>
                            </div>
                        </form>
                    </div>
                    <div class="dropdown-divider"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên</th>
                                <th>Giá</th>
                                <th>Số lượng sản phẩm</th>
                                <th>Trạng thái</th>
                                <th>Option</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tr()}
                            {tr()}
                            {tr()}
                            {tr()}
                        </tbody>
                    </table>
                    <Paginate />
                </div>
            </div>
        </div>
    );
};

export default Combos;
