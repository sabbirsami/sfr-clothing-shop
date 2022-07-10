import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "../Shared/Loading";

const Shop = () => {
    const { data: products, isLoading } = useQuery("products", () =>
        fetch("http://localhost:5000/products").then((res) => res.json())
    );
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <div className="container-fluid shop-bg">
                <div className="py-5">
                    <h1 className="py-5 display-2 text-center text-white text-shadow">
                        #Shop
                    </h1>
                </div>
            </div>
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

export default Shop;
