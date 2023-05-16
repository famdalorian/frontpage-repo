import React, { useState, useEffect } from "react";
import { Magic } from "magic-sdk";
import "../styles/magic.css";

const customNodeOptions = {
  rpcUrl: "https://rpc-mumbai.maticvigil.com/",
  chainId: 80001,
};

const magic = new Magic("pk_live_7CFC26214ADEDD52", { network: customNodeOptions });

const MagicLogin = () => {
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    checkIsLoggedIn();
  }, []);

  const checkIsLoggedIn = async () => {
    const isLoggedIn = await magic.user.isLoggedIn();
    setIsLoggedIn(isLoggedIn);

    if (isLoggedIn) {
      const metadata = await magic.user.getMetadata();
      setUserMetadata(metadata);
    }
  };

  const handleLogin = async () => {
    try {
      await magic.auth.loginWithEmailOTP({ email });
      setIsLoggedIn(true);
    } catch (error) {
      // Handle login error
    }
  };

  const handleLogout = async () => {
    try {
      await magic.user.logout();
      setIsLoggedIn(false);
      setUserMetadata(null);
    } catch (error) {
      // Handle logout error
    }
  };

  return (
    <div className="magic-login-container">
      {!isLoggedIn ? (
        <>
          <input
            className="magic-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="magic-button" onClick={handleLogin}>
            Login with Magic
          </button>
        </>
      ) : (
        <>
          <h2>Welcome, {userMetadata?.email}</h2>
          <button className="magic-button" onClick={handleLogout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
};

export default MagicLogin;
