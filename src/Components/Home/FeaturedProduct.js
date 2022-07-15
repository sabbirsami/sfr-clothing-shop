import React from "react";
import { useQuery } from "react-query";
import { HiOutlineMinus } from "react-icons/hi";
import Product from "./Product";
import Loading from "../Shared/Loading";

const FeaturedProduct = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("http://localhost:5000/products").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            <div className="container pb-5">
                <div className="pt-3 pb-2">
                    <h1 className="display-5">Featured Products</h1>
                    <p className="fs-4 fw-light">
                        Summer Collection New Modern Design <HiOutlineMinus />
                    </p>
                </div>
                <div className="py-3">
                    <div className="row">
                        {products.slice(1, 5).map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                    <p className="text-center fs-5 fw-light pt-4">Show All</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
