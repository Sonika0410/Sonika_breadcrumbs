import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BreadcrumbContainer } from "../containers/BreadcrumbContainer";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="primary"
        variant="dark"
        style={{ marginBottom: "30px" }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            Navbar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/features">
                Features
              </Nav.Link>
              <Nav.Link as={Link} to="/pricing">
                Sign Up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <BreadcrumbContainer />
        {children}
      </Container>
    </>
  );
};
