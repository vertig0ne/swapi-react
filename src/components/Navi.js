import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navi = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">SWAPI-React</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/films">Films</Nav.Link>
                    <Nav.Link href="/people">People</Nav.Link>
                    <Nav.Link href="/planets">Planets</Nav.Link>
                    <Nav.Link href="/species">Species</Nav.Link>
                    <Nav.Link href="/starships">Starships</Nav.Link>
                    <Nav.Link href="/vehicles">Vehicles</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navi;