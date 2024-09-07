import axios from 'axios';
import apiBaseUrl from '../apiConfig';


export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: 'FETCH_TASKS_REQUEST' });
  try {
    const response = await axios.get(`${apiBaseUrl}/tasks`);
    dispatch({ type: 'FETCH_TASKS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TASKS_FAILURE', payload: error.message });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiBaseUrl}/tasks/${id}`);
    dispatch({ type: 'DELETE_TASK', payload: id });
  } catch (error) {
    console.error('Error deleting task:', error);
  }
};

