import React, { useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { postTask } from "../services/tasks";
const NewTask = (props) => {
  const { handleVerify, currentUser } = props;
  const history = useHistory();
  const { project_id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    target_date: "",
    priority: "low",
  });

  const { name, description, target_date, priority } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      status: "not-started",
      project_id: project_id,
    }));
  };

  const createTask = async () => {
    console.log(formData, "this is in NewProject");
    handleVerify();
    const taskData = await postTask(formData);
    history.push("/");
  };

  return (
    <div>
      <form
        className="card container p-6 has-text-centered new-project-form"
        onSubmit={(e) => {
          e.preventDefault();
          createTask();
        }}
      >
        <div className="field">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            className="control"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Description:</label>
          <textarea
            id="description"
            name="description"
            value={description}
            rows="4"
            cols="30"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="field">
          <label className="label">Target Date:</label>
          <input
            type="date"
            name="target_date"
            value={target_date}
            className="control"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label className="label">Priority:</label>
          <div className="dropdown">
            <select
              className="dropdown-item"
              name="priority"
              id="priority"
              value={priority}
              onChange={handleChange}
            >
              <option selected value="low">
                low
              </option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>
        {/* <input type="hidden" id="status" name="status" value={status} />
        <input type="hidden" id="user_id" name="user_id" value={user_id} /> */}
        <div className="field is-grouped is-flex is-justify-content-center mt-5">
          <button type="submit" className="button is-primary">
            Create
          </button>
          <button
            className="button is-normal"
            onClick={(e) => {
              e.preventDefault();
              // history.push("/");
              history.goBack();
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
