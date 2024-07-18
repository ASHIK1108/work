import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('/api/tasks', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const data = {
    labels: tasks.map(task => task.title),
    datasets: [
      {
        label: 'Task Progress',
        data: tasks.map(task => task.progress),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dashboard">
      <Bar data={data} />
    </div>
  );
};

export default Dashboard;