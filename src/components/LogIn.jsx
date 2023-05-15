import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await Auth.signIn(username, password);
      // User has been successfully signed in
      console.log('User:', user);
      // Perform any necessary actions after successful login
    } catch (error) {
      console.log('Error signing in:', error);
      // Handle error signing in
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
