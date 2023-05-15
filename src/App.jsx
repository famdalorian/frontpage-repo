import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import About from "./Pages/About.jsx";
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
        <HashRouter>
          {" "}
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
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
            {/* <LogIn />
            <LogoutButton/> */}
            <UserInfo />
          </Sidebar>
        </HashRouter>{" "}
      </Authenticator>
    </div>
  );
}

export default App;
