import React, { useState } from "react";
import "../../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import requestClient from "../../axios/Client";
import registerImage from "../../register-cover.svg";
import logo from "../../../src/logo.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
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

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <img
                src={registerImage}
                alt="registerImage"
                className="side-image"
            />
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="logo" className="image" />
                </Link>
            </div>
            <div className="top-right">
                Old User?{" "}
                <Link to="/login" style={{ textDecoration: "none" }}>
                    Login
                </Link>
            </div>
            <div className="base-container">
                <div className="header">Register</div>
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
                        <div className="password-group">
                            <div className="form-group">
                                <label htmlFor="password1">Password </label>
                                <br />
                                <div className="relative">
                                    <input
                                        className="text-field"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        id="password1"
                                        value={data.password1}
                                        onChange={handleChange}
                                    />
                                    <button
                                        onClick={handleClickShowPassword}
                                        className="pass-visible"
                                    >
                                        {showPassword ? (
                                            <VisibilityOffIcon />
                                        ) : (
                                            <VisibilityIcon />
                                        )}
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password2">
                                    Confirm Password{" "}
                                </label>
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
                        <p className="error-pass">{errors?.password1}</p>
                    </div>

                    <div className="footer">
                        <button type="submit" className="btn">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Register;
