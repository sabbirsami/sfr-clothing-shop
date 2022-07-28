import React from "react";
import Header from "../Shared/Header";
import PageTitle from "../Shared/PageTitle";

const About = () => {
    return (
        <>
            <PageTitle title="About -"></PageTitle>
            <Header />
            <div>
                <div className="container-fluid about-bg">
                    <div className="py-5">
                        <h1 className="py-5 display-2 text-center text-white">
                            #About us
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
