import React from 'react';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import '../style.css'; // Import your CSS file

const Contact = () => {
  return (
    <Container className="contact-container">
      <Particle />
      <ContactForm />
      <Social />
    </Container>
  );
};

export default Contact;
