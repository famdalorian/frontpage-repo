import React, { useState } from 'react';
import { Network, Alchemy } from 'alchemy-sdk';

const AlchemyData = () => {
  const [address, setAddress] = useState('');
  const [tokenBalances, setTokenBalances] = useState([]);
  const [nfts, setNfts] = useState([]);

  const apiKey = "NnzmRF-Y03pGPKom2YAlPU8PDnlyFrPH";
  const settings = {
    apiKey: apiKey,
    network: Network.ETH_MAINNET,
  };

  const alchemy = new Alchemy(settings);

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const fetchTokenBalances = () => {
    alchemy.core
      .getTokenBalances(address)
      .then((balances) => {
        setTokenBalances(balances);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchNftsForOwner = () => {
    alchemy.nft
      .getNftsForOwner(address)
      .then((nfts) => {
        setNfts(nfts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchTokenBalances();
    fetchNftsForOwner();
  };

  return (
    <div>
      <h1>Alchemy Data</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Address:
          <input type="text" value={address} onChange={handleAddressChange} />
        </label>
        <button type="submit">Fetch Data</button>
      </form>

      <h2>Token Balances:</h2>
      {tokenBalances.map((balance, index) => (
        <div key={index}>
          <p>Contract Address: {balance.contractAddress}</p>
          <p>Token Balance: {balance.tokenBalance}</p>
        </div>
      ))}

      <h2>NFTs Owned:</h2>
      {nfts.map((nft, index) => (
        <div key={index}>
          <p>Contract Address: {nft.contractAddress}</p>
          <p>Token ID: {nft.tokenId}</p>
        </div>
      ))}
    </div>
  );
};

export default AlchemyData;
