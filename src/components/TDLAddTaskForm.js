import React, { useRef, useState, useEffect } from "react";

function TDLAddTaskForm({ shown, click, addTask, taskLength }) {
  const [taskName, setTaskName] = useState("");
  const [visibleInfo, setVisibleInfo] = useState(false);
  const [textInfo, setTextInfo] = useState("");

  const addTaskForm = useRef();
  const infoElement = useRef();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handdleTaskName = (event) => setTaskName(event.target.value);

  const addNewTask = (event) => {
    event.preventDefault();

    if (taskName.length < 3) {
      setTextInfo("Za mało znaków");
      setVisibleInfo(true);
      return;
    } else if (taskName.length > 30) {
      setTextInfo("Maksymalnie 30 znaków");
      setVisibleInfo(true);
      return;
    }
    setTaskName("");
    setTextInfo("Task został dodany!");
    setVisibleInfo(true);
    setTimeout(() => {
      setVisibleInfo(false);
    }, 2000);
    addTask(taskName);
  };

  const leaveForm = () => {
    setTaskName("");
    setTextInfo("");
    setVisibleInfo(false);
    click();
  };

  useEffect(() => {
    if (infoElement.current) {
      infoElement.current.classList.add("visible");
    }
  });

  const date = new Date();
  const day = date.getDate();
  const month = months[date.getMonth()];
  const dayInWeek = days[date.getDay()];

  const className = shown ? "TDL__addtaskform active" : "TDL__addtaskform";

  return (
    <div ref={addTaskForm} className={className}>
      <div>
        <p>
          <b>{dayInWeek},</b> {day}
          <br></br>
          <span>{month}</span>
        </p>
        <span>
          <b>{taskLength}</b> Tasks
        </span>
      </div>
      <div>
        <i className="fas fa-arrow-left" onClick={leaveForm}></i>
        <p>Add new task</p>
      </div>
      <form action="" onSubmit={addNewTask}>
        <input
          type="text"
          placeholder="Name of task"
          onChange={(event) => {
            handdleTaskName(event);
            setTextInfo("");
            setVisibleInfo(false);
          }}
          value={taskName}
        />
        <input type="submit" value="Add task"></input>
      </form>
      {visibleInfo ? (
        <p ref={infoElement} className="info">
          {textInfo}
        </p>
      ) : (
        false
      )}
    </div>
  );
}
export default TDLAddTaskForm;
