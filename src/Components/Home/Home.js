import React from "react";
import Cloth from "../Shared/Cloth";
import Header from "../Shared/Header";
import Shoes from "../Shared/Shoes";
import Benefit from "./Benefit";
import Categories from "./Categories";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Offer from "./Offer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <Categories />
            <Cloth />
            <Shoes />
            <FeaturedProduct />
            <Benefit />
            <Offer />
            <Newsletter />
        </>
    );
};

export default Home;
