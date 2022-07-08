import React from "react";
import offer1 from "../../Images/products/banner/b17.jpg";
import offer2 from "../../Images/products/banner/b10.jpg";

const Offer = () => {
    return (
        <div>
            <div className="container pb-5">
                <div className="row">
                    <div className="col-lg-6 ps-lg-0">
                        <div className=" position-relative">
                            <img className="w-100" src={offer1} alt="" />

                            <div className="position-absolute top-50 start-0 translate-middle-y">
                                <div className="ps-5">
                                    <h4 className="mb-0 fw-light">
                                        Crazy deals
                                    </h4>
                                    <h1>Buy 1 get 1 free</h1>
                                    <p>
                                        The best classic dress is on sale at
                                        cara
                                    </p>
                                    <button className="btn btn-outline-white border-1 border-dark rounded-0">
                                        Load More
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 pe-lg-0">
                        <div className=" position-relative">
                            <img className="w-100" src={offer2} alt="" />

                            <div className="position-absolute top-50 start-0 translate-middle-y">
                                <div className="ps-5 text-white">
                                    <h4 className="mb-0 fw-light">
                                        Spring/Summer
                                    </h4>
                                    <h1>Upcoming season</h1>
                                    <p>
                                        The best classic dress is on sale at
                                        cara
                                    </p>
                                    <button className="btn btn-outline-white text-white border-1 border-white rounded-0">
                                        Collection
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
