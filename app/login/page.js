 "use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from "react";
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

console.log("Submitted Data:", formData);

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.username || !formData.email || !formData.password) {
    alert("Please fill in all required fields.");
    return;
  }

  const payload = {
    name: formData.name,
    email: formData.email,
    username: formData.username,
    password: formData.password,
  };

  console.log("Payload sent:", payload);

  try {
    const response = await fetch(
      "https://ca535besvd.execute-api.us-east-1.amazonaws.com/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    console.log("Raw response:", response);

    const data = await response.json();
    console.log("Response Data:", data);

    if (response.ok) {
      alert("Registration successful!");
      router.push('/Home');
    } else {
      alert("Registration failed: " + (data.error || "Unknown error"));
    }
  } catch (error) {
    console.error("Error posting data:", error);
    alert("Failed to register, please try again.");
  }
};

const login = ()=>{
  router.push('/register');
}


  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <h2 className="mb-4 text-center">Register</h2>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your first name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Choose a username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel" // better than "phone"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
            <div className="mt-3 text-center">
              <p>
                Already have an account? <button className="btn btn-link" onClick={login}>Register</button>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
