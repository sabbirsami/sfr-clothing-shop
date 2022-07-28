import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "../Home/Categories";
import Header from "../Shared/Header";
import PageTitle from "../Shared/PageTitle";

const Shop = () => {
    return (
        <>
            <PageTitle title="Shop -"></PageTitle>
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
