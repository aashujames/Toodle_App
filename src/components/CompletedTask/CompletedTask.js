import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CompletedTask = ({ taskList }) => {
    return (
        <>
            <h2>Completed Task: </h2>
            {taskList.map(
                (item) =>
                    item.isCompleted && (
                        <div key={item.id}>
                            <p>
                                <CheckCircleIcon />
                                {item.name}
                            </p>
                        </div>
                    )
            )}
        </>
    );
};

export default CompletedTask;
