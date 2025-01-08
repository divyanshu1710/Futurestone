import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Particle from "../components/Particle";
import "./../../src/style.css"


const Gallery = () => {
  const [modalData, setModalData] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouseModallIndex, setCarouseModallIndex] = useState(0);

  const products = [
    {
      id: 1,
      img: "./assets/download (1).jpg",
      colors: ["red", "blue", "green"],
      areas: ["US", "EU", "Asia"],
      variations: [
        { color: "red", img: "./assets/download (3).jpg", region: "EU" },
      ],
    },
    {
      id: 2,
      img: "./assets/download (2).jpg",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 3,
      img: "./assets/download (3).jpg",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 4,
      img: "/assets/DSC01192.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 5,
      img: "./assets/DSC01221.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 6,
      img: "./assets/DSC01323.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 7,
      img: "./assets/DSC01554.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 8,
      img: "./assets/DSC01618.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 9,
      img: "./assets/DSC02131.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 10,
      img: "./assets/DSC02173.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 11,
      img: "./assets/DSC02212.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
    {
      id: 12,
      img: "./assets/DSC02429.JPG",
      colors: ["yellow", "purple"],
      areas: ["EU", "Asia"],
      variations: [
        { color: "yellow", img: "./images/product2-yellow.jpg", region: "EU" },

      ],
    },
  ];

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
    setCarouseModallIndex((prevIndex) => (prevIndex + 1) % modalData.filteredImages.length);
  };

  const handlePrev = () => {
    if (!modalData) return;
    setCarouseModallIndex(
      (prevIndex) => (prevIndex - 1 + modalData.filteredImages.length) % modalData.filteredImages.length
    );
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prevIndex) => (prevIndex + 1) % keyProducts.length);
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [keyProducts.length])
  return (

    <div>

      {/* Carousel Section */}
<div className="carousel-container">
  <button className="carousel-btn prev" onClick={handlePrevMain}>
    &lt;
  </button>
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
  <button className="carousel-btn next" onClick={handleNextMain}>
    &gt;
  </button>
</div>

      {/* Gallery Section */}
      <div>
        <h1 className="headingSkill">Products Galleria</h1>
        <div className="gallery-item-container">
          {products.map((product) => (
            <div key={product.id}>
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
                src={modalData.filteredImages[carouseModallIndex].img}
                alt={`Filtered Product - ${modalData.filteredImages[carouseModallIndex].color}`}
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
    <div  className="about-section">
      {/* <Particle /> */}
      <div>
        {/* <h1 className="project-heading">
          My <strong className="yellow">Gallery</strong>
        </h1> */}
        <Gallery />
      </div>
    </div>
  );
};

export default Skillset;
