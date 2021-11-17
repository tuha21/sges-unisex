import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideBar from "./layout/SideBar";
import TopBar from "./layout/TopBar";
import "../../css/adminpage/adminpage.css";
import CategoryList from "./catalog/category/CategoryList";
import Category from "./catalog/category/Category";
import ProductList from "./catalog/product/ProductList";
import Product from "./catalog/product/Product";
import Combos from "./catalog/combo/Combos";
import Combo from "./catalog/combo/Combo";
import Orders from "./order/Orders";

const AdminPage = () => {
    return (
        <div className="main">
            <SideBar />
            <TopBar />
            <div className="content">
                <Route path="/admin/orders">
                    <Orders />
                </Route>
                <Route path="/admin/productslist">
                    <ProductList />
                </Route>
                <Route path="/admin/product">
                    <Product />
                </Route>
                <Route path="/admin/categorieslist">
                    <CategoryList />
                </Route>
                <Route path="/admin/category">
                    <Category />
                </Route>
                <Route path="/admin/combos">
                    <Combos />
                </Route>
                <Route path="/admin/combo">
                    <Combo />
                </Route>
            </div>
        </div>
    );
};

export default AdminPage;
