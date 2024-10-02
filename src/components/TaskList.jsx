import React from "react";

function TaskList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />

          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.title}
          </span>

          <button onClick={() => removeTask(task.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
