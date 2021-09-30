import React, { useState, useEffect } from "react";
import "./css/TaskDetail.css";
import { useParams } from "react-router-dom";
import { getProjectTasks } from "../services/tasks";
import { useHistory } from "react-router";
import SubTaskDisplay from "./SubTaskDisplay";

const TaskDetail = (props) => {
  const { handleVerify, setEstTime } = props;
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [subTasks, setSubTasks] = useState([]);
  const history = useHistory();

  const completedSubTasks = () => {
    const completed = subTasks.filter((st) => st.complete === true);
    return completed.length;
  };
  const totalTime = () => {
    const total = subTasks.reduce((sum, time) => {
      return sum + parseFloat(time.estimated_time);
    }, 0);
    return total;
  };

  const timeRemaining = () => {
    const time = subTasks
      .filter((st) => st.complete === false)
      .reduce((sum, time) => {
        return sum + parseFloat(time.estimated_time);
      }, 0);

    return time;
  };

  useEffect(() => {
    const fetchTask = async () => {
      handleVerify();
      const res = await getProjectTasks(id);
      console.log("Task", res.data);
      setTask(res.data);
      setSubTasks(res.data.sub_tasks);
    };
    fetchTask();
  }, []);

  return (
    <div className="section mt-6">
      <div className="container is-flex is-justify-content-center">
        <div className="back-btn">
          <button
            className="button is-small"
            onClick={() => {
              history.goBack();
            }}
          >
            back to project
          </button>
        </div>
        <p className="title">{task.name}</p>
      </div>
      <div
        className="box 
      is-flex
      is-flex-direction-column
      is-align-items-center
      is-justify-content-space-around
      has-background-grey-light
      mt-2"
      >
        <p className="subtitle has-text-black">Overview</p>
        <div className="dropdown">
          <select className="dropdown-item" name="task-status" id="status">
            <option value="not-started">not-started</option>
            <option value="in-progress">in-progress</option>
            <option value="complete">complete</option>
          </select>
        </div>
        {task && (
          <>
            <div className="container task-desc has-background-white m-4 ">
              {console.log("task state", task)}
              <p className="content p-1">{task.description}</p>
            </div>
            <div
              className="container is-flex 
        is-flex-direction-row task-details
        has-background-white m-4 p-3"
            >
              <div className="container is-flex is-flex-direction-column">
                <p className="content is-size-6 p-1">{`Target Date: ${task.target_date}`}</p>
                <p className="content p-1">{`Total Est. Time: ${totalTime()} hrs`}</p>
                <p className="content p-1">{`Time Remaining: ${timeRemaining()} hrs`}</p>
              </div>
              <div className="container is-flex is-flex-direction-column">
                <p className="content p-1">{`Total Sub-Tasks: ${subTasks.length}`}</p>
                <p className="content p-1">{`Priority: ${task.priority}`}</p>
                <p className="content p-1">{`Sub-Tasks Complete: ${completedSubTasks()}`}</p>
              </div>
            </div>
          </>
        )}
      </div>
      <SubTaskDisplay subTasks={subTasks} />
      <div className="container button-container is-flex is-justify-content-space-around ">
        <button className="button is-primary">Edit</button>
        <button className="button is-danger">Delete</button>
      </div>
    </div>
  );
};

export default TaskDetail;
