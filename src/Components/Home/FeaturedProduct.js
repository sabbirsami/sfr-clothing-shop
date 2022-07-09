import React from "react";
import { useQuery } from "react-query";
import { HiOutlineMinus } from "react-icons/hi";
import Product from "./Product";

const FeaturedProduct = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("http://localhost:5000/products").then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading</p>;
    }

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
                <div className="py-3">
                    <div className="row">
                        {products.slice(0, 8).map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                    <p className="text-center fs-5 fw-light pt-4">Load More</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;
