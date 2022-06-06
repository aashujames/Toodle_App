import React, { useState } from "react";
import "../../styles/TodayTask.css";
import AddIcon from "@mui/icons-material/Add";
import { v4 as uuid } from "uuid";

const TodayTask = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const [showInput, setShowInput] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const singleTask = { id: uuid(), task };
        setTaskList([...taskList, singleTask]);
        setShowInput(true);
        setTask("");
    };

    return (
        <section>
            <h2>Today's Tasks:</h2>
            {taskList.map((item) => (
                <div key={item.id}>
                    <p>{item.task}</p>
                    <button>edit</button>
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
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    )}
                </div>
            </form>
        </section>
    );
};

export default TodayTask;
