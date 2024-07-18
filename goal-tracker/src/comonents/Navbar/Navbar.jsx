// src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/tasks/new">New Task</Link>
        </li>
        <li>
          <Link to="/tasks">Task List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;