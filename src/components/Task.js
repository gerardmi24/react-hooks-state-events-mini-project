import React from "react";

function Task( { task, removeTask } ) {
 
  function deleteTask(e) {
    console.log("Task Cats", task)
    removeTask(task)
  }

  return (
    <div className="task">
      <div className="text">{task.text}</div>
      <div className="label">{task.category}</div>
      <button onClick={deleteTask} className="delete">Remove Task</button>
    </div>
  );
}

export default Task;
