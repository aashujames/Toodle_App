import React from "react";
import logo from "../../../src/logo.png";

const Login = () => {
    return (
        <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <img src={logo} alt="logo" className="image" />

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username </label>
                        <input
                            className="text-field"
                            type="text"
                            id="username"
                            placeholder="username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password </label>
                        <input
                            className="text-field"
                            type="password"
                            id="password"
                            placeholder="password"
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
        </div>
    );
};

export default Login;
