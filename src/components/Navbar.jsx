import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css';

const Navbar = ({ logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-user">
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
        {/* User icon */}
        <FontAwesomeIcon icon={faUser} className="navbar-user-icon" />
      </div>      
    </nav>
  );
};

export default Navbar;
