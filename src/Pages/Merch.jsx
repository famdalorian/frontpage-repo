import React from "react";
import { Link } from "react-router-dom";
import "../styles/merch.css";

const MerchSection = ({ title, imageUrl, imgurl2, shopifyUrl }) => {
  return (
    <Link to={shopifyUrl} className="MerchSection">
      <div className="MerchImageContainer">
        <img src={imageUrl} alt={title} className="MerchImage" />
      </div>
      <h2>{title}</h2>
      <img src={imgurl2} alt="Buy" className="BuyButton" />
    </Link>
  );
};

const Merch = () => {
  return (
    <div className="Merch">
      <h1>Shop Our Merch</h1>
      <div className="MerchSections">
        <MerchSection
          title="Hoodies"
          imageUrl="https://700bdc-2.myshopify.com/cdn/shop/files/6778895426333289220_2048.jpg?v=1689422880&width=823"
          imgurl2="https://media.discordapp.net/attachments/1100705646573265008/1129775254244433930/image_2023-07-15_145649452-removebg-preview.png"
          shopifyUrl="shop.xxisp.uk" // Replace with the actual Shopify URL for shorts
        />
        <MerchSection
          title="T-Shirts"
          imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1129785142823624775/Opera_Snapshot_2023-07-15_154223_admin.shopify.com.png?width=906&height=913"
          imgurl2="https://media.discordapp.net/attachments/1100705646573265008/1129775254244433930/image_2023-07-15_145649452-removebg-preview.png"
          shopifyUrl="shop.xxisp.uk" // Replace with the actual Shopify URL for shorts
        />
        <MerchSection
          title="Shorts"
          imageUrl="https://media.discordapp.net/attachments/1100705646573265008/1129780043879563294/d1a24634-92c6-43e5-8466-c7bcd7602f77.png"
          imgurl2="https://media.discordapp.net/attachments/1100705646573265008/1129775254244433930/image_2023-07-15_145649452-removebg-preview.png"
          shopifyUrl="shop.xxisp.uk" // Replace with the actual Shopify URL for shorts
        />
        {/* Add more MerchSection components for the remaining sections */}
      </div>
    </div>
  );
};

export default Merch;
