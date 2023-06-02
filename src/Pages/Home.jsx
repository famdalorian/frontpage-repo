import React from "react";
import "../styles/home.css";
import HerosectionLeft from "../components/HerosectionLeft";
import HerosectionRight from "../components/HerosectionRight";
import Tabs from "../components/Tabs";
function Home() {
 

  return (
    <div className="homepageContainer">
      <Tabs className="tabs"/>
      <div className="herosectionLeftContainer">
        <HerosectionLeft
          image={require("../assets/MT_mind.png")}
          title="Welcome to XXISP.eth"
          subheading="Center of Excellence"
          paragraph="At XXISP, we believe that true progress begins with disruptive thinking and relentless determination. Our founder, XXISP, has a proven track record of pushing boundaries and challenging the status quo. With a deep-rooted commitment to making a positive impact, XXISP has set out on an extraordinary mission to transform industries and create a better world for all."
        />
      </div>
      <div className="herosectionRightContainer">
        <HerosectionRight
          image={require("../assets/bus1.png")}
          title="Welcome to XXISP.eth"
          subheading="Center of Excellence"
          paragraph="At XXISP, we believe that true progress begins with disruptive thinking and relentless determination. Our founder, XXISP, has a proven track record of pushing boundaries and challenging the status quo. With a deep-rooted commitment to making a positive impact, XXISP has set out on an extraordinary mission to transform industries and create a better world for all."
        />
      </div>
    </div>
  );
}

export default Home;
