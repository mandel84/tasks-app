import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReducer from '../reducers/taskReducer';
import projectReducer from '../reducers/projectReducer';



const rootReducer = combineReducers({
  tasks: taskReducer,
  projects: projectReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
