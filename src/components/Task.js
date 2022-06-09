import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Task = ({ task, id, setTaskList, taskList }) => {
    const [input, setInput] = useState(task);

    const updateTaskList = () => {
        const temp = [...taskList];
        const specificItem = temp.find((obj) => obj.id === id);
        specificItem.task = input;
        setTaskList(temp);
    };

    const removeTask = () => {
        const filtered = taskList.filter((item) => item.id !== id);
        setTaskList(filtered);
    };

    return (
        <div>
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
