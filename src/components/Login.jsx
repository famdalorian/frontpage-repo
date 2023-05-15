import React, { useState, useEffect } from 'react';
import { Magic } from 'magic-sdk';
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const magic = new Magic("pk_live_F5BEBA80DF1BE39C");

  useEffect(() => {
    magic.user.isLoggedIn().then(isLoggedIn => setIsLoggedIn(isLoggedIn));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email) {
      try {
        // Request a magic link to be sent to the user's email
        await magic.auth.loginWithMagicLink({
          email,
          redirectURI: window.location.origin + '/callback'
        });
        setIsLoggedIn(true);
      } catch (error) {
        console.error('An error occurred during login:', error);
      }
    }
  };

  const handleLogout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <div>
          <p className='p'>You are logged in! 👤</p>
          <button onClick={handleLogout}>Log out</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button type="submit">Log in</button>
          <button onClick={handleLogout}>Log out</button>
        </form>
      )}
    </>
  );
};

export default Login;