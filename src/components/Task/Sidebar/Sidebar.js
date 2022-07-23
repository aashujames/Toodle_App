import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { clearAllTokens } from "../../../axios/tokenHandler";
import "../../../styles/Sidebar.css";
import Upcoming from "../UpcomingTask/Upcoming";

const Sidebar = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        clearAllTokens();
        navigate("/login", { replace: true });
    };

    return (
        <div className="sidebar-container">
            <h3>Today</h3>
            <div>
                <Link to="/task/upcoming">Upcoming</Link>
            </div>
            <button onClick={handleClick}>Log Out</button>
        </div>
    );
};

export default Sidebar;
