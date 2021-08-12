import React from "react";

function TDLMain() {
  return (
    <div className="TDL__main">
      <div className="TDL__buttons">
        <button className="TDL__button">
          <i className="fas fa-list"></i>
        </button>
        <button className="TDL__button">
          <i className="far fa-calendar-check"></i>
        </button>
      </div>
      <div className="TDL__list"></div>
    </div>
  );
}
export default TDLMain;
