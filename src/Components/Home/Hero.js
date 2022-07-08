import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="container-fluid hero-bg">
                <div className="container py-5">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 py-lg-5">
                            <h1 className="display-2 pt-4 col-lg-10 fw-bold">
                                New, <span className="fs-stock">Amazing</span>{" "}
                                Stuff is Here
                            </h1>
                            <p className="text-muted pb-3 pb-lg-5">
                                Shop today and get{" "}
                                <span className="text-dark">20% discount</span>
                            </p>
                            <button className="btn mb-lg-5 mb-5 btn-danger px-5 rounded-0">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
