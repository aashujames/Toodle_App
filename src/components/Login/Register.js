import React, { useState } from "react";
import logo from "../../../src/logo.png";
import "../../styles/Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
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
            email: data.email,
            password1: data.password1,
            password2: data.password2
        };
        axios
            .post("http://127.0.0.1:8000/auth/registration/", userData)
            .then((response) => {
                console.log(response.status);
                console.log(response.data);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    console.log("server responded");
                } else if (error.request) {
                    console.log("network error");
                } else {
                    console.log(error);
                }
            });
    };

    return (
        <div className="base-container">
            <div className="header">Register</div>
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
                        <label htmlFor="email">Email </label>
                        <br />
                        <input
                            className="text-field"
                            type="email"
                            id="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Password </label>
                        <br />
                        <input
                            className="text-field"
                            type="password"
                            id="password1"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password2">Confirm Password </label>
                        <br />
                        <input
                            className="text-field"
                            type="password"
                            id="password2"
                            value={data.password2}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="footer">
                    <button type="submit" className="btn">
                        Register
                    </button>
                </div>
                <div>
                    Old User? <Link to="../login">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Register;
