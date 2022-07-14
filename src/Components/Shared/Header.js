import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Images/logo.png";
import { BsCart3 } from "react-icons/bs";
import CustomLink from "./CustomLink";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "./Loading";
import { signOut } from "firebase/auth";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const {
        data: allOrders,
        isLoading,
        refetch,
    } = useQuery("orders", () =>
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: "GET",
        }).then((res) => res.json())
    );

    if (isLoading || loading) {
        return <Loading />;
    }
    const logout = () => {
        signOut(auth);
    };
    return (
        <header className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
                <Container>
                    <Navbar.Brand href="">
                        <div className="w-75">
                            <img
                                className="img-fluid w-75 pb-2"
                                src={logo}
                                alt=""
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink to="/">HOME</CustomLink>
                            <CustomLink to="/shop">SHOP</CustomLink>
                            <CustomLink to="/blogs">BLOGS</CustomLink>
                            <CustomLink to="/about">ABOUT US</CustomLink>
                            <CustomLink to="/contact">CONTACT</CustomLink>
                            <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                            {user ? (
                                <button
                                    onClick={logout}
                                    className="btn fw-semibold p-0 border-0 btn-outline-none"
                                >
                                    LOG OUT
                                </button>
                            ) : (
                                <CustomLink to="/login">LOG IN</CustomLink>
                            )}
                            <CustomLink
                                to="/shipping-bag"
                                className="position-relative pb-3 rounded-pill  ms-2 pe-2"
                            >
                                <BsCart3 className="mt-2 ms-2 fw-semibold fs-5" />
                                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                    {allOrders.count}
                                    <span class="visually-hidden">
                                        unread messages
                                    </span>
                                </span>
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
