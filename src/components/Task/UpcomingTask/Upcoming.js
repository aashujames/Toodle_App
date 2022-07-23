import React, { useState } from "react";
import Calendar from "react-calendar";
import "../../../styles/Upcoming.css";

const Upcoming = () => {
    const [date, setDate] = useState(new Date());

    const handleChange = (date) => {
        setDate(date);
    };

    return (
        <div className="container">
            <Calendar onChange={handleChange} value={date} />
        </div>
    );
};

export default Upcoming;
