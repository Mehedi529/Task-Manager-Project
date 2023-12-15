/* eslint-disable no-unused-vars */
// ProfileDetails.jsx
import React, { useState } from 'react';

const ProfileDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    username: 'JohnDoe', // Assume initial values
    email: 'john.doe@example.com',
    // Add more profile details as needed
  });

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // Add API call to update user profile using formData
    // Example: updateProfile(formData).then(() => setEditMode(false));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h1>Profile Details</h1>
      {editMode ? (
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          {/* Add more editable fields as needed */}
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div>
          <p>Username: {formData.username}</p>
          <p>Email: {formData.email}</p>
          {/* Add more non-editable profile details as needed */}
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
