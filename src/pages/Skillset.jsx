import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';

// Gallery Component
const Gallery = () => {
  const [modalData, setModalData] = useState(null);
  const [zoomedProduct, setZoomedProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const products = [
    {
      id: 1,
      img: "./assets/download (1).jpg",
      colors: ["red", "blue", "green"],
      areas: ["US", "EU", "Asia"],
      variations: [
        { color: "red", img: "./images/product1-red.jpg" },
        { color: "blue", img: "./images/product1-blue.jpg" },
        { color: "green", img: "./images/product1-green.jpg" },
      ],
    },
    {
      id: 2,
      img: "./assets/download (2).jpg",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg" },
        { color: "purple", img: "./images/product2-purple.jpg" },
      ],
    },
  ];

  const keyProducts = [
    "./assets/download (3).jpg",
    "./assets/download (4).jpg",
    "./assets/download (5).jpg",
  ];

  const handleNext = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % keyProducts.length);
  };

  const handlePrev = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + keyProducts.length) % keyProducts.length
    );
  };

  const handleZoom = (product) => {
    setZoomedProduct(product);
    setTimeout(() => setZoomedProduct(null), 500);
  };

  const handleFilter = (product) => {
    const filteredImages = product.variations.filter(
      (variation) =>
        (!selectedColor || variation.color === selectedColor) &&
        (!selectedArea || product.areas.includes(selectedArea))
    );

    setModalData({ ...product, filteredImages });
  };

  const closeModal = () => {
    setModalData(null);
    setSelectedColor("");
    setSelectedArea("");
  };

  return (
    <div>
      {/* Carousel Section */}
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &lt;
        </button>
        <img
          src={keyProducts[carouselIndex]}
          alt={`Key Product ${carouselIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn next" onClick={handleNext}>
          &gt;
        </button>
      </div>

      {/* Gallery Section */}
      <div className="gallery">
        {products.map((product) => (
          <div key={product.id} className="gallery-item-container">
            <img
              src={product.img}
              alt={`Product ${product.id}`}
              className={`gallery-item ${
                zoomedProduct?.id === product.id ? "zoom" : ""
              }`}
              onClick={() => handleZoom(product)}
            />

            {/* Dropdown Filters */}
            <div className="filters">
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
              >
                <option value="">Select Color</option>
                {product.colors.map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
              </select>

              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
              >
                <option value="">Select Area</option>
                {product.areas.map((area, index) => (
                  <option key={index} value={area}>
                    {area}
                  </option>
                ))}
              </select>

              <button onClick={() => handleFilter(product)}>Filter</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Section */}
      {modalData && (
        <div className="modal">
          <div className="modal-content">
            <h2>Filtered Images</h2>
            {modalData.filteredImages.length > 0 ? (
              modalData.filteredImages.map((imgData, index) => (
                <img
                  key={index}
                  src={imgData.img}
                  alt={`Filtered Product - ${imgData.color}`}
                  className="modal-image"
                />
              ))
            ) : (
              <p>No images match the selected filters.</p>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* Gallery Section */}
        <h1 className="project-heading">
          My <strong className="yellow">Gallery</strong>
        </h1>
        <Gallery />
      </Container>
    </Container>
  );
};

export default Skillset;
