import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Images/logo.png";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import CustomLink from "./CustomLink";
import { useQuery } from "react-query";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    const {
        data: allOrders,
        isLoading,
        // refetch,
    } = useQuery("orders", () =>
        fetch(
            `https://sfr-clothing-store.herokuapp.com/orders/${user?.email}`,
            {
                method: "GET",
            }
        ).then((res) => res.json())
    );

    if (isLoading || loading) {
        return <p>.</p>;
    }
    const logout = () => {
        signOut(auth);
    };

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }
    return (
        <header className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
                <Container>
                    <Navbar.Brand className="w-50 m-0" href="">
                        <div className="col-lg-4">
                            <Link to="/">
                                <img
                                    className="img-fluid w-75 pb-2"
                                    src={logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <div className="d-flex">
                        <CustomLink
                            to="/shipping-bag"
                            className="position-relative d-flex align-items-center rounded-pill  ms-2"
                        >
                            <BsCart3 className=" ms-2 fw-semibold fs-3" />
                            <span class="position-absolute top-0 start-100  badge rounded-pill bg-danger">
                                {allOrders.count}
                                <span class="visually-hidden">
                                    unread messages
                                </span>
                            </span>
                        </CustomLink>
                        {values.map((v, idx) => (
                            <Button
                                key={idx}
                                className="ms-4 border-0 btn-outline-none mb-1 btn-light fs-3"
                                onClick={() => handleShow(v)}
                            >
                                <AiOutlineMenu />
                                {typeof v === "string" &&
                                    `below ${v.split("-")[0]}`}
                            </Button>
                        ))}
                        <Modal
                            show={show}
                            fullscreen={fullscreen}
                            onHide={() => setShow(false)}
                        >
                            <Modal.Header
                                className="border-0"
                                closeButton
                            ></Modal.Header>
                            <Modal.Body className="d-flex align-items-center">
                                <Nav className="mx-auto text-start pe-5">
                                    <CustomLink
                                        className="display-6 item-hover text-decoration-none pb-2"
                                        to="/"
                                    >
                                        <GoPrimitiveDot className="visually-hidden" />{" "}
                                        HOME
                                    </CustomLink>

                                    <CustomLink
                                        className="display-6 item-hover text-decoration-none pb-2"
                                        to="/shop"
                                    >
                                        <GoPrimitiveDot className="visually-hidden" />{" "}
                                        SHOP
                                    </CustomLink>
                                    <CustomLink
                                        className="display-6 item-hover text-decoration-none pb-2"
                                        to="/blogs"
                                    >
                                        <GoPrimitiveDot className="visually-hidden" />{" "}
                                        BLOGS
                                    </CustomLink>
                                    <CustomLink
                                        className="display-6 item-hover text-decoration-none pb-2"
                                        to="/about"
                                    >
                                        <GoPrimitiveDot className="visually-hidden" />{" "}
                                        ABOUT
                                    </CustomLink>
                                    <CustomLink
                                        className="display-6 item-hover text-decoration-none pb-2"
                                        to="/contact"
                                    >
                                        <GoPrimitiveDot className="visually-hidden" />{" "}
                                        CONTACT
                                    </CustomLink>
                                    <CustomLink
                                        className="display-6 item-hover text-decoration-none pb-2"
                                        to="/dashboard"
                                    >
                                        <GoPrimitiveDot className="visually-hidden" />{" "}
                                        DASHBOARD
                                    </CustomLink>

                                    {user ? (
                                        <button
                                            onClick={logout}
                                            className="btn fs-2 mt-5  fw-semibold p-0 rounded-0 btn-outline-danger"
                                        >
                                            LOG OUT
                                        </button>
                                    ) : (
                                        <CustomLink
                                            className="fs-2 text-decoration-none"
                                            to="/login"
                                        >
                                            LOG IN
                                        </CustomLink>
                                    )}
                                </Nav>
                            </Modal.Body>
                        </Modal>
                    </div>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
