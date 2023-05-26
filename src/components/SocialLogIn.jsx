import React, { useState, useEffect } from 'react';
import { Magic } from 'magic-sdk';
import '../styles/logout.css';

const SocialLogIn = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const magic = new Magic('pk_live_71FB438198D67606');

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        setIsLoggedIn(isLoggedIn);

        if (isLoggedIn) {
          const metadata = await magic.user.getMetadata();
          setUserData(metadata);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleSignIn = async () => {
    try {
      await magic.auth.loginWithMagicLink({ email });
      console.log('Magic link sent!');
    } catch (error) {
      console.error('Error sending magic link:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await magic.user.logout();
      setIsLoggedIn(false);
      setUserData(null);
      console.log('Logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="logout-container">
      <div className="logout-content">
        {isLoggedIn ? (
          <div className="logout-user">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
            {userData && (
              <div className="user-data">
                <h3>User Data:</h3>
                {userData.username && <p>Username: {userData.username}</p>}
                {userData.publicAddress && (
                  <p>Public Eth Address: {userData.publicAddress}</p>
                )}
                {userData.userInfo && userData.userInfo.preferredUsername && (
                  <p>Username: {userData.userInfo.preferredUsername}</p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="login-form">
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            <button className="logout-button" onClick={handleSignIn}>
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SocialLogIn;
