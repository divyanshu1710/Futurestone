import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import ContactForm from '../components/Contact/Contact';
import Social from '../components/Contact/Social';
import '../style.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Particle />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <Container>
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">{t('contact.heroTitle')}</h1>
            <p className="contact-hero-subtitle">{t('contact.heroSubtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <Container>
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">{t('contact.formTitle')}</h2>
              <ContactForm />
            </div>

            {/* Contact Info Cards */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <FaPhone />
                  </div>
                  <h3>{t('contact.callUs')}</h3>
                </div>
                <p className="contact-info-text">{t('contact.phone')}</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <FaEnvelope />
                  </div>
                  <h3>{t('contact.emailUs')}</h3>
                </div>
                <p className="contact-info-text">{t('contact.email')}</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h3>{t('contact.visitUs')}</h3>
                </div>
                <p className="contact-info-text">{t('contact.address')}</p>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-header">
                  <div className="contact-info-icon">
                    <FaClock />
                  </div>
                  <h3>{t('contact.businessHours')}</h3>
                </div>
                <p className="contact-info-text">
                  {t('contact.hours').split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < t('contact.hours').split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Social Section */}
      <section className="contact-social-main">
        <Container>
          <Social />
        </Container>
      </section>
    </div>
  );
};

export default Contact;
