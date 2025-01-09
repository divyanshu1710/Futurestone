import React, { useState, useEffect } from "react";
import '../style.css';

const Gallery = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expandedGroups, setExpandedGroups] = useState([]); // Tracks expanded groups
  const groupHeaders = ["Monuments", "HeadStone", "Weasis"];

  const keyProducts = [
    {
      img: "./assets/image1.jpg",
      description: "Small Stone Monuments are versatile, functional, and equally aesthetic pieces, often used as nameplates or smaller memorials. These compact stone structures bring the same timeless beauty and elegance as their larger counterparts but in a more personal and accessible form. Whether placed at the entrance of a home, business, or memorial site, these monuments make a lasting impression.",
    },
    {
      img: "./assets/image2.jpg",
      description: "Stone Accessories bring an element of natural elegance and charm to any space, transforming ordinary decor into extraordinary expressions of style. From decorative stone carvings, candle holders, and vases to small statues, these accessories offer a touch of sophistication for home, garden, or office environments.",
    },
    {
      img: "./assets/image3.jpg",
      description: "Big Monuments are grand, meticulously crafted stone pieces that serve as timeless symbols of remembrance and honor. Typically used for cemetery monuments, they stand as powerful tributes to loved ones, offering a dignified presence in memorial spaces.",
    },
  ];

  const products = [
    { id: 1, img: "./assets/download (1).jpg", colors: ["red", "blue", "green"], areas: ["US", "EU", "Asia"], group: 1 },
    { id: 2, img: "./assets/download (2).jpg", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 3, img: "./assets/download (3).jpg", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1 },
    { id: 4, img: "./assets/DSC01192.JPG", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 5, img: "./assets/DSC01221.JPG", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 6, img: "./assets/DSC01323.JPG", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2 },
    { id: 7, img: "./assets/DSC01554.JPG", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 8, img: "./assets/DSC01618.JPG", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
    { id: 9, img: "./assets/DSC02131.JPG", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3 },
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
    }, 10000);
    return () => clearInterval(interval);
  }, [keyProducts.length]);

  return (
    <div className="gallery-container">
      {/* Main Carousel */}
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={handlePrevMain}>&lt;</button>
        <div className="carousel-image-container">
          <img
            src={keyProducts[carouselIndex].img}
            alt={`Key Product ${carouselIndex + 1}`}
            className="carousel-image"
          />
          <div className="carousel-overlay">
            <h2>
              {carouselIndex === 0
                ? "Small Stone Monuments"
                : carouselIndex === 1
                ? "Stone Accessories"
                : "Big Stone Monuments"}
            </h2>
            <p>{keyProducts[carouselIndex].description}</p>
          </div>
        </div>
        <button className="carousel-btn next" onClick={handleNextMain}>&gt;</button>
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
