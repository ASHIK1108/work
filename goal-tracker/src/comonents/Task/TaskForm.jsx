import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [duration, setDuration] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/tasks', { title, deadline, duration }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      navigate('/tasks');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        type="number"
        placeholder="Duration in days"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;