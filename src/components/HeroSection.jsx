import React from 'react';
import "../styles/herosection.css";

function Herosection({ title, description }) {
  return (
    <div className="herosection">
      <h1 className="herosection-title">{title}</h1>
      <p className="herosection-description">{description}</p>
    </div>
  );
}

export default Herosection;