
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/about11.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const { t } = require('react-i18next').useTranslation();
  return (
    <footer className="footer" style={{ background: "#2C2C2C", color: "#fff", marginTop: "2rem" }}>
      <Container fluid style={{ padding: "2rem 0 0 0" }}>
        <Row className="text-center align-items-center" style={{ minHeight: 220 }}>
          {/* Brand/About */}
          <Col md={4} style={{ marginBottom: "1.5rem", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src={logo} alt="Fortune Stonex" style={{ height: 50, marginBottom: 10 }} />
            <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: 1, textAlign: 'center' }}>FORTUNE STONEX</span>
            <span style={{ fontSize: 13, color: "#bbb", letterSpacing: 2, textAlign: 'center' }}>Stone Exporters</span>
            <p style={{ color: "#bbb", fontSize: 13, marginTop: 10, textAlign: 'center' }}>
              Supplying India’s Finest Stone Across the Globe.<br />Your trusted partner for quality stone.
            </p>
          </Col>

          {/* Quick Links */}
          <Col md={4} style={{ marginBottom: "1.5rem", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: "#C9A86A", fontSize: 16, fontWeight: 600, marginBottom: 12, textAlign: 'center' }}>{t('footer.quickLinks')}</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: 'center' }}>
              <a href="/" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>{t('footer.home')}</a>
              <a href="/gallery" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>{t('footer.gallery')}</a>
              <a href="/blogs" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>{t('footer.blogs')}</a>
              <a href="/contact" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>{t('footer.contact')}</a>
              <a href="https://www.instagram.com/fortune_stonex?igsh=MTd6MmNmbGlsZTg2eg==" target="_blank" rel="noopener noreferrer" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>Instagram</a>
            </nav>
          </Col>

          {/* Contact Info */}
          <Col md={4} style={{ marginBottom: "1.5rem", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ color: "#C9A86A", fontSize: 16, fontWeight: 600, marginBottom: 12, textAlign: 'center' }}>{t('footer.getInTouch')}</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: 'center' }}>
              <a href="tel:+917300059986" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>+91 7300059986</a>
              <a href="mailto:fortunestonex@gmail.com" style={{ color: "#bbb", fontSize: 13, textDecoration: "none", marginBottom: 4 }}>fortunestonex@gmail.com</a>
              <div style={{ color: "#bbb", fontSize: 13, marginBottom: 4, textAlign: 'center' }}>
                Fortune Stonex, Rajasthan, India
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ borderTop: "1px solid #444", padding: "1rem 0 0 0", marginTop: 20 }}>
        <Container>
          <p style={{ textAlign: "center", color: "#bbb", fontSize: 13, margin: 0 }}>
            {t('footer.copyright', { year })}
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
