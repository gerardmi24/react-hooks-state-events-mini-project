import React from "react";
import Task from "./Task"

function TaskList( { tasks }) {

  const renderTasks = tasks.map((el) => <Task key={el.id} task={el}
  />);
  
  console.log("TaskList Tasks", tasks)

  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
