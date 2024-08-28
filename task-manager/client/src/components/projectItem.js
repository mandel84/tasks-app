import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../actions/projectActions';


const ProjectItem = ({ project }) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProject(project.id));
  };
  return (
    <li>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button onClick={handleDelete}>Delete</button>

    </li>
  );
};

export default ProjectItem;
