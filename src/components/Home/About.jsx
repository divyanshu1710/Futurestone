import React from "react";
import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { FaVk } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai"; // Instagram Icon
import { BsWhatsapp } from "react-icons/bs"; // WhatsApp Icon


const About = () => {
  const { t } = useTranslation();
  return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "1.3em" }}>
                  {t('about.title')} <span className="yellow"></span>
                </h1>
                <p className="home-about-body" style={{ fontSize: "0.5em", lineHeight: "1.5" }}>
                  {t('about.body')}
                  <br/>
                  {t('monuments_description')}
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
