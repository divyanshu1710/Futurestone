import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import "../../src/style.css"; // Assuming the CSS file is named LoginPage.css

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onLogin(username, password)) {
      // Successful login logic
      alert("Logged in successfully!");
    } else {
      // Invalid login logic
      alert("Invalid username or password");
    }
  };

  return (
    <Container className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default LoginPage;




