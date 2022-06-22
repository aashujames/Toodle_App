import React from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Login/Register";
import Sidebar from "./components/Task/Sidebar/Sidebar";
import TodayTask from "./components/Task/TodayTask";

function App() {
    return (
        <div className="main-container">
            <Login />
        </div>
        // <div className="main">
        //     <Sidebar />
        //     <TodayTask />
        // </div>
    );
}

export default App;
