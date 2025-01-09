import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import logo from "../../assets/about11.png"
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <span>Dedicated to creating impactful solutions!</span>
        </Col>
        <Col md="4" className="footer-copywright">
          <span>Copyright © {year}</span>
          {/* Added onClick to the logo */}
          <img
            src={logo}
            className="img-fluid logo"
            alt="brand"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer" }} // Adds a pointer cursor to indicate it's clickable
          />
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://twitter.com/19sajib"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/19sajib/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp link
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/yourusername/" // Replace with your Instagram link
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
