import React from "react";

function Task( { task } ) {
  // console.log("Task Cats", task)

  const removeTask = (e) => {
    console.log("Remove Task", e)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={removeTask} className="delete">X Be Gone X</button>
    </div>
  );
}

export default Task;
