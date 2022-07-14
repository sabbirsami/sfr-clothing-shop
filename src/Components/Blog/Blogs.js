import React from "react";
import Header from "../Shared/Header";

const Blogs = () => {
    return (
        <>
            <Header />

            <div>
                <div className="container-fluid blog-bg">
                    <div className="py-5">
                        <h1 className="py-5 display-2 text-center text-white">
                            #Blogs
                        </h1>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row pt-5 mt-5">
                        <div className="col-lg-6 ">
                            <div
                                className="blog1"
                                style={{ height: "350px", width: "500px" }}
                            ></div>
                        </div>
                        <div className="col-lg-6 my-auto">
                            <h1 className="display-4">
                                The Cotton-Jersey zip-Up Hooding
                            </h1>
                            <p className="fs-5 fw-light">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ratione voluptatum aspernatur
                                ea aut error natus minima optio fuga quos
                                consectetur.
                            </p>
                            <button className="btn ps-0">
                                CONTINUE READING...
                            </button>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5">
                        <div className="col-lg-6 ">
                            <div
                                className="blog1"
                                style={{ height: "350px", width: "500px" }}
                            ></div>
                        </div>
                        <div className="col-lg-6 my-auto">
                            <h1 className="display-4">
                                The Cotton-Jersey zip-Up Hooding
                            </h1>
                            <p className="fs-5 fw-light">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ratione voluptatum aspernatur
                                ea aut error natus minima optio fuga quos
                                consectetur.
                            </p>
                            <button className="btn ps-0">
                                CONTINUE READING...
                            </button>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5">
                        <div className="col-lg-6 ">
                            <div
                                className="blog1"
                                style={{ height: "350px", width: "500px" }}
                            ></div>
                        </div>
                        <div className="col-lg-6 my-auto">
                            <h1 className="display-4">
                                The Cotton-Jersey zip-Up Hooding
                            </h1>
                            <p className="fs-5 fw-light">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ratione voluptatum aspernatur
                                ea aut error natus minima optio fuga quos
                                consectetur.
                            </p>
                            <button className="btn ps-0">
                                CONTINUE READING...
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blogs;
