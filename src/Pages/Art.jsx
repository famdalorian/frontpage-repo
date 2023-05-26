import React from "react";
import Article from "../components/Article";
import "../styles/art.css";

function Art() {
  return (
    <div className="art-wrapper">
      <Article
        image={require("../assets/22-lights.gif")}
        headline="XXISP Art"
        subtext="Discover the unique and engaging art creations by the founders of XXISP."
        link="https://www.eye.watch/collection/ethereum/0xf4a6939a530ae50558b4a9b5fa1747268c24af2b"
      />
    </div>
  );
}

export default Art;