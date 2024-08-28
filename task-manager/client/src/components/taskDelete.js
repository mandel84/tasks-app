import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios, { spread } from 'axios';

const TaskDelete = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5001/api/tasks/${id}`)
      .then(response => setTask(response.data))
      .catch(error => console.error('Error fetching task:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:5001/api/tasks/${id}`)
      .then(() => {
        navigate('/');
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  const handleCancel = () => {
    navigate('/');
  };

  if (!task) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h2>Delete Task</h2>
      <p>Are you sure you want to delete the following task?</p>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
        <button onClick={handleDelete} className="btn btn-delete" style={{ marginRight: '10px' }}>
          Delete
        </button>
        <button onClick={handleCancel} className="btn btn-cancel">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TaskDelete;
