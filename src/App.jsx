import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import About from "./Pages/Account.jsx";
import CombatSports from "./Pages/CombatSports.jsx";
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Art from "./Pages/Art";
import Web3 from "./Pages/Web3.jsx";
import Writing from "./Pages/Writing.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Merch from "./Pages/Merch.jsx";
import Home from "./Pages/Home.jsx";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import UserInfo from "./components/UserInfo";
import LogoutButton from "./components/LogOut";
import LogIn from "./components/LogIn";
import HeroSection from "./components/HeroSection";
import HerosectionLeft from "./components/HerosectionLeft";
import HerosectionRight from "./components/HerosectionRight";
import NewsFeed from "./components/NewsFeed";
import Navbar from "./components/Navbar";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
        <HashRouter>        <Navbar/>

          {" "}
          <Sidebar>
            <Routes>
            <Route exact path="/" component={Home} />
              <Route path="/about" element={<About />} />
              <Route path="/about" element={<Dashboard />} />
              <Route path="/art" element={<Art />} />
              <Route path="/combatsports" element={<CombatSports />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/web3" element={<Web3 />} />
              <Route path="/merch" element={<Merch />} />
              <Route path="/writing" element={<Writing />} />
            </Routes>{" "}
          <HeroSection/>
          <HerosectionLeft
  image={require("../src/assets/hero-image.jpg")}
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
<NewsFeed/>
            <LogoutButton/>
            <UserInfo />
          </Sidebar>
        </HashRouter>{" "}
      </Authenticator>
    </div>
  );
}

export default App;
