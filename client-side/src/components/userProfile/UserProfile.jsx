/* eslint-disable no-unused-vars */
// UserProfile.jsx
import React, { useEffect, useState } from 'react';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Add API call to fetch user data
    // Example: fetchUserData(userId).then(data => setUserData(data));
  }, []); // You may want to include dependencies if needed

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <p>Username: {userData.username}</p>
          <p>Email: {userData.email}</p>
          {/* Add more user details as needed */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserProfile;
