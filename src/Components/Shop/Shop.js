import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Home/Categories";
import Product from "../Home/Product";
import Header from "../Shared/Header";

const Shop = () => {
    return (
        <>
            <Header />
            <div>
                <div className="container-fluid shop-bg">
                    <div className="py-5">
                        <h1 className="py-5 display-2 text-center text-white text-shadow">
                            #Shop
                        </h1>
                    </div>
                </div>
                <div className="container">
                    <Categories />
                </div>
                <Outlet />
            </div>
        </>
    );
};

export default Shop;
