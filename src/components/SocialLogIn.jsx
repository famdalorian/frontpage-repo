import React, { useState, useEffect } from 'react';
import { Magic } from 'magic-sdk';

const SocialLogIn = () => {
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null); // State to store the user data
  const magic = new Magic('pk_live_71FB438198D67606'); // Replace with your Magic publishable API key

  useEffect(() => {
    // Check the user's login status here and update the isLoggedIn state accordingly
    const checkLoginStatus = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        setIsLoggedIn(isLoggedIn);

        if (isLoggedIn) {
          const metadata = await magic.user.getMetadata(console.log(metadata)); // Fetch the user's metadata
          setUserData(metadata);
        }
      } catch (error) {
        console.error('Error checking login status:', error);
      }
    };

    checkLoginStatus();
  }, []);

  const handleSignIn = async () => {
    try {
      // Send the login link to the provided email
      await magic.auth.loginWithMagicLink({ email });
      console.log('Magic link sent!');
    } catch (error) {
      console.error('Error sending magic link:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await magic.user.logout();
      setIsLoggedIn(false);
      setUserData(null); // Clear the user data
      console.log('Logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  if (isLoggedIn) {
    return (
      <div>
  <button onClick={handleLogout}>Logout</button>
  {userData && (
   <div>
   
   {userData && (
     <div>
       <h3>User Data:</h3>
       {userData.username && <p>Username: {userData.username}</p>}
       {userData.publicAddress && <p>Public Eth Address: {userData.publicAddress}</p>}
       {userData.userInfo && userData.userInfo.preferredUsername && (
        
         <p>Username: {userData.userInfo.preferredUsername}</p>
       )}
     </div>
   )}
 </div>
 
  )}
</div>
    );
  }

  return (
    <div>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email" />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SocialLogIn;
