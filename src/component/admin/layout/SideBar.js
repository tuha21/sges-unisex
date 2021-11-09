import React from "react";
import { Link } from "react-router-dom";
import "../../../css/sidebar/sidebar.css";
import { SideBarData } from "./SideBarData";
import SubMenu from "./SubMenu";

const SideBar = () => {
    return (
        <div className="sider-bar">
            <div className="logo">
                <img
                    src="https://cf.shopee.vn/file/1265e20f9125287026827a9a5024d2d1_tn"
                    alt=""
                    style={{ height: "40px" }}
                />
                <span>SGES</span>
                <span className="span2">ADMIN</span>
            </div>
            <div className="menu">
                <div className="catalog">
                    <p className="menu-sub-title">Application</p>
                    <ul className="menu-sub-list">
                        {SideBarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
