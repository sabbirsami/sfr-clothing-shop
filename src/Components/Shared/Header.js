import React, { useState } from "react";
import { Navbar, Container, Nav, InputGroup, Form } from "react-bootstrap";
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
                    <Navbar.Brand className=" m-0 w-15" href="">
                        <div className=" w-15 m-0">
                            <Link to="/" className="m-0">
                                <img
                                    className="img-fluid w-100 pb-1"
                                    src={logo}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </Navbar.Brand>
                    <InputGroup
                        className="mx-5 d-none d-lg-flex rounded-0"
                        size="lg"
                    >
                        <Form.Control
                            className=" rounded-0 py-2"
                            placeholder="Search your product..."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button
                            variant="outline-secondary text-light bg-common"
                            className=" rounded-0"
                            id="button-addon2"
                        >
                            Search
                        </Button>
                    </InputGroup>
                    <div className="d-flex align-item-center">
                        <div
                            className="me-4 d-flex align-item-center"
                            title="Cart"
                        >
                            <CustomLink
                                to="/shipping-bag"
                                className="position-relative d-flex align-items-center  ms-2"
                            >
                                <BsCart3 className=" ms-2 fw-semibold fs-3" />
                                <span class="position-absolute top-0 start-100  badge rounded-pill bg-danger">
                                    {allOrders.count}
                                    <span class="visually-none">
                                        unread messages
                                    </span>
                                </span>
                            </CustomLink>
                        </div>

                        <div className="border ms-2">
                            {values.map((v, idx) => (
                                <Button
                                    title="Menu"
                                    key={idx}
                                    className=" border-0 btn-outline-none btn-light fs-3"
                                    onClick={() => handleShow(v)}
                                >
                                    <AiOutlineMenu className="mb-1" />
                                    {typeof v === "string" &&
                                        `below ${v.split("-")[0]}`}
                                </Button>
                            ))}
                        </div>

                        <Modal
                            show={show}
                            fullscreen={fullscreen}
                            onHide={() => setShow(false)}
                        >
                            <Modal.Header
                                className="border-0 p-5 m-lg-5 text-dark"
                                closeButton
                            ></Modal.Header>
                            <Modal.Body className="d-flex align-items-start">
                                <Nav className="mx-auto col-lg-6 text-start pe-5">
                                    <CustomLink
                                        className="display-6  item-hover text-decoration-none pb-2"
                                        to="/"
                                    >
                                        <GoPrimitiveDot className="visually-none" />{" "}
                                        HOME
                                    </CustomLink>
                                    <CustomLink
                                        className="display-6  item-hover text-decoration-none pb-2"
                                        to="/contact"
                                    >
                                        <GoPrimitiveDot className="visually-none" />{" "}
                                        CONTACT
                                    </CustomLink>
                                    <CustomLink
                                        className="display-6  item-hover text-decoration-none pb-2"
                                        to="/about"
                                    >
                                        <GoPrimitiveDot className="visually-none" />{" "}
                                        ABOUT
                                    </CustomLink>

                                    <CustomLink
                                        className="display-6  item-hover text-decoration-none pb-2"
                                        to="/shop"
                                    >
                                        <GoPrimitiveDot className="visually-none" />{" "}
                                        SHOP
                                    </CustomLink>

                                    <CustomLink
                                        className="display-6  item-hover text-decoration-none pb-2"
                                        to="/dashboard"
                                    >
                                        <GoPrimitiveDot className="visually-none" />{" "}
                                        DASHBOARD
                                    </CustomLink>

                                    <CustomLink
                                        className="display-6  item-hover text-decoration-none pb-2"
                                        to="/blogs"
                                    >
                                        <GoPrimitiveDot className="visually-none" />{" "}
                                        BLOGS
                                    </CustomLink>

                                    {user ? (
                                        <button
                                            style={{
                                                backgroundColor: "#58468c",
                                            }}
                                            onClick={logout}
                                            className="btn fs-3 text-light col-lg-3  mt-5 fw-semibold p-0 rounded-5"
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
