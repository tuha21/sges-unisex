import React from "react";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as SiIcons from "react-icons/si";
import * as BsIcons from "react-icons/bs";
import * as VscIcons from "react-icons/vsc";

export const SideBarData = [
    {
        title: "Tổng quan",
        path: "/admin/dashboard",
        icon: <AiIcons.AiOutlineDashboard />,
    },
    {
        title: "Báo cáo",
        path: "#",
        icon: <SiIcons.SiDatabricks />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Báo cáo doanh thu",
                path: "/admin/reports-revenue",
            },
            {
                title: "Báo cáo mặt hàng",
                path: "/admin/reports-products",
            },
            {
                title: "Báo cáo kho hàng",
                path: "/admin/reports-inventory",
            },
            {
                title: "Báo cáo mặt hàng",
                path: "/admin/reports-products",
            },
        ],
    },
    {
        title: "Hóa đơn",
        path: "/admin/orders",
        icon: <AiIcons.AiOutlineShoppingCart />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
    },
    {
        title: "Sản phẩm",
        path: "#",
        icon: <SiIcons.SiDatabricks />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Danh sách sản phẩm",
                path: "/admin/productslist",
            },
            {
                title: "Danh mục",
                path: "/admin/categorieslist",
            },
            {
                title: "Combo",
                path: "/admin/combos",
            },
        ],
    },
    {
        title: "Nhân viên",
        path: "#",
        icon: <SiIcons.SiDatabricks />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Danh sách nhân viên",
                path: "/admin/staffs",
            },
            {
                title: "Vai trò nhân viên",
                path: "/admin/role",
            },
        ],
    },
    {
        title: "Khách hàng",
        path: "#",
        icon: <FiIcons.FiUsers />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Danh sách khách hàng",
                path: "/admin/customerslist",
            },
            {
                title: "Nhóm khách hàng",
                path: "/admin/customersgroup",
            },
        ],
    },

    {
        title: "Khuyến mại",
        path: "/admin/events",
        icon: <RiIcons.RiCoupon3Line />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
    },
    {
        title: "Trò chuyện",
        path: "/admin/inbox",
        icon: <AiIcons.AiOutlineMail />,
    },
    {
        title: "Phản hồi",
        path: "/admin/feedback",
        icon: <VscIcons.VscFeedback />,
    },
];
