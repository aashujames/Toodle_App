import React from "react";
import logo from "../../../../src/logo.png";

const nav = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="image" />

            <div className="nav-container">Logout</div>
        </nav>
    );
};

export default nav;
