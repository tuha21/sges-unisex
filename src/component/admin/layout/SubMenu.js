import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ item }) => {
    const [subNav, setSubNav] = useState(false);
    const showSubNav = () => {
        console.log(subNav);
        setSubNav(!subNav);
        console.log(subNav);
    };

    return (
        <li>
            <Link className="link" to="#" onClick={item.subNav && showSubNav}>
                <i className="first-icon">{item.icon}</i>
                <span>{item.title}</span>
                <i className="last-icon">
                    {subNav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </i>
            </Link>
            {item.subNav ? (
                <ul className="menu-sub-list-2">
                    {subNav &&
                        item.subNav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link className="link" to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            ) : null}
        </li>
    );
};

export default SubMenu;
