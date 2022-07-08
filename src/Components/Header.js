import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Images/logo.png";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
    return (
        <header>
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
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Shop</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#pricing">About Us</Nav.Link>
                            <Nav.Link href="#pricing">Contact</Nav.Link>
                            <Nav.Link href="#pricing">
                                <BsCart3 />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
