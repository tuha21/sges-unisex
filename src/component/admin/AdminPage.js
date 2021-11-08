import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./layout/SideBar";
import TopBar from "./layout/TopBar";
import "../../css/adminpage/adminpage.css";
import CategoryList from "./catalog/category/CategoryList";

const AdminPage = () => {
    return (
        <div className="main">
            <Router>
                <SideBar />
                <TopBar />
                <div className="content">
                    {/* <Route exact path="/">
                        <Dashboard />
                    </Route> */}
                    <Route path="/admin/categorieslist">
                        <CategoryList />
                    </Route>
                    {/* <Route path="/categoryDetail">
                        <CategoryDetail />
                    </Route> */}
                </div>
            </Router>
        </div>
    );
};

export default AdminPage;
