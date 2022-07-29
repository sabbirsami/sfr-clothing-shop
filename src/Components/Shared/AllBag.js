import React from "react";
import { useQuery } from "react-query";
import Product from "../Home/Product";
import Loading from "./Loading";

const AllBag = () => {
    const { data: products, isLoading } = useQuery("categoryBags", () =>
        fetch(`https://sfr-clothing-store.herokuapp.com/allproducts/Bag`, {
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
                <h1 className="display-6">Bags</h1>
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

export default AllBag;
