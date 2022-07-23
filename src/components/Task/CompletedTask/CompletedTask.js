import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../../../styles/CompletedTask.css";
import ClearIcon from "@mui/icons-material/Clear";
import requestClient from "../../../axios/Client";

const CompletedTask = ({ taskList, setTaskList }) => {
    const removeCompTask = (id) => {
        requestClient.delete(`/todos/${id}/`).then(() => {
            const filtered = taskList.filter((item) => item.id !== id);
            setTaskList(filtered);
        });
    };

    return (
        <>
            <h2>Completed Task: </h2>
            <hr />
            {taskList.map(
                (item) =>
                    item.isCompleted && (
                        <div key={item.id} className="Comptask-container">
                            <p className="para">
                                <CheckCircleIcon className="icon" />
                                {item.task}
                            </p>
                            <button
                                onClick={() => removeCompTask(item.id)}
                                className="remove"
                            >
                                <ClearIcon />{" "}
                            </button>
                        </div>
                    )
            )}
        </>
    );
};

export default CompletedTask;
