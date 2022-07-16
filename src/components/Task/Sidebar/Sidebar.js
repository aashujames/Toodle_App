import React from "react";
import { useNavigate } from "react-router-dom";
import requestClient from "../../../axios/Client";
import { clearAllTokens } from "../../../axios/tokenHandler";
import "../../../styles/Sidebar.css";

const Sidebar = () => {
    let navigate = useNavigate();

    const handleClick = () => {
        clearAllTokens();
        navigate("/login", { replace: true });
    };

    return (
        <div className="sidebar-container">
            <h3>Today</h3>
            <h3>Tomorrow</h3>
            <button onClick={handleClick}>Log Out</button>
        </div>
    );
};

export default Sidebar;
