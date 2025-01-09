import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import '../style.css';

const Gallery = () => {
  const [modalData, setModalData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselModalIndex, setCarouselModalIndex] = useState(0);
  const groupHeaders = ["Monuments", "HeadStone", "Weasis"];

  const keyProducts = [
    {
      img: "./assets/image1.jpg",
      description: "Small Stone Monuments are versatile, functional, and equally aesthetic pieces, often used as nameplates or smaller memorials. These compact stone structures bring the same timeless beauty and elegance as their larger counterparts but in a more personal and accessible form. Whether placed at the entrance of a home, business, or memorial site, these monuments make a lasting impression. Crafted from high-quality stone, they can be engraved with names, dates, or special messages, adding a personalized touch that is both durable and beautiful. Their size makes them adaptable for a variety of uses—from individual memorials to family nameplates, they can also serve as unique gifts or commemorative items for any occasion.",
    },
    {
      img: "./assets/image2.jpg",
      description: "Stone Accessories bring an element of natural elegance and charm to any space, transforming ordinary decor into extraordinary expressions of style. From decorative stone carvings, candle holders, and vases to small statues, these accessories offer a touch of sophistication for home, garden, or office environments. Each piece is hand-carved or polished to highlight the unique textures and colors of the stone, making it a one-of-a-kind addition to any room. The natural beauty of stone, combined with the artist's craftsmanship, creates an aesthetically pleasing and durable product that enhances the ambiance of any setting. Whether it's a decorative sculpture for a living room or a stone ornament for an outdoor garden, these accessories provide both functional and decorative value, blending seamlessly into diverse interior styles.",
    },
    {
      img: "./assets/image3.jpg",
      description: "Big Monuments are grand, meticulously crafted stone pieces that serve as timeless symbols of remembrance and honor. Typically used for cemetery monuments, they stand as powerful tributes to loved ones, offering a dignified presence in memorial spaces. These large structures, often made of durable materials like granite or marble, are designed to withstand the passage of time while maintaining their beauty. Their intricate carvings, engraved inscriptions, and majestic forms reflect both the solemnity of their purpose and the artistry of stone craftsmanship. Beyond cemeteries, Big Monuments can also be used in parks, memorials, or historic sites, adding an aura of reverence and elegance. Their imposing stature creates an atmosphere of contemplation, making them perfect for commemorating significant life events, individuals, or milestones.",
    },
  ];

  const products = [
    {
      id: 1,
      img: "./assets/download (1).jpg",
      colors: ["red", "blue", "green"],
      areas: ["US", "EU", "Asia"],
      variations: [{ color: "red", img: "./assets/download (3).jpg", region: "EU" }],
      group: 1
    },
    {
      id: 2,
      img: "./assets/download (2).jpg",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 1
    },
    {
      id: 3,
      img: "./assets/download (3).jpg",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 1
    },
    {
      id: 4,
      img: "/assets/DSC01192.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 2
    },
    {
      id: 5,
      img: "./assets/DSC01221.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 2
    },
    {
      id: 6,
      img: "./assets/DSC01323.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 2
    },
    {
      id: 7,
      img: "./assets/DSC01554.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 3
    },
    {
      id: 8,
      img: "./assets/DSC01618.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 3
    },
    {
      id: 9,
      img: "./assets/DSC02131.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [{ color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" }],
      group: 3
    }
  ];

  // Helper function to group products
  const groupProducts = (products) => {
    return products.reduce((acc, product) => {
      const group = acc[product.group - 1] || [];
      group.push(product);
      acc[product.group - 1] = group;
      return acc;
    }, []);
  };

  const groupedProducts = groupProducts(products);

  const handleNextMain = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % keyProducts.length);
  };

  const handlePrevMain = () => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + keyProducts.length) % keyProducts.length);
  };

  const handleFilter = (product) => {
    const filteredImages = product.variations.filter(
      (variation) =>
        (!selectedColor || variation.color === selectedColor) &&
        (!selectedArea || variation.region === selectedArea)
    );

    if (filteredImages.length === 0) {
      alert("No images match the selected filters.");
      return;
    }

    setModalData({ product, filteredImages });
    setCarouselModalIndex(0);
  };

  const handleNext = () => {
    if (!modalData) return;
    setCarouselModalIndex((prevIndex) => (prevIndex + 1) % modalData.filteredImages.length);
  };

  const handlePrev = () => {
    if (!modalData) return;
    setCarouselModalIndex((prevIndex) => 
      (prevIndex - 1 + modalData.filteredImages.length) % modalData.filteredImages.length
    );
  };

  const closeModal = () => {
    setModalData(null);
    setSelectedColor("");
    setSelectedArea("");
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
  {groupedProducts.map((group, groupIndex) => (
    <div key={groupIndex} className="gallery-group">
      <h2 className="group-title">{groupHeaders[groupIndex]}</h2>
      <div className="gallery-items">
        {group.map((product) => (
          <div key={product.id} className="gallery-item-wrapper">
            <img
              src={product.img}
              alt={`Product ${product.id}`}
              className="gallery-item"
            />
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      {modalData && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Filtered Images</h2>
            <div className="modal-carousel">
              <button className="carousel-btn prev" onClick={handlePrev}>&lt;</button>
              <img
                src={modalData.filteredImages[carouselModalIndex].img}
                alt={`Filtered Product - ${modalData.filteredImages[carouselModalIndex].color}`}
                className="modal-image"
              />
              <button className="carousel-btn next" onClick={handleNext}>&gt;</button>
            </div>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;