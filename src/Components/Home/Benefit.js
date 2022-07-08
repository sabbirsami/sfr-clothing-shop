import React from "react";
import { FaTruck } from "react-icons/fa";

const Benefit = () => {
    return (
        <div>
            <div className="container">
                <div className="row mb-5">
                    <div
                        className="col-lg-3  mt-2 border-end border-light border-3 pt-4"
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <div className="d-flex align-items-center pb-2 ps-3">
                            <p>
                                <FaTruck className="fs-1 me-3 text-danger" />
                            </p>
                            <div className="mb-3">
                                <p className="m-0">FREE SHIPPING</p>
                                <small>Suffered Alteration in Some Form</small>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-3  mt-2 border-end border-light border-3 pt-4"
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <div className="d-flex align-items-center pb-2 ps-3">
                            <p>
                                <FaTruck className="fs-1 me-3 text-danger" />
                            </p>
                            <div className="mb-3">
                                <p className="m-0">FREE SHIPPING</p>
                                <small>Suffered Alteration in Some Form</small>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-3  mt-2 border-end border-light border-3 pt-4"
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <div className="d-flex align-items-center pb-2 ps-3">
                            <p>
                                <FaTruck className="fs-1 me-3 text-danger" />
                            </p>
                            <div className="mb-3">
                                <p className="m-0">FREE SHIPPING</p>
                                <small>Suffered Alteration in Some Form</small>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-lg-3  mt-2 pt-4"
                        style={{ backgroundColor: "#EFEFEF" }}
                    >
                        <div className="d-flex align-items-center pb-2 ps-3">
                            <p>
                                <FaTruck className="fs-1 me-3 text-danger" />
                            </p>
                            <div className="mb-3">
                                <p className="m-0">FREE SHIPPING</p>
                                <small>Suffered Alteration in Some Form</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;
