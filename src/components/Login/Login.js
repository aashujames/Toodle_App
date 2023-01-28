import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../axios/tokenHandler";
import axios from "axios";
import loginImage from "../../login-cover.svg";
import logo from "../../../src/logo.png";
import requestClient from "../../axios/Client";

const Login = () => {
    const [data, setData] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState([]);
    let navigate = useNavigate();

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
        requestClient
            .post("/auth/login/", userData)
            .then((response) => {
                console.log(response.data);
                setToken(
                    response.data.access_token,
                    response.data.refresh_token
                );
                navigate("/task", { replace: true });
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    setErrors(error.response.data);
                    console.log(error.response.data);
                }
            });
    };

    return (
        <>
            <img src={loginImage} alt="loginImage" className="side-image" />
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" className="image" />
                </Link>
            </div>
            <div className="top-right">
                New User?{" "}
                <Link to="/register" style={{ textDecoration: "none" }}>
                    Register
                </Link>
            </div>
            <div className="base-container">
                <div className="header">Login</div>
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
                            <p className="error">{errors?.non_field_errors}</p>
                        </div>
                    </div>

                    <div className="footer">
                        <button type="submit" className="btn">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
