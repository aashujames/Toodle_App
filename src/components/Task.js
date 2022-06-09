import React, { useState } from "react";

const Task = ({ task, id, setTaskList, taskList }) => {
    const [input, setInput] = useState(task);

    const updateTaskList = () => {
        const temp = [...taskList];
        const specificItem = temp.find((obj) => obj.id === id);
        specificItem.task = input;
        setTaskList(temp);
    };

    return (
        <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onBlur={updateTaskList}
            // onKeyDown={(e) => {
            //     if (e.key === "Enter") updateTaskList();
            // }}
        />
    );
};

export default Task;
