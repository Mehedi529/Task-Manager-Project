/* eslint-disable no-unused-vars */
// TaskUpdateForm.jsx
import React, { useState } from 'react';

const TaskUpdateForm = ({ task }) => {
  const [updatedTaskData, setUpdatedTaskData] = useState({
    title: task.title,
    description: task.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTaskData({ ...updatedTaskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call to update the task using updatedTaskData
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={updatedTaskData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={updatedTaskData.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default TaskUpdateForm;
