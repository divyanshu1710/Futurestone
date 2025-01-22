import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { FaVk } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"; // Instagram Icon
import { BsWhatsapp } from "react-icons/bs"; // WhatsApp Icon


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  About <span className="yellow">Us</span>
                </h1>
                <p className="home-about-body">
                  Two decades ago, Future Stone Monuments began its journey with a bold vision: to seamlessly blend the timelessness of tradition with the possibilities of innovation. Our unwavering commitment to quality and craftsmanship has made us pioneers in the industry, delivering authentic and exquisite stone monuments to clients in over 10 countries worldwide.
                  
                  From majestic landmarks that define landscapes to personalized headstones that honor cherished memories, every piece we create is a testament to artistry and precision. We understand that each monument tells a unique story – your story – and we ensure it stands the test of time.
                  
                  Our range includes timeless headstones, intricate monuments, and thoughtfully designed accessories like vases and plaques, each crafted to enhance and personalize the experience. With a futuristic approach and an authentic touch, we are redefining what it means to leave a lasting legacy.
                  
                  At Future Stone Monuments, we don’t just create monuments; we build connections to the past, present, and future. Authentic. Innovative. Unmatched.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src= "../assets/dalle.png" className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND US ON</h1>
                <p>
                  Please don't hesitate to reach out to us and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://vk.com/fortunemonuments"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="vk"
                    >
                      <FaVk />
                    </a>
                  </li>
                  {/* <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/19sajib/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li> */}
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/fortune_stonex?igsh=MTd6MmNmbGlsZTg2eg=="
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://wa.me/7300059986"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="whatsapp"
                    >
                      <BsWhatsapp />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
    );
};

export default About;
