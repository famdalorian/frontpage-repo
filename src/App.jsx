import "./App.css";
import Xxisp from "./components/Xxisp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/art" element={<Art />} />
            <Route path="/combatsports" element={<CombatSports />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/web3" element={<Web3 />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/writing" element={<Writing />} />
          </Routes>
        </Sidebar>
        <Xxisp />
      </BrowserRouter>
    </div>
  );
}

export default App;
