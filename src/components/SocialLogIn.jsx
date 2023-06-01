import React from 'react';
import { Magic } from 'magic-sdk';

const magic = new Magic("pk_live_A2C1FC5327BEC218", { network: 'mainnet' });

async function responseGoogle(response) {
  console.log(response);
}

async function connectWallet() {
  try {
    const accounts = await magic.wallet.connectWithUI();
    console.log(accounts);
  } catch (error) {
    console.error('An error occurred while connecting the wallet:', error);
  }
}

function SocialLogIn() {
  return (
    <div>
     
      <button onClick={connectWallet}>Connect Wallet</button>
    </div>
  );
}

export default SocialLogIn;
