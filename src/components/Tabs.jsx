import React from "react";
import "animate.css";
import "../styles/Tabs.css";
// Import your images
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import { Magic } from "magic-sdk"; // Import the Magic object

const Tabs = () => {
  const images = [image1, image2, image3]; // Now using imported images
  const tabtext = ["Project XXisp", "XXisp-Wallet", "XXisp Market(under constructrion)"];
  const links = [
    "https://projectxxisp.com",
    showWallet, // Use the function reference instead of a URL
    // "https://market.xxisp.uk" 
    'https://projectxxisp.com',
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
    <div className="tabs">
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
  );
};

export default Tabs;
