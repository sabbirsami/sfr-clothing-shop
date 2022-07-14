import React from "react";
import Header from "../Shared/Header";
import Benefit from "./Benefit";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Offer from "./Offer";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <FeaturedProduct />
            <Benefit />
            <Offer />
            <Newsletter />
        </>
    );
};

export default Home;
