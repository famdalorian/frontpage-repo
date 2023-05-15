import React, { useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';

function UserInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await Auth.currentUserInfo();
        setUser(userInfo);
      } catch (error) {
        console.log('Error fetching user info:', error);
        // Handle error fetching user info
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      {user && (
        <div>
          {user.attributes.picture && (
            <img src={user.attributes.picture} alt="Profile Picture" />
          )}
          <h2>{user.username}</h2>
        </div>
      )}
    </div>
  );
}

export default UserInfo;
