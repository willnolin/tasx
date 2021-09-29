import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { getCurrentUserProjects } from '../services/projects';
const Home = (props) => {
  const {handleLogout, handleVerify, currentUser } = props;

  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      handleVerify();
      const res = await getCurrentUserProjects();
      console.log(res.data)
      setProjects(res.data)
    }
    fetchProjects()
  }, [])

  const getIncompleteTaskList = (tasks) => {
    return tasks.filter(task => task.status !== 'complete')
  }

  const handleColor = (status) => {
    switch (status) {
      case 'not-started':
        return 'danger';
        break;
      case 'in-progress':
        return 'warning';
        break;
      case 'complete':
        return 'success';
        break;
      default:
        return 'danger';;
    }
  }
  
  return (
    <div className="container">
     
      <div className="section pb-4 is-flex is-justify-content-center">
        <h1 className="title mt-5">PROJECTS</h1>
      </div>
      <div className="message-header has-background-light has-shadow is-flex is-justify-content-space-around">
        <h3 className="subtitle mb-0">{`Hi ${currentUser.username}...`}</h3>
        <h3 className="has-text-grey">{`You have ${projects.length} ongoing projects` }</h3>
        </div>
      <div className="container">
        {projects.map((project, index) => {
          return <Link to={`/projects/${project.id}`}>
          <div className="card container m-3 p-2 is-flex is-flex-direction-row is-justify-content-space-around" key={index}>
          <div>
            <p className="content is-size-5 m-2">{project.name}</p>
            <div className={`content is-bordered has-background-${handleColor(project.status)} has-text-black p-1 m-2`}>{project.status}</div>
          </div>
          <div>
            <p className="content is-size-6 m-2">{`Tasks to complete: ${getIncompleteTaskList(project.tasks).length}`}</p>
            <p className="content is-size-6 m-2">{`Target date: ${project.target_date}`}</p>
          </div>
            </div>
            </Link>
      })}
        </div>
    </div>
  );
}

export default Home;
