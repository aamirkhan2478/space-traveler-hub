import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../assets/Images/planet.png';
import '../assets/Styles/navbar.css';

const Appbar = () => {
  const location = useLocation();

  return (
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
              <NavLink
                to="/"
                className={
                  location.pathname === '/'
                    ? 'nav-link active-link text-primary'
                    : 'nav-link text-primary'
                }
              >
                Rockets
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/mission"
                className={
                  location.pathname === '/mission'
                    ? 'nav-link active-link text-primary'
                    : 'nav-link text-primary'
                }
              >
                Missions
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink
                to="/profile"
                className={
                  location.pathname === '/profile'
                    ? 'nav-link active-link text-primary'
                    : 'nav-link text-primary'
                }
              >
                My Profile
              </NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Appbar;
