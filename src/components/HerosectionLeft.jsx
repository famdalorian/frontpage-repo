import React from 'react';
import "../styles/herosection-left.css";

function HerosectionLeft({ image, title, subheading, paragraph }) {
  return (
    <div className="herosection-left-wrapper">
      <div className="herosection-left-container">
        <div className="herosection-left">
          <div className="herosection-left-content">
            <h1 className="herosection-left-title">{title}</h1>
            <h2 className="herosection-left-subheading">{subheading}</h2>
            <p className="herosection-left-paragraph">{paragraph}</p>
          </div>
          <div className="herosection-left-image">
            <img src={image} alt="Hero Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HerosectionLeft;
