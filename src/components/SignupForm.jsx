import React, { useState } from "react";
import "../styles/form.css";
import  SignUp  from '../../src/ui-components/SignUp.jsx';

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isVisible, setIsVisible] = useState(false); // New state for form visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here...
  };

  // Render nothing when form is not visible
  if (!isVisible) {
    return <button onClick={() => setIsVisible(true)}>Sign Up</button>;
  }
  <SignUp
    onSubmit={(fields) => {
      // Example function to trim all string inputs
      const updatedFields = {};
      Object.keys(fields).forEach((key) => {
        if (typeof fields[key] === "string") {
          updatedFields[key] = fields[key].trim();
        } else {
          updatedFields[key] = fields[key];
        }
      });
      return updatedFields;
    }}
  />;
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    // Perform operations with the selected image file
    // For example, you can upload the image to a server, display a preview, etc.
  };
  return (
    <div className="signup-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <input type="submit" value="Sign Up" />
        <input type="file" accept="image/*" onChange={handleImageChange} />

      </form>
    </div>
  );
};

export default SignupForm;
