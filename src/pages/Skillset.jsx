import React, { useState, useEffect } from "react";
import '../style.css';

const Gallery = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expandedGroups, setExpandedGroups] = useState([]); // Tracks expanded groups
  const groupHeaders = ["Headstone", "Coverstone", "Vases"];

    // Update key products with images instead of videos
    const keyProducts = [
      { image: "./assets/coverstone.png" },
      { image: "./assets/headstone.png" },
      { image: "./assets/vases.png" },
    ];
  

  const products = [
    { id: 1, img: "./assets/32.png", colors: ["red", "blue", "green"], areas: ["US", "EU", "Asia"], group: 3 },
    { id: 2, img: "./assets/33.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 3, img: "./assets/34.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 4, img: "./assets/35.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 5, img: "./assets/36.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 6, img: "./assets/37.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 7, img: "./assets/38.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 8, img: "./assets/39.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },

    { id: 9, img: "./assets/3.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 10, img: "./assets/6.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 11, img: "./assets/7.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 12, img: "./assets/8.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 13, img: "./assets/9.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 14, img: "./assets/10.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 15, img: "./assets/12.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 16, img: "./assets/16.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 17, img: "./assets/17.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 18, img: "./assets/18.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 19, img: "./assets/19.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 20, img: "./assets/20.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },

    { id: 21, img: "./assets/2.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 23, img: "./assets/22.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 21, img: "./assets/23.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 22, img: "./assets/24.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 23, img: "./assets/25.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 21, img: "./assets/26.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 22, img: "./assets/27.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 23, img: "./assets/28.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 21, img: "./assets/29.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 22, img: "./assets/30.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 23, img: "./assets/31.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
  ];

  const groupProducts = (products) => {
    return products.reduce((acc, product) => {
      const group = acc[product.group - 1] || [];
      group.push(product);
      acc[product.group - 1] = group;
      return acc;
    }, []);
  };

  const groupedProducts = groupProducts(products);

  const toggleExpandGroup = (groupIndex) => {
    setExpandedGroups((prev) =>
      prev.includes(groupIndex)
        ? prev.filter((index) => index !== groupIndex)
        : [...prev, groupIndex]
    );
  };

  const handleNextMain = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % keyProducts.length);
  };

  const handlePrevMain = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + keyProducts.length) % keyProducts.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % keyProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [keyProducts.length]);

  return (
    <div className="gallery-container">
      {/* Main Image Carousel */}
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrevMain}>
          &lt;
        </button>
        <div className="carousel-image-container">
          <img
            src={keyProducts[carouselIndex].image}
            alt="Carousel Image"
            className="carousel-image"
          />
        </div>
        <button className="carousel-btn next" onClick={handleNextMain}>
          &gt;
        </button>
      </div>

      {/* Gallery Groups */}
      <h1 className="gallery-title">Products Galleria</h1>
      <div className="gallery-groups">
        {groupedProducts.map((group, groupIndex) => {
          const isExpanded = expandedGroups.includes(groupIndex);
          const itemsToShow = isExpanded ? group : group.slice(0, 3); // Show all or limit to 3
          return (
            <div key={groupIndex} className="gallery-group">
              <h2 className="group-title">{groupHeaders[groupIndex]}</h2>
              <div className="gallery-items">
                {itemsToShow.map((product) => (
                  <div key={product.id} className="gallery-item-wrapper">
                    <img
                      src={product.img}
                      alt={`Product ${product.id}`}
                      className="gallery-item"
                    />
                  </div>
                ))}
              </div>
              <button
                className="see-more-btn"
                onClick={() => toggleExpandGroup(groupIndex)}
              >
                <span className="arrow">››</span>
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;