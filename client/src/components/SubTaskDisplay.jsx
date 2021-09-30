import React from "react";

export default function SubTaskDisplay(props) {
  const { subTasks } = props;
  return (
    <div className="box is-flex is-flex-direction-column task-details sub has-background-white p-2">
      <div className="container is-flex is-justify-content-center has-text-info">
        <p className="is-size-5">Sub-Tasks</p>
      </div>
      {subTasks?.map((task, index) => (
        <div className="content is-flex is-flex-direction-row is-justify-content-space-between m-1">
          <div className="is-flex is-flex-direction-row">
            <input
              type="checkbox"
              id="complete"
              name="complete"
              value={task.complete}
            />
            <h6 className="ml-5">{task.name}</h6>
          </div>
          <div>
            <p>{`${task.estimated_time} hrs`}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
