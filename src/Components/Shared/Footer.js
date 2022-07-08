import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaSkype,
    FaPinterest,
} from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" border-top">
            <div className="container py-5">
                <div className="row  justify-content-between">
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
            </div>
        </div>
    );
};

export default Footer;
