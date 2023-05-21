import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Magic } from 'magic-sdk';

const MagicCallback = () => {
  const location = useLocation();

  useEffect(() => {
    const handleMagicCallback = async () => {
      const magic = new Magic('YOUR_API_KEY'); // Replace with your Magic API key

      try {
        // Parse the authentication response from the query parameters
        await magic.auth.loginWithCredential();

        // Perform any necessary actions with the authentication response, such as storing tokens or updating user state

        // Redirect to the desired route
        window.location.href = '/dashboard';
      } catch (error) {
        console.log('Error handling Magic callback:', error);
        // Handle error handling the Magic callback
      }
    };

    if (location.pathname === '/callback') {
      handleMagicCallback();
    }
  }, [location.pathname]);

  return null;
};

export default MagicCallback;
