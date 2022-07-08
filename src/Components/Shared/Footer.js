import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaSkype,
    FaPinterest,
    FaRegHeart,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" border-top">
            <div className="container py-5">
                <div className="row pb-3 justify-content-between">
                    <div className="col-lg-2 d-flex align-items-center justify-content-between">
                        <p>Blog</p>
                        <p>FAQs</p>
                        <p>Contact us</p>
                    </div>
                    <div className="col-lg-2 d-flex align-items-center justify-content-end">
                        <p>
                            <FaFacebookF className="me-3" />{" "}
                            <FaTwitter className="me-3" />{" "}
                            <FaInstagram className="me-3" />{" "}
                            <FaSkype className="me-3" /> <FaPinterest />
                        </p>
                    </div>
                </div>
                <div className="row">
                    <p>
                        ©2022 All Rights Reserverd. This website is made with{" "}
                        <FaRegHeart className="text-danger" /> by{" "}
                        <span className="text-danger">SFR store</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
