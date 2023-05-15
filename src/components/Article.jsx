import React from "react";
import "../styles/article.css";

function Article({ image, headline, subtext, link }) {
  return (
    <div className="article">
      <div className="image-container">
        <img src={image} alt="Article" className="article-image" />
      </div>
      <div className="article-content">
        <h2 className="article-headline">{headline}</h2>
        <p className="article-subtext">{subtext}</p>
        <a href={link} className="article-link">
         Click Here...
        </a>
      </div>
    </div>
  );
}

export default Article;
