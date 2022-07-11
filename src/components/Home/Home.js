import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Home.css";
import logo from "../../../src/logo.png";
import requestClient from "../../axios/Client";
import { getToken } from "../../axios/tokenHandler";

const Home = () => {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        try {
            requestClient
                .post("/auth/token/verify/", { token: getToken("access") })
                .then((res) => {
                    if (res.status === 200) {
                        setAuth(true);
                    }
                });
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="logo" className="image" />
                {isAuth ? (
                    <div className="nav-container">
                        <Link to="task" className="link">
                            Task Page
                        </Link>
                    </div>
                ) : (
                    <div className="nav-container">
                        <Link to="register" className="link">
                            Register
                        </Link>
                        <Link to="login" className="link">
                            Login
                        </Link>
                    </div>
                )}
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
