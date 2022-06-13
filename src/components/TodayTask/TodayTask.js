import React, { useState } from "react";
import "../../styles/TodayTask.css";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuid } from "uuid";
import Task from "../Task";
import CompletedTask from "../CompletedTask/CompletedTask";

const TodayTask = () => {
    const [taskList, setTaskList] = useState([]);
    const [name, setName] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const singleTask = { id: uuid(), name, isCompleted };
        setTaskList([...taskList, singleTask]);
        setShowInput(true);
        setName("");
    };

    return (
        <section>
            <h2>Today's Tasks:</h2>
            {taskList.map((item) => (
                <div key={item.id}>
                    <Task
                        task={item}
                        taskList={taskList}
                        setTaskList={setTaskList}
                        setIsCompleted={setIsCompleted}
                    />
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <div>
                    {showInput ? (
                        <button onClick={() => setShowInput(false)}>
                            <AddIcon /> New Task
                        </button>
                    ) : (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
                </div>
            </form>
            <CompletedTask taskList={taskList} />
        </section>
    );
};

export default TodayTask;
