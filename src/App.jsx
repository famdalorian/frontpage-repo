import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
import CombatSports from "./Pages/CombatSports";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Art from "./Pages/Art";
import Web3Component from "./Pages/Web3";
import Writing from "./Pages/Writing";
import Sidebar from "./components/Sidebar";
import Merch from "./Pages/Merch";
import Home from "./Pages/Home";
import TimeTable from './components/TimeTable'
import Classes from "./Pages/Classes";
import Memberships from "./Pages/Memberships";
import './App.css';

import Footer from "./components/Footer";

function App() {
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    const initializeWeb3 = async () => {
      // Check if Web3 is available in the browser
      if (window.ethereum) {
        // Load Web3.js library
        const Web3 = require('web3');
        const web3Instance = new Web3(window.ethereum);
        const accounts = await web3Instance.eth.requestAccounts();
        setWeb3(web3Instance);
      } else {
        console.error("Web3 not available. Please install MetaMask or another Web3 wallet.");
      }
    };

    initializeWeb3();
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <Navbar  />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Account />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/art" element={<Art />} />
            <Route path="/combatsports" element={<CombatSports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web3" element={<Web3Component web3={web3} />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/memberships" element={<Memberships />} />
          </Routes>
        </Sidebar>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
