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
import LogoutButton from "./components/LogOut";
import HeroSection from "./components/HeroSection";
import HerosectionLeft from "./components/HerosectionLeft";
import HerosectionRight from "./components/HerosectionRight";
import NewsFeed from "./components/NewsFeed";
import Footer from "./components/Footer";
import SocialLogIn from "./components/SocialLogIn";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />{" "}
        <Sidebar>            <SocialLogIn />

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
          </Routes>

          <HeroSection
            image={require("../src/assets/hero-image.jpg")}
            title="Welcome to XXISP.eth"
            subheading="Center of Excellence"
            paragraph="At XXISP, we believe that true progress begins with disruptive thinking and relentless determination. Our founder, XXISP, has a proven track record of pushing boundaries and challenging the status quo. With a deep-rooted commitment to making a positive impact, XXISP has set out on an extraordinary mission to transform industries and create a better world for all."
          />
          <HerosectionLeft
            image={require("../src/assets/bus1.png")}
            title="Welcome to XXISP.eth"
            subheading="Center of Excellence"
            paragraph="At XXISP, we believe that true progress begins with disruptive thinking and relentless determination. Our founder, XXISP, has a proven track record of pushing boundaries and challenging the status quo. With a deep-rooted commitment to making a positive impact, XXISP has set out on an extraordinary mission to transform industries and create a better world for all."
          />
          <HerosectionRight
            image={require("../src/assets/bus1.png")}
            title="Welcome to XXISP.eth"
            subheading="Center of Excellence"
            paragraph="At XXISP, we believe that true progress begins with disruptive thinking and relentless determination. Our founder, XXISP, has a proven track record of pushing boundaries and challenging the status quo. With a deep-rooted commitment to making a positive impact, XXISP has set out on an extraordinary mission to transform industries and create a better world for all."
          />
          <NewsFeed />
          <LogoutButton />
        </Sidebar>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
