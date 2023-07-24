import React from 'react';
import { FaDiscord, FaInstagram } from 'react-icons/fa';
import "../styles/footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://discord.gg/ZvZeEgJyjR" target="_blank" rel="noopener noreferrer">
          <FaDiscord className="footer-icon" />
        </a>
        <a href="https://instagram.com/projectxxisp" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
