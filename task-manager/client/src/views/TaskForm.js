import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5001')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { title, description, dueDate, priority, projectId: selectedProject || null };  


    console.log('Submitting task:', newTask);  
    axios.post('https://tasks-app-server-two.vercel.app/api/tasks', newTask)
      .then(() => {
        navigate('/');  
      })
      .catch((err) => console.error('Error creating task:', err.response || err.message || err));
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
        <select value={selectedProject || ''} onChange={(e) => setSelectedProject(e.target.value)}>
          <option value="">None</option>
          {projects.map(project => (
            <option key={project.id} value={project.id}>{project.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
