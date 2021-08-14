import React, { useState } from "react";

import TDLListDoneTasks from "./TDLListDoneTasks";

function TDLMain({ tasks, handleCheckedTask, removeTask }) {
  const [shownEndedTasksComponent, setShownEndedTasksComponent] =
    useState(false);

  const showEndedTasksComponent = () => {
    if (shownEndedTasksComponent) return;
    setShownEndedTasksComponent(true);
  };
  const hideEndedTasksComponent = () => {
    if (!shownEndedTasksComponent) return;
    setShownEndedTasksComponent(false);
  };

  const Elements = tasks
    .filter((element) => {
      if (!element.done) {
        return element;
      } else return false;
    })
    .map((element) => {
      return (
        <li key={element.id} className={element.checked ? "toright" : ""}>
          <input
            type="checkbox"
            id="element"
            checked={element.checked}
            onChange={() => handleCheckedTask(element.id)}
          ></input>
          <label htmlFor="element" className="element">
            <i className="fas fa-check"> </i>
          </label>
          <p>{element.name}</p>
        </li>
      );
    });

  return (
    <div className="TDL__main">
      <div className="TDL__buttons">
        <button className="TDL__button" onClick={hideEndedTasksComponent}>
          <i
            className={
              !shownEndedTasksComponent ? "fas fa-list active" : "fas fa-list"
            }
          ></i>
        </button>
        <button
          className="TDL__button TDL__button--gray"
          onClick={showEndedTasksComponent}
        >
          <i
            className={
              shownEndedTasksComponent
                ? "far fa-calendar-check active"
                : "far fa-calendar-check"
            }
          ></i>
        </button>
      </div>
      <div className="TDL__list list">
        {Elements.length === 0 ? (
          <p> Brak aktywnych tasków </p>
        ) : (
          <ul> {Elements} </ul>
        )}
        <TDLListDoneTasks
          tasks={tasks}
          shown={shownEndedTasksComponent}
          removeTask={removeTask}
          handleCheckedTask={handleCheckedTask}
        ></TDLListDoneTasks>
      </div>
    </div>
  );
}
export default TDLMain;
