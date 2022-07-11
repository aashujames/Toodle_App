import React, { useState } from "react";
import logo from "../../../src/logo.png";
import "../../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import requestClient from "../../axios/Client";

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });
    const [errors, setErrors] = useState({});
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
            email: data.email,
            password1: data.password1,
            password2: data.password2
        };
        requestClient
            .post("/auth/registration/", userData)
            .then((response) => {
                console.log(response.data);
                navigate("/login", { replace: true });
            })
            .catch((error) => {
                if (error.response && error.response.status === 400) {
                    setErrors(error.response.data);
                    console.log(error.response.data);
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
                        <p className="error">{errors?.username}</p>
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
                        <p className="error">{errors?.email}</p>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password1">Password </label>
                        <br />
                        <input
                            className="text-field"
                            type="password"
                            id="password1"
                            value={data.password1}
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
                        <p className="error">{errors?.password1}</p>
                    </div>
                </div>

                <div className="footer">
                    <button type="submit" className="btn">
                        Register
                    </button>
                    <div>
                        Old User? <Link to="/login">Login</Link>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;
