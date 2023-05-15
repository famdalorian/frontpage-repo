import React, { useState } from "react";
import "../styles/home.css";
import 'animate.css';
import SignupForm from "../components/SignupForm";



function Home() {
  const [showForm, setShowForm] = useState(true);

  return (
    <div className="title">
      {showForm && <SignupForm />}
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Hide Sign Up Form' : 'Show Sign Up Form'}
      </button>
      {/* Rest of your home component */}
    </div>
  );
}

export default Home;
