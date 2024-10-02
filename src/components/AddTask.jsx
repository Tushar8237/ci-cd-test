import React, { useState } from "react";

const AddTask = ({ addTask }) => {
    const [taskTitle, setTaskTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim()) {
            addTask(taskTitle);
            setTaskTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Enter a new task"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask
