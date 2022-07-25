import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className=" hero-bg">
            <div className="container-fluid blur">
                <div className="container py-5">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 py-lg-5">
                            <h1 className="display-1 pt-4  fw-bold">
                                New,{" "}
                                <span className="linear-wipe">Amazing</span>{" "}
                                Stuff is Here...
                            </h1>
                            <p className="text-muted pb-3 fs-5 pb-lg-4">
                                Shop today and get{" "}
                                <span className="text-dark">20% discount</span>
                            </p>

                            <button className="btn mb-lg-5 mb-5 border-3 fw-semibold btn-primary text-white px-4 py-2 rounded-0">
                                Shop Now{" "}
                                <BsCart3 className="mb-1 ms-2 fw-semibold fs-5" />
                            </button>
                            <button className="btn mb-lg-5 mb-5 border-3 fw-semibold btn-outline-primary  px-4 py-2 ms-3 rounded-0">
                                <Link
                                    to="/contact"
                                    className="text-decoration-none"
                                >
                                    {" "}
                                    Contact us
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
