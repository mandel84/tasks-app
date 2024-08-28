const initialState = {
    tasks: [],
    loading: false,
    error: null,
  };
  
  export default function taskReducer(state = initialState, action) {
    switch (action.type) {
      case 'FETCH_TASKS_REQUEST':
        return { ...state, loading: true, error: null };
      case 'FETCH_TASKS_SUCCESS':
        return { ...state, loading: false, tasks: action.payload };
      case 'FETCH_TASKS_FAILURE':
        return { ...state, loading: false, error: action.payload };
        case 'DELETE_TASK':
  return {
    ...state,
    tasks: state.tasks.filter(task => task.id !== action.payload)
  };
      default:
        return state;
    }
  }
  