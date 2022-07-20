import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/logo.png";
import "../../styles/topnav.css";

const topnav = () => {
    return (
        <div>
            <nav>
                <Link to="/">
                    <img src={logo} alt="logo" className="image" />
                </Link>
            </nav>
        </div>
    );
};

export default topnav;
