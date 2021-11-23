import React from "react";
import { Link } from "react-router-dom";
import * as CgIcons from "react-icons/cg";

const Roles = () => {
    return (
        <div className="admin-roles">
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
                                        roles
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Phân quyền</h3>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row p-2">
                    <div className="col-4">
                        <span>
                            <h5>Phân quyền vai trò chi tiết</h5>
                        </span>
                        Thêm mới vai trò cho tài khoản để quản lý nhân viên cửa hàng
                    </div>
                    <div className="col-8">
                        <div className="card p-4">
                            <div className="d-grid">
                                <label htmlFor="role">Tên vai trò</label>
                                <div className="py-3 d-flex">
                                    <input
                                        id="role"
                                        type="text"
                                        className="w-100"
                                        style={{
                                            height: "42px",
                                            lineHeight: "42px",
                                        }}
                                    />
                                    <div
                                        className="btn px-4"
                                        style={{
                                            backgroundColor: "#068cc1",
                                            color: "#fff",
                                            marginLeft: "20px",
                                            height: "42px",
                                        }}
                                    >
                                        Lưu
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid pt-3">
                                <div className="btn text-start">
                                    <div className="row">
                                        <div className="col-11">
                                            <span>Staff</span>
                                        </div>
                                        <div className="btn col-auto">
                                            <CgIcons.CgMoreVerticalAlt />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn text-start">
                                    <div className="row">
                                        <div className="col-11">
                                            <span>Manager</span>
                                        </div>
                                        <div className="btn col-auto">
                                            <CgIcons.CgMoreVerticalAlt />
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="btn text-start">
                                    <div className="row">
                                        <div className="col-11">
                                            <span>Admin</span>
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

export default Roles;
