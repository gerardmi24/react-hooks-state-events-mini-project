import React from "react";
import Task from "./Task"

function TaskList( { tasks, removeTask }) {

  const renderTasks = tasks.map((el) => <Task key={el.text} removeTask={removeTask} task={el}
  />);
  
  // console.log("TaskList Tasks", tasks)
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
