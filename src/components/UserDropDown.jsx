import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import "../styles/logout.css";

const UserDropdown = () => {
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await Auth.signOut();
      // Perform any additional logout logic here
      history.push('/logout');
    } catch (error) {
      console.log('Error logging out:', error);
      // Handle error logging out
    }
  };

  return (
    <Dropdown align="end">
      <Dropdown.Toggle variant="secondary" id="user-dropdown">
        <FontAwesomeIcon icon={faUser} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/profile">Profile</Dropdown.Item>
        <Dropdown.Item href="/settings">Settings</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
