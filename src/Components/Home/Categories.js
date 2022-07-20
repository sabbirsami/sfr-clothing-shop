import React from "react";
import cloth from "../../Images/categories/f9.png";
import shoe from "../../Images/categories/shoes.png";
import bag from "../../Images/categories/bag.png";
import all from "../../Images/categories/all.png";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="pt-4 px-2">
            <div className="container py-4">
                <h1 className="display-6 pb-3">Categories</h1>
                <div className="row">
                    <div
                        className="col-lg-3  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop"}
                        >
                            <div className="d-flex justify-content-around align-items-center pb-2 ps-3">
                                <div className="pt-2">
                                    <h2 className="m-0 fw-light fw-light">
                                        All Product
                                    </h2>
                                </div>
                                <div className="w-25 pt-2">
                                    <img className="w-100" src={all} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-lg-3  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop/cloth"}
                        >
                            <div className="d-flex justify-content-around align-items-center pb-2 ps-3">
                                <div className="pt-2">
                                    <h2 className="m-0 fw-light">Cloth</h2>
                                </div>
                                <div className="w-25 pt-2">
                                    <img className="w-100" src={cloth} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-lg-3  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop/bags"}
                        >
                            <div className="d-flex justify-content-around align-items-center ps-3">
                                <div className="">
                                    <h2 className="m-0 fw-light">Bags</h2>
                                </div>
                                <div className="w-25 pt-2">
                                    <img
                                        className="w-100 p-2 mt-1"
                                        src={bag}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-lg-3  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop/shoes"}
                        >
                            <div className="d-flex justify-content-around align-items-center ps-3">
                                <div className="pt-2">
                                    <h2 className="m-0 fw-light">Shoes</h2>
                                </div>
                                <div className="w-25 pt-2">
                                    <img className="w-100" src={shoe} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
