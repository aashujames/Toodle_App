import React, { useState } from "react";
import "../../../styles/TodayTask.css";
import AddIcon from "@mui/icons-material/Add";
import Task from "../Task";
import CompletedTask from "../CompletedTask/CompletedTask";
import { useEffect } from "react";
import requestClient from "../../../axios/Client";

const TodayTask = () => {
    const [taskList, setTaskList] = useState([]);
    const [task, setTask] = useState("");
    const [showInput, setShowInput] = useState(true);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const singleTask = { task, isCompleted, priority: 0 };

        requestClient.post("/todos/", singleTask).then(() => {
            setTaskList([...taskList, singleTask]);
        });
        setShowInput(true);
        setTask("");
    };

    const handleCancel = () => {
        setTask("");
        setShowInput(true);
    };

    const fetchData = async () => {
        const response = await requestClient.get("/todos/");
        setTaskList(response.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                        taskItem={item}
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
                                value={task}
                                onChange={(e) => setTask(e.target.value)}
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
