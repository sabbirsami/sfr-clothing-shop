import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Product from "../Home/Product";
import Loading from "./Loading";

const Cloth = () => {
    const { data: products, isLoading } = useQuery("categoryCloths", () =>
        fetch(`https://sfr-clothing-store.herokuapp.com/allproducts/cloth`, {
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
                    <h1 className="display-6">Cloths</h1>
                    <Link
                        to={"/shop/cloths"}
                        className="btn-common fw-semibold text-decoration-none"
                    >
                        See All
                    </Link>
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

export default Cloth;
