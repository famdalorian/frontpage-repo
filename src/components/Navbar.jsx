import React from "react";
import "../styles/navbar.css"
import SocialLogIn from "./SocialLogIn";
const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-user">
        {/* User icon and menu */}
        <i className="fa fa-user navbar-user-icon" aria-hidden="true"></i>
        <div className="navbar-user-menu">
          <ul>
            <li>
              <a href="/Profile">Profile</a>
            </li>
            <li>
              <a href="/Settings">Settings</a>
            </li>
            <li>
              <a href="Logout" onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>      <SocialLogIn />

    </nav>
  );
};

export default Navbar;
