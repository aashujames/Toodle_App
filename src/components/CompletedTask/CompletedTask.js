import React from "react";

const CompletedTask = ({ taskList }) => {
    return (
        <>
            <h2>Completed Task: </h2>
            {taskList.map(
                (item) =>
                    item.isCompleted && (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    )
            )}
        </>
    );
};

export default CompletedTask;
