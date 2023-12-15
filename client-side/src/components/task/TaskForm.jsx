/* eslint-disable no-unused-vars */
// TaskForm.jsx
import React, { useState } from 'react';

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add API call to create a new task using taskData
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={taskData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={taskData.description} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
