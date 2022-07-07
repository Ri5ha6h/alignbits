import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="bg-gray-300 h-full w-[15%] flex flex-col items-center">
            <p>Sidebar</p>
            <div className="mt-20 flex flex-col gap-3">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/setting">Settings</Link>
            </div>
        </div>
    );
};

export default Sidebar;
