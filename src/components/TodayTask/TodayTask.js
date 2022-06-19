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

    const handleCancel = () => {
        setName("");
        setShowInput(true);
    };

    var myCurrentDate = new Date();
    var date = myCurrentDate.getDate();

    return (
        <section>
            <h1>
                {date}{" "}
                <span className="month">
                    {myCurrentDate.toLocaleString("default", {
                        month: "short"
                    })}
                </span>
            </h1>
            <h2>Today's Tasks:</h2>
            <hr />
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
                        <button
                            className="newtask"
                            onClick={() => setShowInput(false)}
                        >
                            <AddIcon /> New Task
                        </button>
                    ) : (
                        <div>
                            <input
                                className="today-input"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <button
                                type="reset"
                                onClick={handleCancel}
                                className="cancel"
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </form>
            <CompletedTask taskList={taskList} />
        </section>
    );
};

export default TodayTask;
