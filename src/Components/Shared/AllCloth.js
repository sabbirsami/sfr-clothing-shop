import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "./Loading";

const AllCloth = () => {
    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery("categoryCloths", () =>
        fetch(`http://localhost:5000/allproducts/cloth`, {
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
                <h1 className="display-6">Cloths</h1>
                <div className="row"></div>
            </div>
            <div className="container">
                <div className="pb-3">
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

export default AllCloth;
