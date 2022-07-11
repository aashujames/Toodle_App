import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import logo from "../../../src/logo.png";
import requestClient from "../../axios/Client";

const Home = () => {
    requestClient.post("/auth/token/verify/").then((res) => {
        console.log(res);
    });

    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="logo" className="image" />
                <div className="nav-container">
                    <Link to="register" className="link">
                        Register
                    </Link>
                    <Link to="login" className="link">
                        Login
                    </Link>
                </div>
            </nav>
            <div className="top">
                <h1>Welcome to the Toodle App!</h1>
                <br />
                <p>
                    For proper workflow Toodle is what you need.
                    <br /> Make your everyday an awesome day with Toodle.
                    <br /> New User register to get access.
                </p>
            </div>
        </>
    );
};

export default Home;
