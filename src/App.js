import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Sidebar from "./components/Task/Sidebar/Sidebar";
import TodayTask from "./components/Task/TodayTask";
import Home from "./components/Home/Home";
import Upcoming from "./components/Task/UpcomingTask/Upcoming";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="home-container">
                            <Home />
                        </div>
                    }
                />
                <Route
                    path="/task"
                    element={
                        <div className="main">
                            <Sidebar />
                            <TodayTask />
                        </div>
                    }
                />
                <Route
                    path="/task/upcoming"
                    element={
                        <div className="main">
                            <Sidebar />
                            <Upcoming />
                        </div>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <div className="login-container">
                            <Register />
                        </div>
                    }
                ></Route>
                <Route
                    path="/login"
                    element={
                        <div className="login-container">
                            <Login />
                        </div>
                    }
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
