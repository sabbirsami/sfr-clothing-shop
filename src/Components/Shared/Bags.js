import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "./Loading";

const Bags = () => {
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("categoryBags", () =>
        fetch(`http://localhost:5000/allproducts/Bag`, {
            method: "GET",
        }).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }
    console.log(products);
    return (
        <div>
            <div className="container pt-4">
                <p className="d-flex align-items-center justify-content-between">
                    <h1 className="display-6">Bags</h1>
                    <p className="text-warning">See All</p>
                </p>
                <div className="row"></div>
            </div>
            <div className="container">
                <div className="pb-3">
                    <div className="row">
                        {products.slice(0, 8).map((product, index) => (
                            <Product key={index} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bags;