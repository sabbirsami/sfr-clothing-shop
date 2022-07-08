import React from "react";
import { HiOutlineMinus } from "react-icons/hi";

const FeaturedProduct = () => {
    return (
        <div>
            <div className="container py-5">
                <div className="py-3 text-center">
                    <h1 className="display-5">Featured Products</h1>
                    <p className="fs-4 fw-light">
                        <HiOutlineMinus /> Summer Collection New Modern Design{" "}
                        <HiOutlineMinus />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
