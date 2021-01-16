import React, {useState} from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ cats, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Food");

  function submitForm(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText("")
    setCategory("Food")
  }

  return (
    <form onSubmit={submitForm} className="new-task-form">
      <label>
        Details
        <input type="text" value={text} name="text" onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        <select value={category} onChange={(e) => setCategory(e.target.value)} name="category">
          {CATEGORIES.map((cat) => (
          <option key={cat}> {cat} </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
