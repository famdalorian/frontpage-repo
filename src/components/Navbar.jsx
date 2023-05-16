import React from "react";
import "../styles/navbar.css"

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      {/* Navbar content */}
      <div className="navbar-user">
        {/* User icon and menu */}
        <i className="fa fa-user navbar-user-icon" aria-hidden="true"></i>
        <div className="navbar-user-menu">
          <ul>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <a href="#" onClick={logout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
