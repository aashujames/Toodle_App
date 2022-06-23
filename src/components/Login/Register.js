import React from "react";
import logo from "../../../src/logo.png";
import "../../styles/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="base-container">
            <div className="header">Register</div>
            <Link to="/">
                <img src={logo} alt="logo" className="image" />
            </Link>

            <div className="form">
                <div className="form-group">
                    <label htmlFor="username">Username </label> <br />
                    <input className="text-field" type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email </label>
                    <br />
                    <input className="text-field" type="email" id="email" />
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
                    Register
                </button>
            </div>
            <div>
                Old User? <Link to="../login">Login</Link>
            </div>
        </div>
    );
};

export default Register;
