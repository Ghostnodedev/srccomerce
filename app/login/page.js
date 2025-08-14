"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const RegisterPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", username: "", email: "", password: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    for (const [k, v] of Object.entries(formData)) {
      if (!v.trim()) {
        alert(`Please fill in the ${k}`);
        return;
      }
    }

    try {
      const res = await fetch("https://ca535besvd.execute-api.us-east-1.amazonaws.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Login successful");
        router.push("/");
      } else {
        alert(`Login failed: ${data.error || "Unknown error"}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={8} lg={6}>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            {["name", "username", "email", "password", "phone"].map((field) => (
              <Form.Group className="mb-3" key={field}>
                <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
                <Form.Control
                  type={field === "password" ? "password" : field === "email" ? "email" : "text"}
                  name={field}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            ))}
            <div className="d-grid">
              <Button variant="primary" type="submit">Login</Button>
              <Button variant="link" className="mt-3" onClick={() => router.push("/login")}>Login</Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
