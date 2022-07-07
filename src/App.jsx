import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";

function App() {
    return (
        <div className="flex w-screen h-screen">
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/dashboard/*" element={<Dashboard />} exact />
                <Route path="/setting/*" element={<Settings />} exact />
            </Routes>
        </div>
    );
}

export default App;
