import * as React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "gatsby";
import "./header.css";

import logo from "../images/PlateItUpLogo.png"

const Header = ({ siteTitle }) => {
  return (
    <Navbar className="navbar-fixed" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} alt="logo" className="navbar-logo"/>
          <span className="ms-2">{siteTitle}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/*Links for NavBar*/}
          <Nav>
            <Nav.Link as={Link} to="/" className="highlight-hover nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/recipes" className="highlight-hover nav-link">Recipes</Nav.Link>
            <Nav.Link as={Link} to="/meal-plans" className="highlight-hover nav-link">Meal Plans</Nav.Link>
            <Nav.Link as={Link} to="/budget" className="highlight-hover nav-link">Budget</Nav.Link>
          </Nav>
          {/*Search Bar*/} {/*FIX ME: ADD FUNCTIONALITY AND MAKE IT FLUSH WITH NAVBAR*/}
          {/*<Form className="d-flex ms-auto">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>*/}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
