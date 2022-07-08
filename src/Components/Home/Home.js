import React from "react";
import Benefit from "./Benefit";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import Newsletter from "./Newsletter";
import Offer from "./Offer";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedProduct />
            <Benefit />
            <Offer />
            <Newsletter />
        </>
    );
};

export default Home;
