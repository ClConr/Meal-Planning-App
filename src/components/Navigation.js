import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

const Navigation = () => {
    return (
        <NavBar style={{backgroundColor: "#7886C7"}} expand="lg">
            <NavBar.Brand href="#home">MealPlanner</NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="../pages/recipes">Recipe Explorer</Nav.Link>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    )
}

export default Navigation;