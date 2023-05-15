import React, { useState } from "react";
import "animate.css";
import SignupForm from "../components/SignupForm";
import Carousel from "../components/Carousel";
import "../styles/form.css"

function Home() {
  const [showForm, setShowForm] = useState(true);

  return (
 
      <div className="container">   <div className="title">
        

        {showForm && <SignupForm />}
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide Sign Up Form" : "Show Sign Up Form"}
        </button>
        {/* Rest of your home component */}<Carousel />
      </div>
    </div>
  );
}

export default Home;
