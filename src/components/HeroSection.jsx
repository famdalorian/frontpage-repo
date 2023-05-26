import React from 'react';
import "../styles/herosection.css";

function Herosection({ image, title, description }) {
  return (
    <div className="heroContainer">
      <div className="heroSection">
        <div className="heroImageContainer">
          <img src={image}  alt='' className="heroImage" />
        </div>
        <div className="heroContentContainer">
          <h1 className="heroTitle">{title}</h1>
          <p className="heroDescription">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
