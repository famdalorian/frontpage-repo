import React, { useState } from "react";
import "../styles/home.css";
import HerosectionLeft from "../components/HerosectionLeft";
import HerosectionRight from "../components/HerosectionRight";
import Tabs from "../components/Tabs";

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
      <br />
      <br />
      <div className="herosectionLeftContainer">
        <button className="moreInfoButton" onClick={handleHerosectionLeftClick}>
        <img src={require("../assets/PJX_MMA.png")} alt="More Info" className="moreInfoIcon" />

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
        <button className="moreInfoButton" onClick={handleHerosectionRightClick}>
        <img src={require("../assets/PJX_S&C.png")} alt="More Info" className="moreInfoIcon" />

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
