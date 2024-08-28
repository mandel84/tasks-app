import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TaskList from './views/taskList';
import ProjectList from './views/ProjectList';
import TaskForm from './views/TaskForm'; 
import ProjectForm from './views/ProjectForm';
import ProjectDetail from './components/ProjectDetail';
import TaskDetail from './components/taskDetail';
import TaskEdit from './components/taskEdit';
import TaskDelete from './components/taskDelete';
import ProjectDelete from './components/projectDelete';



import './styles/App.css'


const App = () => {
  return (
    <Router>
      <div className='container'>
        
      <Routes>
  
      <Route path="/tasks" element={<TaskList />} /> 
        <Route path="/projects" element={<ProjectList />} /> 
        <Route path="/new-task" element={<TaskForm />} /> 
        <Route path="/new-project" element={<ProjectForm />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="/tasks/edit/:id" element={<TaskEdit />} /> 
        <Route path="/tasks/delete/:id" element={<TaskDelete />} />
        <Route path="/projects/delete/:id" element={<ProjectDelete />} />


      </Routes>
      </div>
    </Router>
  );
};

export default App;
