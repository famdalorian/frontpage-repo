import React, { useState, useEffect } from "react";
import '../App.css';


const Web3Component = ({ web3 }) => {
  const [account, setAccount] = useState("");
  const [contractData, setContractData] = useState("");

  useEffect(() => {
    const initWeb3 = async () => {
      if (web3) {
        // Request user permission to connect to their wallet
        await window.ethereum.enable();

        // Get the user's accounts
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        // Replace 'contractABI' and 'contractAddress' with your actual contract's ABI and address
        const contractABI = [...]; // Your contract's ABI as an array
        const contractAddress = "0x..."; // Your contract's Ethereum address
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        // Call a function from the smart contract (example: get contract data)
        const data = await contract.methods.getData().call();
        setContractData(data);
      }
    };

    initWeb3();
  }, [web3]);

  return (
    <div>
      <h1>Web3 Component</h1>
      <p>Connected Account: {account}</p>
      <p>Contract Data: {contractData}</p>
      {/* You can display other contract data or interact with the contract here */}
    </div>
  );
};

export default Web3Component;
