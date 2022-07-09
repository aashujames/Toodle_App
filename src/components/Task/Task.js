import React, { useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import "../../styles/Task.css";
import requestClient from "../../axios/Client";

const Task = ({ taskItem, setTaskList, taskList, setIsCompleted }) => {
    const { id, task, isCompleted } = taskItem;
    const [input, setInput] = useState(task);

    const updateTaskList = () => {
        const temp = [...taskList];
        const specificItem = temp.find((obj) => obj.id === id);
        specificItem.task = input;
        setTaskList(temp);
    };

    const removeTask = () => {
        requestClient.delete(`/todos/${id}/`).then(() => {
            const filtered = taskList.filter((item) => item.id !== id);
            setTaskList(filtered);
        });
    };

    const handleCompleted = () => {
        const temp = [...taskList];
        const specificItem = temp.find((obj) => obj.id === id);
        specificItem.isCompleted = !isCompleted;
        setTaskList(temp);
    };

    return (
        !isCompleted && (
            <>
                <div className="task-container">
                    <input
                        className="check"
                        type="checkbox"
                        checked={isCompleted}
                        onChange={handleCompleted}
                    />
                    <input
                        className="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onBlur={updateTaskList}
                    />
                    <button onClick={removeTask} className="remove">
                        <ClearIcon />{" "}
                    </button>
                </div>
            </>
        )
    );
};

export default Task;
