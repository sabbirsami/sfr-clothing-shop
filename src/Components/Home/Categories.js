import React from "react";
import cloth from "../../Images/categories/f9.png";
import shoe from "../../Images/categories/shoes.png";
import bag from "../../Images/categories/bag.png";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="pt-4">
            <div className="container py-4">
                <h1 className="display-6 pb-3">Categories</h1>
                <div className="row">
                    <div
                        className="col-lg-4  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop/cloth"}
                        >
                            <div className="d-flex justify-content-around align-items-center pb-2 ps-3">
                                <div className="">
                                    <h2 className="m-0">Cloth</h2>
                                </div>
                                <div className="w-25">
                                    <img className="w-100" src={cloth} alt="" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div
                        className="col-lg-4  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop/bags"}
                        >
                            <div className="d-flex justify-content-around align-items-center ps-3">
                                <div className="">
                                    <h2 className="m-0">Bags</h2>
                                </div>
                                <div className="w-25">
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
                        className="col-lg-4  mt-2 border-end bg-gradient border-light border-3 "
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <Link
                            className="text-decoration-none text-dark"
                            to={"/shop/shoes"}
                        >
                            <div className="d-flex justify-content-around align-items-center ps-3">
                                <div className="">
                                    <h2 className="m-0">Shoes</h2>
                                </div>
                                <div className="w-25">
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
