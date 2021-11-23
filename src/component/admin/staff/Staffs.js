import React from "react";
import { Link } from "react-router-dom";
import * as CgIcons from "react-icons/cg";

const Staffs = () => {
    return (
        <div className="admin-staff">
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
                                        Staffs
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Danh Sách nhân viên</h3>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row p-2">
                    <div className="col-4">
                        <span>
                            <h5>Tài khoản và vai trò nhân viên</h5>
                        </span>
                        Thêm mới tài khoản nhân viên để quản lý cửa hàng thuận tiên hơn
                    </div>
                    <div className="col-8">
                        <div className="card p-4">
                            <div className="d-grid detail-staff">
                                <label htmlFor="role">Tài khoản nhân viên</label>
                                <div className="py-3 d-flex">
                                    <input
                                        id="role"
                                        type="text"
                                        className="w-100"
                                        style={{
                                            height: "40px",
                                            lineHeight: "40px",
                                        }}
                                    />
                                </div>
                                <div className="pb-2 d-grid">
                                    <select id="role" className="py-2">
                                        <option value="">Staff</option>
                                        <option value="">manager</option>
                                        <option value="">Admin</option>
                                    </select>
                                </div>
                                <div className="text-end pt-2">
                                    <div
                                        className="btn px-4"
                                        style={{
                                            backgroundColor: "#068cc1",
                                            color: "#fff",
                                            height: "42px",
                                        }}
                                    >
                                        <span>Lưu</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid pt-3">
                                <div className="pt-4">
                                    <h5>Danh sách tài khoản nhân viên</h5>
                                    <hr />
                                </div>
                                <div className="btn text-start">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <span>hoangnv23</span>
                                        </div>
                                        <div className="col-4">
                                            <span>Nguyễn Hoàng</span>
                                        </div>
                                        <div className="col-4">
                                            <span>Manager</span>
                                        </div>
                                        <div className="btn col-auto">
                                            <CgIcons.CgMoreVerticalAlt />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn text-start">
                                    <div className="row align-items-center">
                                        <div className="col-3">
                                            <span>anhha19</span>
                                        </div>
                                        <div className="col-4">
                                            <span>Hà Anh</span>
                                        </div>
                                        <div className="col-4">
                                            <span>Staff</span>
                                        </div>
                                        <div className="btn col-auto">
                                            <CgIcons.CgMoreVerticalAlt />
                                        </div>
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

export default Staffs;
