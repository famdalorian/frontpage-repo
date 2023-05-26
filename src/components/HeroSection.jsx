import React from 'react';
import "../styles/herosection.css";

function Herosection({ image, title, description }) {
  return (
    <div className="heroContainer">
      <div className="heroSection">
        <div className="heroImageContainer">
          <div className="heroImageWrapper">
            <img src={image} alt="Hero Image" className="heroImage" />
          </div>
        </div>
        <div className="heroContentContainer">
          <div className="heroContentWrapper">
            <h1 className="heroTitle">{title}</h1>
            <p className="heroDescription">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
