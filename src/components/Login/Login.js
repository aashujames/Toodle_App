import React from "react";
import logo from "../../../src/logo.png";

const Login = () => {
    return (
        <div className="base-container">
            <div className="header">Login</div>
            <img src={logo} alt="logo" className="image" />

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
        </div>
    );
};

export default Login;
