/* eslint-disable no-unused-vars */
// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {/* Add buttons for task actions (edit, delete) */}
    </li>
  );
};

export default TaskItem;
