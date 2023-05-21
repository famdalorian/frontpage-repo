import React, { useState } from 'react';
import { Magic } from 'magic-sdk';

const LoginWithMagic = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async () => {
    const magic = new Magic('pk_live_71FB438198D67606', { network: 'mainnet' });

    try {
      await magic.auth.loginWithEmailOTP({ email: 'your-email' });
      setLoggedIn(true);
      console.log('Logged in with Magic.link');
    } catch (error) {
      console.log('Error logging in:', error);
      // Handle error logging in
    }
  };

  const handleLogout = async () => {
    const magic = new Magic('pk_live_71FB438198D67606', { network: 'mainnet' });

    try {
      await magic.user.logout();
      setLoggedIn(false);
      console.log('Logged out from Magic.link');
    } catch (error) {
      console.log('Error logging out:', error);
      // Handle error logging out
    }
  };

  return (
    <div>
      {loggedIn ? (
        <>
          <p>You are logged in with Magic.link</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : null}
      {!loggedIn && (
        <>
          <input type="email" placeholder="Enter your email" />
          <button onClick={handleLogin}>Login with Magic.link</button>
        </>
      )}
    </div>
  );
};

export default LoginWithMagic;
