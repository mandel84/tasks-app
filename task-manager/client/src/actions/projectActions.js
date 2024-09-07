import axios from 'axios';
import apiBaseUrl from '../apiConfig';


export const fetchProjects = () => async (dispatch) => {
  dispatch({ type: 'FETCH_PROJECTS_REQUEST' });
  try {
    const response = await axios.get(`${apiBaseUrl}/projects`);
    dispatch({ type: 'FETCH_PROJECTS_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_PROJECTS_FAILURE', payload: error.message });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    await axios.delete(`${apiBaseUrl}/projects/${id}`);
    dispatch({ type: 'DELETE_PROJECT', payload: id });
  } catch (error) {
    console.error('Error deleting project:', error);
  }
};

