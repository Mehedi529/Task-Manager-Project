// apiRequest.js
import axios from 'axios';

const baseURL = 'http://your-api-base-url'; // Replace with your API base URL

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registration = async (userData) => {
  try {
    const response = await api.post('/Registration', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post('/Login', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const profileUpdate = async (email, userData) => {
  try {
    const response = await api.post(`/ProfileUpdate/${email}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const profileDetails = async () => {
  try {
    const response = await api.get('/ProfileDetails');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const recoverVerifyEmail = async (email) => {
  try {
    const response = await api.get(`/RecoverVerifyEmail/${email}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const recoverVerifyOTP = async (email, otp) => {
  try {
    const response = await api.get(`/RecoverVerifyOTP/${email}/${otp}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const recoverResetPass = async (userData) => {
  try {
    const response = await api.post('/RecoverResetPass', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Task Management API Requests

export const createTask = async (taskData) => {
  try {
    const response = await api.post('/CreateTask', taskData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateTask = async (taskId, taskData) => {
  try {
    const response = await api.get(`/UpdateTask/${taskId}`, taskData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const listTasksByStatus = async (status) => {
  try {
    const response = await api.get(`/ListTaskByStatus/${status}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const taskStatusCount = async () => {
  try {
    const response = await api.get('/TaskStatusCount');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await api.get(`/DeleteTask/${taskId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
