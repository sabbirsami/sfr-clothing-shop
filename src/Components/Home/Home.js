import React from "react";
import Benefit from "./Benefit";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedProduct />
            <Benefit />
            <Newsletter />
        </>
    );
};

export default Home;
