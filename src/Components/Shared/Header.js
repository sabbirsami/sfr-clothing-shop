import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../Images/logo.png";
import { BsCart3 } from "react-icons/bs";
import CustomLink from "./CustomLink";

const Header = () => {
    return (
        <header className="sticky-top">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="white">
                <Container>
                    <Navbar.Brand href="#home">
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
                            <CustomLink to="/pricing">ABOUT US</CustomLink>
                            <CustomLink to="/pricing">CONTACT</CustomLink>
                            <CustomLink to="/pricing">
                                <BsCart3 className="mb-1 fw-semibold fs-5" />
                            </CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
