import React from "react";
import { BsCart3 } from "react-icons/bs";

const Hero = () => {
    return (
        <div>
            <div className="container-fluid hero-bg">
                <div className="container py-5">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 py-lg-5">
                            <h1 className="display-1 pt-4  fw-bold">
                                New, <span className="fs-stock">Amazing</span>{" "}
                                Stuff is Here...
                            </h1>
                            <p className="text-muted pb-3 fs-5 pb-lg-4">
                                Shop today and get{" "}
                                <span className="text-dark">20% discount</span>
                            </p>
                            <button className="btn mb-lg-5 mb-5 border-3 btn-primary text-white border-success px-4 py-2 rounded-0">
                                Shop Now{" "}
                                <BsCart3 className="mb-1 ms-2 fw-semibold fs-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
