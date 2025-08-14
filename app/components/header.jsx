'use client';
import { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export default function CustomNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-primary">
          <img
            src="/next.svg"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
            alt="Logo"
          />
          MyApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center gap-3">
            <Nav.Link href="/" className="fw-semibold">Home</Nav.Link>
            <Nav.Link href="/products" className="fw-semibold">Products</Nav.Link>
            <Nav.Link href="/services" className="fw-semibold">Services</Nav.Link>
            <Nav.Link href="/contact" className="fw-semibold">Contact</Nav.Link>

            <Button
              variant={isLoggedIn ? 'outline-danger' : 'primary'}
              onClick={() => setIsLoggedIn(!isLoggedIn)}
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
