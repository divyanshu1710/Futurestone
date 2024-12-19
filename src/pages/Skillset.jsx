import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "./../../src/style.css"


const Gallery = () => {
  const [modalData, setModalData] = useState(null);
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
        { color: "red", img: "./assets/download (3).jpg", region: "EU" },
        { color: "red", img: "./assets/download (4).jpg", region: "US" },
        { color: "red", img: "./images/product1-red-3.jpg", region: "US" },
        { color: "blue", img: "./images/product1-blue.jpg", region: "Asia" },
        { color: "green", img: "./images/product1-green.jpg", region: "US" },
      ],
    },
    {
      id: 2,
      img: "./assets/download (2).jpg",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },
        { color: "purple", img: "./images/product2-purple.jpg", region: "Asia" },
      ],
    },
  ];

  const keyProducts = [
    "./assets/download (3).jpg",
    "./assets/download (4).jpg",
    "./assets/download (5).jpg",
  ];

  const handleNextMain = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % keyProducts.length);
  };

  const handlePrevMain = () => {
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + keyProducts.length) % keyProducts.length
    );
  };

  const handleFilter = (product) => {
    console.log("Applying Filter with:", { selectedColor, selectedArea });

    const filteredImages = product.variations.filter(
      (variation) =>
        (!selectedColor || variation.color === selectedColor) &&
        (!selectedArea || variation.region === selectedArea)
    );

    console.log("Filtered Images Result:", filteredImages);

    if (filteredImages.length === 0) {
      alert("No images match the selected filters.");
      return;
    }

    setModalData({ product, filteredImages });
    setCarouselIndex(0); // Reset carousel to the first image
  };

  const closeModal = () => {
    setModalData(null);
    setSelectedColor("");
    setSelectedArea("");
  };

  

  const handleNext = () => {
    if (!modalData) return;
    setCarouselIndex((prevIndex) => (prevIndex + 1) % modalData.filteredImages.length);
  };

  const handlePrev = () => {
    if (!modalData) return;
    setCarouselIndex(
      (prevIndex) => (prevIndex - 1 + modalData.filteredImages.length) % modalData.filteredImages.length
    );
  };

  return (

    <div>

            {/* Carousel Section */}
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrevMain}>
          &lt;
        </button>
        <img
          src={keyProducts[carouselIndex]}
          alt={`Key Product ${carouselIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-btn next" onClick={handleNextMain}>
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
              className="gallery-item"
            />

            {/* Dropdown Filters */}
            <div className="filters">
              <select
                value={selectedColor}
                onChange={(e) => {
                  setSelectedColor(e.target.value);
                  console.log("Selected Color:", e.target.value);
                }}
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
                onChange={(e) => {
                  setSelectedArea(e.target.value);
                  console.log("Selected Area:", e.target.value);
                }}
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

      {/* Dialog Box for Carousel */}
      {modalData && (
        <div className="dialog-box">
          <div className="dialog-box-content">
            <h2>Filtered Images</h2>
            <div className="carousel">
              <button className="carousel-btn prev" onClick={handlePrev}>
                &lt;
              </button>
              <img
                src={modalData.filteredImages[carouselIndex].img}
                alt={`Filtered Product - ${modalData.filteredImages[carouselIndex].color}`}
                className="carousel-image"
              />
              <button className="carousel-btn next" onClick={handleNext}>
                &gt;
              </button>
            </div>
            <button className="close-btn" onClick={closeModal}>
              Close
            </button>
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
        <h1 className="project-heading">
          My <strong className="yellow">Gallery</strong>
        </h1>
        <Gallery />
      </Container>
    </Container>
  );
};

export default Skillset;
