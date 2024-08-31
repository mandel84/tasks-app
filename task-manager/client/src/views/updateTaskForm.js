import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateTaskForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    projectId: null,
  });

  useEffect(() => {
    axios.get(`https://tasks-app-server-two.vercel.app/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask(prevTask => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://tasks-app-server-two.vercel.app/api/tasks/${id}`, task)
      .then(() => {
        navigate('/'); 
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={task.dueDate.substring(0, 10)}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={handleChange}
          required
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Project</label>
        <select
          name="projectId"
          value={task.projectId || ''}
          onChange={handleChange}
        >
          <option value="">None</option>
        </select>
      </div>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default UpdateTaskForm;
