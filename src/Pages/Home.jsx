import React, { useState } from "react";
import "../styles/home.css";
import 'animate.css';
import HeroSection from "../components/HeroSection";



function Home() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="title">
    <HeroSection
  title="Welcome to the Center of XXISP.eth"
  description="Meet XXISP.eth, a fighter, coach, and software developer, on a mission to build up others around him."
/>
    </div>
  );
}

export default Home;
