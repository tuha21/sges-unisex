import React from "react";
import "../../../css/topbar/topbar.css";

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="row">
                <div className="col-lg-6 d-flex">
                    <div className="search-group">
                        <i className="fas fa-search btn btn-search"></i>
                        <input className="txt-search" type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="col-lg-6 text-end">
                    <div className="account">
                        <img
                            className="avatar"
                            src="https://demo.dashboardpack.com/kero-html-sidebar-pro/assets/images/avatars/3.jpg"
                            alt="This is avatar"
                        />
                        <i class="fas fa-angle-down"></i>
                        <div className="account-action">
                            <button className="btn btn-warning">Logout</button>
                            <button className="btn btn-warning">Change Password</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
