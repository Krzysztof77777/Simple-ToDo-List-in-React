import React, { useEffect, useRef } from "react";

const timeAnimationForRemoveTask = 1300;

function TDLListDoneTasks({ shown, tasks, removeTask, handleCheckedTask }) {
  const listDoneTasks = useRef();

  useEffect(() => {
    if (shown) return listDoneTasks.current.classList.add("active");
    else listDoneTasks.current.classList.remove("active");
  });

  const RemoveTaskAnimation = (event, id) => {
    event.target.parentNode.classList.add("toright");
    setTimeout(() => {
      removeTask(id);
    }, timeAnimationForRemoveTask);
  };
  const Elements = tasks
    .filter((element) => {
      if (element.done) {
        return element;
      } else return false;
    })
    .map((element) => {
      return (
        <li
          key={element.id}
          style={{
            textDecoration: "line-through",
            pointerEvents: "none",
          }}
        >
          <input
            style={{ pointerEvents: "none" }}
            checked={element.checked}
            onChange={() => handleCheckedTask(element.id)}
            type="checkbox"
            id="element"
          ></input>
          <label htmlFor="element" className="element">
            <i className="fas fa-check"> </i>
          </label>
          <p>{element.name}</p>
          <i
            className="fas fa-trash-alt"
            onClick={(event) => RemoveTaskAnimation(event, element.id)}
            style={{ pointerEvents: "all" }}
          ></i>
        </li>
      );
    });
  return (
    <div ref={listDoneTasks} className="list__donetasks">
      {Elements.length === 0 ? (
        <p> Brak zakończonych tasków </p>
      ) : (
        <ul> {Elements} </ul>
      )}
    </div>
  );
}

export default TDLListDoneTasks;
