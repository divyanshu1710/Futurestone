import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"; // Instagram Icon
import { BsWhatsapp } from "react-icons/bs"; // WhatsApp Icon
import './Social.css';

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
      <Row>
        <Col md={12} className="contact-social">
          <div className='contact-text'>
            <h1>FIND Us ON</h1>
            <p>
              Please don't hesitate to reach out to Us and <span className="yellow">connect.</span>
            </p>
          </div>
          <ul className="contact-social-links">
            <li className="contact-icons">
              <a
                href="https://twitter.com/19sajib"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.linkedin.com/in/19sajib/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://www.instagram.com/yourusername/"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="contact-icons">
              <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noreferrer"
                className="icon-color contact-social-icons"
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Social;
