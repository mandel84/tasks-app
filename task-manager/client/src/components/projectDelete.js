import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProjectDelete = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`tasks-6c1mc3fwg-mandelito.vercel.app/${id}`)
      .then(response => setProject(response.data))
      .catch(error => console.error('Error fetching project:', error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`tasks-6c1mc3fwg-mandelito.vercel.app/${id}`)
      .then(() => {
        navigate('/projects'); // Redirect to project list after deletion
      })
      .catch(error => console.error('Error deleting project:', error));
  };

  const handleCancel = () => {
    navigate('/projects');
  };

  if (!project) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Delete Project</h2>
      <p>Are you sure you want to delete the following project?</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
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

export default ProjectDelete;
