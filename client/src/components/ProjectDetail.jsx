import React, { useState, useEffect } from "react";
import "./css/ProjectDetail.css";
import { useHistory } from "react-router";
import { Link, useParams } from "react-router-dom";
import { getOneProject } from "../services/projects";
function ProjectDetail(props) {
  const [project, setProject] = useState({});
  const { handleVerify, tasks, setTasks } = props;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      handleVerify();
      const res = await getOneProject(id);
      setProject(res.data.project);
      setTasks(res.data.tasks);
      console.log(res.data.tasks);
    };
    fetchData();
  }, []);

  const handleColor = (status) => {
    switch (status) {
      case "not-started":
        return "danger";
        break;
      case "in-progress":
        return "warning";
        break;
      case "complete":
        return "success";
        break;
      default:
        return "danger";
    }
  };

  return (
    <div>
      <div className="container">
        <div className="section pb-0 mt-6 is-flex is-justify-content-space-between">
          <button
            className="button is-small"
            onClick={() => {
              history.push("/");
            }}
          >
            Back to projects
          </button>
          <div className="has-text-centered">
            <h1 className="title mr-6">{project.name}</h1>
          </div>
          <button className="button is-outlined is-link">Edit</button>
        </div>
        <div className="container">
          {tasks?.map((task, index) => {
            return (
              <Link to={`/tasks/${task.id}`}>
                <div
                  className="card container m-3 p-2 px-6 is-flex is-flex-direction-row is-justify-content-space-between"
                  key={index}
                >
                  <div>
                    <p className="label is-size-5 m-2">{task.name}</p>
                  </div>
                  <div>
                    <p className="content is-size-7 m-2">{`Est. Time Left:`}</p>
                  </div>
                  <div
                    className={`content is-bordered has-background-${handleColor(
                      task.status
                    )}-light has-text-black p-1 m-2`}
                  >
                    {task.status}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <Link to={`/task/${id}/new`}>
          <div className="card container new-task m-3 has-background-grey-light is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
            <h2 className="content">Add New Task</h2>
            <h1>+</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
