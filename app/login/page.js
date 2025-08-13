"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        alert(`Please fill in the ${key} field`);
        return;
      }
    }

    try {
      const response = await fetch("https://ca535besvd.execute-api.us-east-1.amazonaws.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful!");
        router.push("/home");
      } else {
        alert("Registration failed: " + (data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("❌ Error posting data:", error);
      alert("Failed to register. Please try again.");
    }
  };

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <h2 className="mb-4 text-center">Register</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>

            <div className="mt-3 text-center">
              <p>
                Already have an account?{" "}
                <button type="button" className="btn btn-link" onClick={goToLogin}>
                  Login
                </button>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
