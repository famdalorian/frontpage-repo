import React, { useState } from "react";
import { Magic } from "magic-sdk";
import "../styles/form.css";

const magic = new Magic("pk_live_A2C1FC5327BEC218", { network: "mainnet" });

function SocialLogIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function connectWallet() {
    try {
      // if the user is not logged in, initiate the login process
      const accounts = await magic.wallet.connectWithUI();
      if (accounts) {
        setIsLoggedIn(true);
        console.log(accounts);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async function showWallet() {
    try {
      // if the user is already logged in, show the wallet widget
      await magic.wallet.showUI();
      // Request user information
      const emailInfo = await magic.wallet.requestUserInfoWithUI({
        scope: { email: "required" },
      });
      console.log(emailInfo.email); // the user's email if they consented.
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  async function disconnectWallet() {
    try {
      await magic.wallet.disconnect();
      setIsLoggedIn(false); // Update isLoggedIn state
      console.log("Disconnected from wallet");
    } catch (error) {
      console.error("An error occurred while disconnecting:", error);
    }
  }

  return (
    <div>
      {!isLoggedIn && <button onClick={connectWallet}>Connect</button>}
      {isLoggedIn && (
        <>
          <button onClick={showWallet}>Wallet
          
          </button>
          <br />
          <br />

          <button onClick={disconnectWallet}>Disconnect</button>
          <br />
          <br />
        </>
      )}
    </div>
  );
}

export default SocialLogIn;
