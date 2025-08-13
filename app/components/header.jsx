'use client';

import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginLogout = () => {
    setIsLoggedIn(prev => !prev);
  };

  return (
<Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="/next.svg"
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo"
          />{' '}
          MyApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          {/* Right aligned content */}
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>

            <Button
              variant={isLoggedIn ? 'outline-danger' : 'outline-primary'}
              onClick={handleLoginLogout}
              size="sm"
            >
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
