// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './comonents/Navbar/Navbar';
import Login from './comonents/Auth/Login';
import Register from './comonents/Auth/Register';
import Dashboard from './comonents/Dashboard/Dashboard';
import TaskForm from './comonents/Task/TaskForm';
import TaskList from './comonents/Task/TaskList';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;