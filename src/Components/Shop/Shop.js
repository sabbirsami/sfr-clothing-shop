import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";

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
                        {products.map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                    <p className="text-center fs-5 fw-light pt-4">Load More</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;
