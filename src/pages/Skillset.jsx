import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import '../style.css';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [expandedGroups, setExpandedGroups] = useState([]);
  
  const { t } = useTranslation();

  // get group data from translations (returns array of objects)
  const groupData = t('gallery.groups', { returnObjects: true });

  const keyProducts = [
    { image: "./assets/coverstone.png" },
    { image: "./assets/headstone.png" },
    { image: "./assets/vases.png" },
  ];

  const products = [
    { id: 1, img: "./assets/32.png", colors: ["red", "blue", "green"], areas: ["US", "EU", "Asia"], group: 3, name: "Product 1", desc: "Premium quality stone product" },
    { id: 2, img: "./assets/33.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 2", desc: "Premium quality stone product" },
    { id: 3, img: "./assets/34.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 3", desc: "Premium quality stone product" },
    { id: 4, img: "./assets/35.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 4", desc: "Premium quality stone product" },
    { id: 5, img: "./assets/36.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 5", desc: "Premium quality stone product" },
    { id: 6, img: "./assets/37.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 6", desc: "Premium quality stone product" },
    { id: 7, img: "./assets/38.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 7", desc: "Premium quality stone product" },
    { id: 8, img: "./assets/39.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 3, name: "Product 8", desc: "Premium quality stone product" },

    { id: 9, img: "./assets/3.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 9", desc: "Premium quality stone product" },
    { id: 10, img: "./assets/6.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 10", desc: "Premium quality stone product" },
    { id: 11, img: "./assets/7.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 11", desc: "Premium quality stone product" },
    { id: 12, img: "./assets/8.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 12", desc: "Premium quality stone product" },
    { id: 13, img: "./assets/9.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 13", desc: "Premium quality stone product" },
    { id: 14, img: "./assets/10.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 14", desc: "Premium quality stone product" },
    { id: 15, img: "./assets/12.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 15", desc: "Premium quality stone product" },
    { id: 16, img: "./assets/16.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 16", desc: "Premium quality stone product" },
    { id: 17, img: "./assets/17.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 17", desc: "Premium quality stone product" },
    { id: 18, img: "./assets/18.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 18", desc: "Premium quality stone product" },
    { id: 19, img: "./assets/19.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 19", desc: "Premium quality stone product" },
    { id: 20, img: "./assets/20.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 2, name: "Product 20", desc: "Premium quality stone product" },

    { id: 21, img: "./assets/2.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 21", desc: "Premium quality stone product" },
    { id: 22, img: "./assets/22.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 22", desc: "Premium quality stone product" },
    { id: 23, img: "./assets/23.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 23", desc: "Premium quality stone product" },
    { id: 24, img: "./assets/24.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 24", desc: "Premium quality stone product" },
    { id: 25, img: "./assets/25.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 25", desc: "Premium quality stone product" },
    { id: 26, img: "./assets/26.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 26", desc: "Premium quality stone product" },
    { id: 27, img: "./assets/27.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 27", desc: "Premium quality stone product" },
    { id: 28, img: "./assets/28.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 28", desc: "Premium quality stone product" },
    { id: 29, img: "./assets/29.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 29", desc: "Premium quality stone product" },
    { id: 30, img: "./assets/30.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 30", desc: "Premium quality stone product" },
    { id: 31, img: "./assets/31.png", colors: ["yellow", "purple"], areas: ["EU", "Asia"], group: 1, name: "Product 31", desc: "Premium quality stone product" },
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
      {/* Hero Section */}
      <section className="gallery-hero">
        <Container>
          <div className="gallery-hero-content">
            <h1 className="gallery-hero-title">{t('gallery.title')}</h1>
            <p className="gallery-hero-subtitle">{t('gallery.subtitle')}</p>
          </div>
        </Container>
      </section>

      {/* Featured Carousel */}
      <section className="gallery-featured">
        <Container>
          <div className="carousel-wrapper">
            <button className="carousel-btn prev" onClick={handlePrevMain}>
              ‹
            </button>
            <div className="carousel-image-container">
              <img
                src={keyProducts[carouselIndex].image}
                alt="Featured Gallery Item"
                className="carousel-image"
              />
            </div>
            <button className="carousel-btn next" onClick={handleNextMain}>
              ›
            </button>
          </div>
        </Container>
      </section>

      {/* Products Grid Sections */}
      <section className="gallery-products-section">
        <Container>
          {groupedProducts.map((group, groupIndex) => {
            const isExpanded = expandedGroups.includes(groupIndex);
            const itemsToShow = isExpanded ? group : group.slice(0, 4);
            const header = groupData[groupIndex]?.header || '';
            const subtitle = groupData[groupIndex]?.subtitle || '';
            
            return (
              <div key={groupIndex} className="gallery-group-section">
                <div className="gallery-group-header">
                  <h2 className="gallery-group-title">{header}</h2>
                  <p className="gallery-group-subtitle">{subtitle}</p>
                </div>

                <div className="gallery-products-grid">
                  {itemsToShow.map((product) => (
                    <div key={product.id} className="gallery-product-card">
                      <div className="gallery-product-image-wrapper">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="gallery-product-image"
                        />
                        <div className="gallery-product-overlay">
                          <button className="gallery-product-btn">{t('gallery.buttonViewDetails')}</button>
                        </div>
                      </div>
                      <div className="gallery-product-info">
                        <h3 className="gallery-product-name">{product.name}</h3>
                        <p className="gallery-product-desc">{product.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {group.length > 4 && (
                  <div className="gallery-group-action">
                    <button
                      className="see-more-btn"
                      onClick={() => toggleExpandGroup(groupIndex)}
                    >
                      {isExpanded ? t('gallery.seeLess', 'See Less') : t('gallery.seeMore', 'See More')}
                      <span className="arrow-icon">{isExpanded ? "‹" : "›"}</span>
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </Container>
      </section>
    </div>
  );
};

export default Gallery;