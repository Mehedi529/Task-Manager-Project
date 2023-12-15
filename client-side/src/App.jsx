/* eslint-disable no-unused-vars */
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationPage from './pages/auth/RegistrationPage';
import LoginPage from './pages/auth/LoginPage';
import ProfileUpdatePage from './pages/auth/ProfileUpdatePage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import UserProfilePage from './pages/userProfile/UserProfilePage';
import ProfileDetailsPage from './pages/userProfile/ProfileDetailsPage';
import CreateTaskPage from './pages/task/CreateTaskPage';
import UpdateTaskPage from './pages/task/UpdateTaskPage';
import TaskListPage from './pages/task/TaskListPage';

function App() {
  return (
    <Router>
      <Switch>
        {/* Authentication Routes */}
        <Route path="/register" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/update-profile" component={ProfileUpdatePage} />
        <Route path="/reset-password" component={ResetPasswordPage} />

        {/* User Profile Routes */}
        <Route path="/user-profile" component={UserProfilePage} />
        <Route path="/profile-details" component={ProfileDetailsPage} />

        {/* Task Routes */}
        <Route path="/create-task" component={CreateTaskPage} />
        <Route path="/update-task/:id" component={UpdateTaskPage} />
        <Route path="/task-list" component={TaskListPage} />

        {/* Default route or 404 page */}
        <Route render={() => <h1>404 Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
