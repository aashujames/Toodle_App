import React from "react";
import "./App.css";
import Register from "./components/Login/Register";
import Sidebar from "./components/Task/Sidebar/Sidebar";
import TodayTask from "./components/Task/TodayTask";

function App() {
    return (
        <Register />
        // <div className="main">
        //     <Sidebar />
        //     <TodayTask />
        // </div>
    );
}

export default App;
