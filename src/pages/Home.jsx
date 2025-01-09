import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from '../assets/about11.png';
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Type from '../components/Home/Type';

const Home = () => {
  const videoRef = useRef(null); // Reference to the video element

  useEffect(() => {
    const videoElement = videoRef.current;

    // Intersection Observer API to play/pause video on visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play(); // Play the video when it comes into view
          } else {
            videoElement.pause(); // Pause the video when it goes out of view
          }
        });
      },
      { threshold: 0.5 } // Trigger when at least 50% of the video is in view
    );

    if (videoElement) {
      observer.observe(videoElement); // Start observing the video element
    }

    // Cleanup the observer
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section>
      {/* Full-Screen Home Section */}
      <div className="home-section" id="home" style={{ height: "100vh", display: "flex", alignItems: "center" }}>
        <Container fluid>
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  Welcome
                  <strong className="main-name"> to World of Futurestone</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{
                    maxHeight: "450px",
                    filter: "drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.5))", // Adds shadow around the image shape
                  }}
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </div>

      {/* Video Section */}
      <div className="video-section" style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
        <video
          ref={videoRef}
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src="./assets/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <About />
    </section>
  );
};

export default Home;


