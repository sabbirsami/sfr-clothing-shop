import React from "react";
import { useQuery } from "react-query";
import FeaturedProduct from "./FeaturedProduct";

const Products = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("products.json").then((res) => res.json())
    );
    if (isLoading) {
        return <p>Loading</p>;
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    {products.slice(0, 3).map((product, index) => (
                        <FeaturedProduct key={index} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
