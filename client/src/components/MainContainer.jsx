import React, {useState} from 'react'
import Home from './Home'
import { Route, Switch, Redirect } from 'react-router-dom';
import ProjectDetail from './ProjectDetail';
import EditProject from './EditProject'
import TaskDetail from './TaskDetail'
import EditTask from './EditTask';

export default function MainContainer(props) {
  const { handleLogout, handleVerify, currentUser } = props;
  const [tasks, setTasks] = useState([])

  return (
    <div>
      <Switch>

      <Route path={`/tasks/:id/edit`}>
        <EditTask handleVerify={handleVerify}/>
      </Route>
      
      <Route path={`/tasks/:id`}>
          <TaskDetail
            handleVerify={handleVerify}
          />
      </Route>
        
      <Route path={`/projects/:id/edit`}>
        <EditProject handleVerify={handleVerify}/>
      </Route>
      
      <Route path={`/projects/:id`}>
          <ProjectDetail
            handleVerify={handleVerify}
            tasks={tasks}
            setTasks={setTasks}
          />
      </Route>
      
      <Route path="/projects">
        <Home
          handleLogout={handleLogout}
          handleVerify={handleVerify}
          currentUser={currentUser}
        />
        </Route>
        
      <Route exact path="/">
        <Redirect to="/projects" />
        </Route>
        
      </Switch>
    </div>
  )
}
