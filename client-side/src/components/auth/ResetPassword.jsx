/* eslint-disable no-unused-vars */
// ResetPasswordForm.jsx
import React, { useState } from 'react';

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call to reset password using formData
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ResetPasswordForm;
