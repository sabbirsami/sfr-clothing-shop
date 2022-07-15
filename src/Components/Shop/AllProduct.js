import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "../Shared/Loading";

const AllProduct = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("http://localhost:5000/products").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
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
                </div>
            </div>
        </div>
    );
};

export default AllProduct;
