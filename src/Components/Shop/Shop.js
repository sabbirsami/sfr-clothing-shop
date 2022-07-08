import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import { HiOutlineMinus } from "react-icons/hi";

const Shop = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("products.json").then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading</p>;
    }
    return (
        <div>
            <div className="container">
                <div className="py-3">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="d-flex pt-5 align-items-center">
                                <div className="py-3 text-start">
                                    <h1 className="display-1 heading-font">
                                        Shop
                                    </h1>
                                    <p className="fs-5 fw-light">
                                        Summer Collection New Modern Design{" "}
                                        <HiOutlineMinus />
                                    </p>
                                </div>
                            </div>
                        </div>
                        {products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
