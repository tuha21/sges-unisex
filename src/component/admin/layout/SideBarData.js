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
        title: "Dasboard",
        path: "/admin/dashboard",
        icon: <AiIcons.AiOutlineDashboard />,
    },
    {
        title: "Catalog",
        path: "/admin/catalog",
        icon: <SiIcons.SiDatabricks />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Products List",
                path: "/admin/productslist",
            },
            {
                title: "Product",
                path: "/admin/product",
            },
            {
                title: "Categories List",
                path: "/admin/categorieslist",
            },
            {
                title: "Category",
                path: "/admin/category",
            },
        ],
    },
    {
        title: "Customeres",
        path: "/admin/customers",
        icon: <FiIcons.FiUsers />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Customers List",
                path: "/admin/customerslist",
            },
            {
                title: "Customer",
                path: "/admin/customer",
            },
        ],
    },
    {
        title: "Orders",
        path: "/admin/orders",
        icon: <AiIcons.AiOutlineShoppingCart />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Orders List",
                path: "/admin/orderslist",
            },
            {
                title: "Order Detail",
                path: "/admin/order",
            },
        ],
    },
    {
        title: "Events",
        path: "/admin/events",
        icon: <BsIcons.BsCalendarEvent />,
        iconClosed: <FiIcons.FiChevronLeft />,
        iconOpened: <FiIcons.FiChevronDown />,
        subNav: [
            {
                title: "Events List",
                path: "/admin/eventslist",
            },
            {
                title: "event",
                path: "/admin/event",
            },
        ],
    },
    {
        title: "Inbox",
        path: "/admin/inbox",
        icon: <AiIcons.AiOutlineMail />,
    },
    {
        title: "Feedback",
        path: "/admin/feedback",
        icon: <VscIcons.VscFeedback />,
    },
];
