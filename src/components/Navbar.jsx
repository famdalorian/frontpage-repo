import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "../styles/navbar.css";
import SocialLogIn from "./SocialLogIn";

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-user">
        <div className="navbar-user-menu">
          <ul>
            <li>
              <SocialLogIn />
              <a href="/Profile">Profile</a>
            </li>
            <li>
              <a href="/Settings">Settings</a>
            </li>
            <li>
              <a href="Logout" onClick={logout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
       
        <div className="icon-wrapper">
          <FontAwesomeIcon icon={faUser} className="navbar-user-icon" />
         Log-In
        </div>
    
      </div>
    </nav>
  );
};

export default Navbar;
