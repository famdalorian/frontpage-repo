import React from "react";
import "animate.css";
import "../styles/Tabs.css";
// Import your images
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";

const Tabs = () => {
  const images = [image1, image2, image3]; // Now using imported images
  const tabtext = ["Project XXisp", "XXisp-Wallet", "XXisp Market"];
  const links = ["https://projectxxisp.com", "https://example.com/link2", "https://market.xxisp.uk"];

  return (
    <div className="tabs">
      {images.map((image, index) => (
        <div className="tab" key={index}>
          <a href={links[index]} target="_blank" rel="noopener noreferrer">
            <p className="tab-text animate__animated animate__bounceInDown">
              {tabtext[index]}
            </p>
            <img
              className="tab-image animate__animated animate__shakeX"
              src={image}
              alt={`tab-${index + 1}`}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
