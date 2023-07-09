import React from "react";
import "animate.css";
import "../styles/Tabs.css";
// Import your images
import image1 from "../assets/6.png";
import image2 from "../assets/5.png";
import image3 from "../assets/4.jpg";
import { Magic } from "magic-sdk"; // Import the Magic object

const Tabs = () => {
  const images = [image1, image2, image3]; // Now using imported images
  const tabtext = ["Classes", "Coaches", "TimeTable"];
  const links = [
    "https://Projectxxisp.com",
    showWallet, // Use the function reference instead of a URL
    "https://market.xxisp.uk",
  ];

  const magic = new Magic("pk_live_A2C1FC5327BEC218", { network: "mainnet" }); // Initialize the magic object

  async function showWallet() {
    try {
      // if the user is already logged in, show the wallet widget
      await magic.wallet.showUI();
      // Request user information
      const emailInfo = await magic.wallet.requestUserInfoWithUI({
        scope: { email: "required" },
      });
      console.log(emailInfo.email); // the user's email if they consented.
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  const handleButtonClick = (link) => {
    if (typeof link === "string") {
      // Handle URL links
      window.open(link, "_blank");
    } else if (typeof link === "function") {
      // Call the function
      link();
    }
  };

  return (
    <div className="Tabs-container">
      
      <div className="tabs">  <h1>Project XXisp Combat Academy </h1>
        {images.map((image, index) => (
          <div className="tab" key={index}>
            <div onClick={() => handleButtonClick(links[index])}>
              <p className="tab-text animate__animated animate__bounceInDown">
                {tabtext[index]}
              </p>
              <img
                className="tab-image animate__animated animate__shakeX"
                src={image}
                alt={`tab-${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
