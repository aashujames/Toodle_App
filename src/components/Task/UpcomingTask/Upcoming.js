import React, { useState } from "react";
import Calendar from "react-calendar";

const Upcoming = () => {
    const [date, setDate] = useState(new Date());

    const handleChange = (date) => {
        setDate(date);
    };

    return (
        <div>
            <Calendar onChange={handleChange} value={date} />
        </div>
    );
};

export default Upcoming;
