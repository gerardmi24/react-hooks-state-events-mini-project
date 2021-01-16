import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("ALL")

  function onTaskFormSubmit(newTask) {
    setTasks([...tasks, newTask])
  }

  function removeTask(delTask) {
    // console.log("Remove", delTask);
    setTasks(tasks.filter((task) => task !== delTask))
  }

  // function changeCat(e) {
  //   // console.log(e)
  //   setCategory(e)
  // }

  const shownTasks = tasks.filter((task) =>
    category === "ALL" || task.category === category
  );

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
      cats={CATEGORIES}
      selectCat={category}
      onSelectCat={setCategory}
      />
      <NewTaskForm
      cats={CATEGORIES.filter((cat) => cat !== "ALL")}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
      tasks={shownTasks}
      removeTask={removeTask}
      />
    </div>
  );
}

export default App;
