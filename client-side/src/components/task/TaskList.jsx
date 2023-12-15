/* eslint-disable no-unused-vars */
// TaskList.jsx
import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Add API call to fetch the list of tasks
    // Example: fetchTasks().then(data => setTasks(data));
  }, []); // You may want to include dependencies if needed

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
