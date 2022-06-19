import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import TodayTask from "./components/TodayTask";

function App() {
    return (
        <div className="main">
            <Sidebar />
            <TodayTask />
        </div>
    );
}

export default App;
