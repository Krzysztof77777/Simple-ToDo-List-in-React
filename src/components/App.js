import React, { useState } from "react";

import "./AppStyles.css";
import "./TDLStyles.css";

import TDLMain from "./TDLMain";
import TDLAddTaskForm from "./TDLAddTaskForm";

function App() {
  const [shownAddTaskComponent, setShownAddTaskComponent] = useState(false);
  const [shownEndedTasksComponent, setShownEndedTasksComponent] =
    useState(false);

  return (
    <>
      <div className="TDL">
        <div className="TDL__container">
          <TDLMain></TDLMain>
          <TDLAddTaskForm></TDLAddTaskForm>
        </div>
        <span className="TDL__addtask">
          <i className="fas fa-plus"></i>
        </span>
      </div>
    </>
  );
}

export default App;
