import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation2 = () => {
  return (
    <Container>
      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
        <Navbar.Brand className="p-2 ml-5" href="#page-top">
          Start Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default Navigation2;
