import React from "react";
import { useQuery } from "react-query";
import { TbLayoutDashboard } from "react-icons/tb";
import { FiHardDrive } from "react-icons/fi";
import { MdReviews } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Nav, Navbar } from "react-bootstrap";
import auth from "../../firebase.init";
import logo from "../../Images/logo.png";
import { Link, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardLink from "../Shared/DashboardLink";
import Loading from "../Shared/Loading";

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);

    const { data, isLoading } = useQuery("currentUser", () =>
        fetch(
            `https://creative-agency-2022.herokuapp.com/users/${user.email}`
        ).then((res) => res.json())
    );

    if (loading || isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {/* DASHBOARD HEADER START */}
            <div className="mt-2">
                <div className="container-fluid">
                    <div className="row">
                        <div className="px-4">
                            <div className="d-flex justify-content-between align-items-center pb-2">
                                <div className="col-lg-2">
                                    <Link to="/">
                                        <img
                                            className="w-50 p-3"
                                            src={logo}
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-6">
                                    <p>
                                        <small className="text-danger">
                                            * This dashboard is not fully mobile
                                            responsive yet
                                        </small>
                                    </p>
                                </div>
                                <div className="col-lg-2 d-flex justify-content-end align-items-center">
                                    <div>
                                        <h5 className="fw-semi-bold m-0 text-success">
                                            {user?.displayName}
                                        </h5>
                                        <p className="m-0">
                                            <small>{user?.email}</small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="m-0" />
            </div>
            {/* DASHBOARD MENU START */}
            <div
                className="container-fluid bg-light"
                // style={{ height: "93vh" }}
            >
                <div className="row">
                    <div className="col-lg-2 bg-white p-0">
                        <Navbar bg="white" expand="lg">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav d-block">
                                <Nav className=" m-0 d-block w-100">
                                    <DashboardLink to="/dashboard">
                                        <TbLayoutDashboard className="me-2" />{" "}
                                        Dashboard
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/service">
                                        <FiHardDrive className="me-2" /> Service
                                        list
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/manage-order">
                                        <AiOutlineShoppingCart className="me-2" />{" "}
                                        Manage Order
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/my-order">
                                        <AiOutlineShoppingCart className="me-2" />{" "}
                                        My Order
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/manage-review">
                                        <MdReviews className="me-2" /> Manage
                                        Review
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/manage-user">
                                        <FaUsers className="me-2" /> Manage User
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/add-review">
                                        <MdReviews className="me-2" /> Add
                                        Review
                                    </DashboardLink>
                                    <DashboardLink to="/dashboard/add-admin">
                                        <HiOutlineUserAdd className="me-2" />{" "}
                                        Add Admin
                                    </DashboardLink>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                    <div
                        className="col-lg-10"
                        style={{ height: "91vh", backgroundColor: "#F4F7FC" }}
                    >
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
