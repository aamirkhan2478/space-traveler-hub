import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/Images/planet.png';

const Appbar = () => (
  <BrowserRouter>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" className="img-fluid image-size" />
          Space Traveler`&apos;s Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink to="/">Rockets</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/mission">Missions</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/profile">My Profile</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </BrowserRouter>
);

export default Appbar;
