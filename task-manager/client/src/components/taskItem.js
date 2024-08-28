import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <li style={{ padding: '10px', borderBottom: '1px solid #ddd', marginBottom: '10px' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <p>Priority: {task.priority}</p>

      <Link to={`/tasks/${task.id}`} className="btn btn-view">
        View
      </Link>
      <Link to={`/tasks/edit/${task.id}`} className="btn btn-edit" style={{ marginLeft: '10px' }}>
        Edit
      </Link>
      <button onClick={handleDelete} className="btn btn-delete" style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </li>
  );
};
export default TaskItem;
