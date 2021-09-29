import React, { useState, useEffect } from 'react';
import './css/TaskDetail.css'
import { Link, useParams } from 'react-router-dom'
import { getProjectTasks } from '../services/tasks';

const TaskDetail = (props) => {
  const { handleVerify } = props;
  const { id } = useParams();
  const [task, setTask] = useState({})
  const [subTasks, setSubTasks] = useState([])
  const [totalEstTime, setTotalEstTime] = useState(0)
  const [remaining, setRemaining] = useState(0)
  
  useEffect(() => {
    const fetchTask = async () => {
      handleVerify();
      const res = await getProjectTasks(id);
      console.log("Task",res.data)
      setTask(res.data)
      setSubTasks(res.data.sub_tasks)
      totalTime()
      timeRemaining()
    }
    fetchTask()
  }, [])

  const completedSubTasks = () => {
    const completed = subTasks.filter(st => st.complete === true)
    return completed.length
  }

  const totalTime = () => {
    // return subTasks.reduce((sum, time) => {
    //   return sum + parseFloat(time.estimated_time)
    // },0)
    setTotalEstTime(subTasks.reduce((sum, time) => {
      return sum + parseFloat(time.estimated_time)
    },0))
  }

  const timeRemaining = () => {
    // return subTasks.filter(st => st.complete === false).reduce((sum, time) => {
    //   return sum + parseFloat(time.estimated_time)
    // },0)
    setRemaining(subTasks.filter(st => st.complete === false).reduce((sum, time) => {
      return sum + parseFloat(time.estimated_time)
    },0))
  }
  

  return (
    <div className="section">
      <div className="container is-flex is-justify-content-center">
        <p className="title m-5">{task.name}</p>
      </div>
      <div className="box 
      is-flex
      is-flex-direction-column
      is-align-items-center
      is-justify-content-space-around
      has-background-grey-light">
        <p className="subtitle has-text-black">Overview</p>
       <div className="dropdown">
        <select className="dropdown-item" name="task-status" id="status">
          <option value="not-started">not-started</option>
          <option value="in-progress">in-progress</option>
          <option value="complete">complete</option>
          </select>
        </div>
        {task &&
          <>
          <div className="container task-desc has-background-white m-4 ">
            {console.log("task state",task)}
        <p className="content p-1">{task.description}</p>
        </div>
        <div className="container is-flex 
        is-flex-direction-row task-details
        has-background-white m-4 p-3">
          <div className="container is-flex is-flex-direction-column">
          <p className="content is-size-6 p-1">{`Target Date: ${task.target_date}`}</p>
          <p className="content p-1">{`Total Est. Time: ${totalEstTime} hrs`}</p>
            <p className="content p-1">{`Time Remaining: ${remaining} hrs`}</p>
        </div>
          <div className="container is-flex is-flex-direction-column">
          <p className="content p-1">{`Total Sub-Tasks: ${subTasks.length}`}</p>
          <p className="content p-1">{`Sub-Tasks Complete: ${completedSubTasks()}`}</p>
            <p className="content p-1">{`Priority: ${task.priority}`}</p>
        </div>
          </div>
          </>
}
        </div>
    </div>
  );
}

export default TaskDetail;
