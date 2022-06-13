import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Task = ({ task, setTaskList, taskList, setIsCompleted }) => {
    const { id, name, isCompleted } = task;
    const [input, setInput] = useState(name);

    const updateTaskList = () => {
        const temp = [...taskList];
        const specificItem = temp.find((obj) => obj.id === id);
        specificItem.name = input;
        setTaskList(temp);
    };

    const removeTask = () => {
        const filtered = taskList.filter((item) => item.id !== id);
        setTaskList(filtered);
    };

    const handleCompleted = () => {
        const temp = [...taskList];
        const specificItem = temp.find((obj) => obj.id === id);
        specificItem.isCompleted = !isCompleted;
        setTaskList(temp);
    };

    return (
        <div>
            <input
                type="checkbox"
                checked={isCompleted}
                onChange={handleCompleted}
            />
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onBlur={updateTaskList}
                // onKeyDown={(e) => {
                //     if (e.key === "Enter") updateTaskList();
                // }}
            />
            <button onClick={removeTask}>
                <ClearIcon />{" "}
            </button>
        </div>
    );
};

export default Task;
