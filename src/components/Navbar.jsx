import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src={logo} alt="Logo" className="navbar-logo-image" />

      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="navbar-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-user">
        <FontAwesomeIcon icon={faUser} className="navbar-user-icon" />
        <div className="navbar-user-menu">
          <ul>
            <li>
              <Link to="/profile" className="navbar-user-link">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings" className="navbar-user-link">
                Settings
              </Link>
            </li>
            <li>
              <Link to="/logout" className="navbar-user-link">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
