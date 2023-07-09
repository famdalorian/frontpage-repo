import React, { useState } from "react";
import "../styles/home.css";
import HerosectionLeft from "../components/HerosectionLeft";
import HerosectionRight from "../components/HerosectionRight";
import Tabs from "../components/Tabs";

import Herosection from "../components/HeroSection";

function Home() {
  const [showHerosectionLeft, setShowHerosectionLeft] = useState(false);
  const [showHerosectionRight, setShowHerosectionRight] = useState(false);

  const handleHerosectionLeftClick = () => {
    setShowHerosectionLeft(!showHerosectionLeft);
  };

  const handleHerosectionRightClick = () => {
    setShowHerosectionRight(!showHerosectionRight);
  };

  return (
    <div className="homepageContainer">
      {" "}
      <Herosection
        image={require("../assets/xxisp-crest.png")}
        title="Welcome to Project XXisp!"
        description="XXISP is a community-driven project focused on creating a vibrant community space that encompasses an MMA and Muay Thai gym. Our goal is to foster a strong sense of community by not only providing fitness and combat sports training but also by investing in local projects for urban regeneration. We aim to support initiatives like the development of a skate park or a bar/cafe that will contribute to job creation, promote health and fitness, and encourage accountability and creativity. Furthermore, we are dedicated to integrating technology into the gym experience, bridging the gap between the fitness world and the tech industry. Join us on this exciting journey at XXISP!"
      />
      <br />
      <br />
      <div className="herosectionLeftContainer">
        <button className="moreInfoButton" onClick={handleHerosectionLeftClick}>
          <img
            src={require("../assets/PJX_MMA.png")}
            alt="More Info"
            className="moreInfoIcon"
          />
          <h1>Who are we?</h1>
          More Info
        </button>
        {showHerosectionLeft && (
          <HerosectionLeft
            image={require("../assets/MT_mind.png")}
            title="Welcome to Project XXisp!"
            subheading="Center of Excellence"
            paragraph="At XXISP, we believe that true progress begins with disruptive thinking and relentless determination. Our founder, XXISP, has a proven track record of pushing boundaries and challenging the status quo. With a deep-rooted commitment to making a positive impact, XXISP has set out on an extraordinary mission to transform industries and create a better world for all."
          />
        )}
      </div>
      <br></br>
      <div className="herosectionRightContainer">
        <button
          className="moreInfoButton"
          onClick={handleHerosectionRightClick}
        >
          <img
            src={require("../assets/PJX_S&C.png")}
            alt="More Info"
            className="moreInfoIcon"
          />
          <h1>What is this??</h1>
          More Info
        </button>
        {showHerosectionRight && (
          <HerosectionRight
            image={require("../assets/bus1.png")}
            title="Be the best you!"
            subheading="Mentality Forge"
            paragraph="At XXISP, we embrace the power of bold ideas and unwavering resolve as catalysts for genuine advancement. Our visionary leader, XXISP, has consistently shattered conventional norms and redefined possibilities. With an unwavering dedication to driving positive change, XXISP embarks on an extraordinary journey to revolutionize industries and forge a brighter future for everyone."
          />
        )}
      </div>
      <Tabs className="tabs" />
    </div>
  );
}

export default Home;
