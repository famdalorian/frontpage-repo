import React from 'react';
import { Auth } from 'aws-amplify';
import "../styles/logout.css"

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      // Perform any additional logout logic here
    } catch (error) {
      console.log('Error logging out:', error);
      // Handle error logging out
    }
  };

  return (
<button className="logout-button" onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;