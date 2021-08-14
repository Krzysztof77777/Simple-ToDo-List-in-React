import React, { useState } from "react";

import "./AppStyles.css";
import "./TDLStyles.css";

import TDLMain from "./TDLMain";
import TDLAddTaskForm from "./TDLAddTaskForm";

const timeAnimationForDone = 1300;

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Call the dentist",
      checked: false,
      done: false,
    },
    {
      id: 2,
      name: "No alcohol today",
      checked: false,
      done: false,
    },
  ]);
  const [shownAddTaskComponent, setShownAddTaskComponent] = useState(false);

  const handleShownAddTaskComponent = () => {
    setShownAddTaskComponent((prevValue) => !prevValue);
  };

  const addTask = (name) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        name: name,
        checked: false,
        done: false,
      },
    ]);
  };

  const removeTask = (id) => {
    setTasks((prevValue) =>
      prevValue.filter((e) => {
        if (e.id === id) {
          return false;
        }
        return e;
      })
    );
  };

  const handleCheckedTask = (id) => {
    setTasks((prevValue) =>
      prevValue.map((e) => {
        if (e.id === id) {
          e.checked = true;
        }
        return e;
      })
    );
    setTimeout(() => {
      setDoneTask(id);
    }, timeAnimationForDone);
  };

  const setDoneTask = (id) => {
    setTasks((prevValue) =>
      prevValue.map((e) => {
        if (e.id === id) {
          e.done = true;
        }
        return e;
      })
    );
  };
  return (
    <>
      <div className="TDL">
        <div className="TDL__container">
          <div className="TDL__front">
            <TDLMain
              tasks={tasks}
              handleCheckedTask={handleCheckedTask}
              removeTask={removeTask}
            ></TDLMain>
            <TDLAddTaskForm
              taskLength={tasks.length}
              shown={shownAddTaskComponent}
              click={handleShownAddTaskComponent}
              addTask={addTask}
            ></TDLAddTaskForm>
          </div>
          <span
            className={
              shownAddTaskComponent ? "TDL__addtask hide" : "TDL__addtask"
            }
            onClick={handleShownAddTaskComponent}
          >
            <i className="fas fa-plus"> </i>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
