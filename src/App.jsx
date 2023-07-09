import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./Pages/Dashboard";
import Account from "./Pages/Account";
import CombatSports from "./Pages/CombatSports";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Art from "./Pages/Art";
import Web3 from "./Pages/Web3";
import Writing from "./Pages/Writing";
import Sidebar from "./components/Sidebar";
import Merch from "./Pages/Merch";
import Home from "./Pages/Home";
import TimeTable from './components/TimeTable'

import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar  />{" "}
        <Sidebar>
          

          <Routes>
            {" "}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Account />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/art" element={<Art />} />
            <Route path="/combatsports" element={<CombatSports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web3" element={<Web3 />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/timetable" element={<TimeTable />} />
          </Routes>

         
        </Sidebar>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
