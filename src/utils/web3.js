import Web3 from 'web3';

// Create a new Web3 instance using Infura provider
const web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/67e5015a9036435ba9130a0b59545a47'));

// If using Metamask, use the injected provider
// const web3 = new Web3(window.ethereum);

export default web3;
