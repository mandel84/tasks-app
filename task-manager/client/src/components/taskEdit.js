import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const TaskEdit = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [projectId, setProjectId] = useState(null); 

  useEffect(() => {
    axios.get(`https://tasks-app-server-two.vercel.app/api/tasks/${id}`)
      .then(response => {
        const { title, description, dueDate, priority, projectId } = response.data;
        setTitle(title);
        setDescription(description);
        setDueDate(dueDate ? dueDate.split('T')[0] : '');
        setPriority(priority);
        setProjectId(projectId);
      })
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTask = { title, description, dueDate, priority, projectId };

    axios.put(`https://tasks-app-server-two.vercel.app/api/tasks/${id}`, updatedTask)
      .then(() => {
        navigate('/'); 
      })
      .catch(error => console.error('Error updating task:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Due Date</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      </div>
      <div>
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <div>
        <label>Project</label>
        <select value={projectId || ''} onChange={(e) => setProjectId(e.target.value)}>
          <option value="">None</option>=
        </select>
      </div>
      <button type="submit">Update Task</button>
    </form>
  );
};

export default TaskEdit;
