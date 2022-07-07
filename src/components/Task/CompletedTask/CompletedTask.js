import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../../../styles/CompletedTask.css";

const CompletedTask = ({ taskList }) => {
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
                        </div>
                    )
            )}
        </>
    );
};

export default CompletedTask;
