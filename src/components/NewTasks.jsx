import { useRef, useState } from "react";
import Modal from "./Modal";

export default function NewTasks({ addTask }) {
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddClick = () => {
    if (newTask.trim() === "") {
      return;
    }
    addTask(newTask);
    setNewTask("");
  };

  return (
    <div className="flex item-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={newTask}
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleAddClick}>
        Add Task
      </button>
    </div>
  );
}
