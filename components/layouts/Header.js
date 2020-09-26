// React & NextJS
import React from "react";
import Link from "next/link";
// Styles
import { Navbar, Nav } from "react-bootstrap";

/**
 * Header (ou navbar) commun à toutes les pages de l'application
 * Template de react-bootstrap
 */
const Header = () => {
    return(
        <Navbar bg="light" variant="light" className={"border-bottom"} expand={"md"}>
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/favicon.ico"
                    width="auto"
                    height="30"
                    className="d-inline-block align-top"
                />
                {" The Billy App"}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href={"/"} passHref><Nav.Link>Home</Nav.Link></Link>
                    <Link href={"/map"} passHref><Nav.Link href="/map">Map</Nav.Link></Link>
                    <Link href={"#calendar"} passHref><Nav.Link>Calendar</Nav.Link></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;