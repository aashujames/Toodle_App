import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/logo.png";

const Login = () => {
    return (
        <div className="base-container">
            <div className="header">Login</div>
            <Link to="/">
                <img src={logo} alt="logo" className="image" />
            </Link>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username </label> <br />
                    <input className="text-field" type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password </label>
                    <br />
                    <input
                        className="text-field"
                        type="password"
                        id="password"
                    />
                </div>
            </div>

            <div className="footer">
                <button type="button" className="btn">
                    Login
                </button>
            </div>
            <div>
                New User? <Link to="../register">Register</Link>
            </div>
        </div>
    );
};

export default Login;
