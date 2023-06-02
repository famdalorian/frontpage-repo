import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";
import SocialLogIn from "./SocialLogIn";
import logo from '../assets/xxisp-crest.png';

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-user">
        <div className="navbar-user-menu">
          <ul> 
            <li >
              <SocialLogIn />
              <Link className="Navlinks" to="/Profile">Profile</Link>
            </li>
            <li >
              <Link className="Navlinks" to="/Settings">Settings</Link>
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
