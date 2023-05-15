import React from 'react';
import "../styles/herosection-right.css";

function HerosectionRight({ image, title, subheading, paragraph }) {
  return (
    <div className="herosection-right">
      <div className="herosection-right-content">
        <h1 className="herosection-right-title">{title}</h1>
        <h2 className="herosection-right-subheading">{subheading}</h2>
        <p className="herosection-right-paragraph">{paragraph}</p>
      </div>
      <div className="herosection-right-image">
        <img src={image} alt="Hero Image" />
      </div>
    </div>
  );
}

export default HerosectionRight;
