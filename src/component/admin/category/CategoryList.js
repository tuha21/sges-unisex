import React from "react";
// import CategoryItem from "./CategoryItem";
// import Paginate from "./Paginate";
import { Link } from "react-router-dom";
import "../../../css/category/category.css";
import Paginate from "../paginate/Paginate";
// import BreadCrumb from "./BreadCrumb";

const CategoryList = () => {
    const tr = () => {
        return (
            <tr style={{ cursor: "pointer" }}>
                <td style={{ width: "8%" }}>01</td>
                <td style={{ width: "8%" }}>test</td>
                <td style={{ width: "20%" }}>test</td>
                <td style={{}}> asklsdhklhsklf hsadkl hfgslkd hlks hkl</td>
                <td style={{ width: "10%" }}>test</td>
                <td style={{ width: "10%" }}>test</td>
                <td style={{ width: "6%" }}>
                    <Link className="btn" to="/admin/categories">
                        Edit
                    </Link>
                </td>
            </tr>
        );
    };

    return (
        <div className="category-list">
            <div className="container">
                <div className="py-5">
                    <div className="row g-4 align-items-center">
                        <div className="col">
                            <nav className="mb-2" aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="/admin">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        categories
                                    </li>
                                </ol>
                            </nav>
                            <h3 className="m-0">Categories</h3>
                        </div>
                        <div className="col-auto d-flex">
                            <Link className="btn" to="/admin/categorieslist">
                                New Category
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="p-4">
                        <div className="d-flex align-items-center">
                            <input
                                type="text"
                                placeholder="Search"
                                class="form-control form-control--search mx-auto"
                                id="table-search"
                            />
                        </div>
                    </div>
                    <div class="dropdown-divider"></div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th style={{}}>Id</th>
                                <th>Code</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Created</th>
                                <th>Modified date</th>
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

export default CategoryList;
