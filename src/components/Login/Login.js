import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/logo.png";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        setData({
            ...data,
            [id]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            username: data.username,
            password: data.password
        };
    };

    return (
        <div className="base-container">
            <div className="header">Login</div>
            <Link to="/">
                <img src={logo} alt="logo" className="image" />
            </Link>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username </label> <br />
                        <input
                            className="text-field"
                            type="text"
                            id="username"
                            value={data.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <br />
                        <input
                            className="text-field"
                            type="password"
                            id="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="footer">
                    <button type="submit" className="btn">
                        Login
                    </button>
                    <div>
                        New User? <Link to="../register">Register</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
