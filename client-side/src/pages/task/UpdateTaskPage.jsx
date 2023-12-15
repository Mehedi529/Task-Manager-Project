/* eslint-disable no-unused-vars */
// UpdateTaskPage.jsx
import React from 'react';
import TaskUpdateForm from '../../components/task/TaskUpdateForm';

const UpdateTaskPage = ({ match }) => {
  // Assuming the task ID is passed through the route parameter
  const taskId = match.params.id;

  // Fetch the task data based on the taskId (add the API call)
  const task = {
    id: taskId,
    title: 'Sample Task',
    description: 'This is a sample task for demonstration purposes.',
  };

  return (
    <div>
      <h1>Update Task</h1>
      <TaskUpdateForm task={task} />
    </div>
  );
};

export default UpdateTaskPage;
