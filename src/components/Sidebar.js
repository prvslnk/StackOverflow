import React, { useState, useEffect } from 'react';
// import './Sidebar.css'; // Add your styles here

const Sidebar = () => {
    const [activeMenu, setActiveMenu] = useState("home"); // Set default active menu to 'home'

    const handleMenuClick = (menu) => {
        setActiveMenu(menu); // Update active menu on click
    };

    useEffect(() => {
        // Optional: If you want to highlight the menu based on URL or other conditions, you can add custom logic here
    }, []);

    return (
        <aside className="sidebar">
            <ul className="menu">
                {/* Home */}
                <li
                    className={`menu-item ${activeMenu === "home" ? "active" : ""}`}
                    onClick={() => handleMenuClick("home")}
                >
                    <a href="/"><i className="bi bi-house"></i> Home</a>
                </li>

                {/* PUBLIC */}
                <li
                    className={`menu-item ${activeMenu === "public" ? "active" : ""}`}
                    onClick={() => handleMenuClick("public")}
                >
                    <a href="#public"><i className="bi bi-globe-americas"></i> PUBLIC</a>
                </li>
                <ul className="sub-menu">
                    <li
                        className={`${activeMenu === "questions" ? "active" : ""}`}
                        onClick={() => handleMenuClick("questions")}
                    >
                        <a href="/">Questions</a>
                    </li>
                    <li
                        className={`${activeMenu === "tags" ? "active" : ""}`}
                        onClick={() => handleMenuClick("tags")}
                    >
                        <a href="/">Tags</a>
                    </li>
                    <li
                        className={`${activeMenu === "users" ? "active" : ""}`}
                        onClick={() => handleMenuClick("users")}
                    >
                        <a href="/">Users</a>
                    </li>
                </ul>

                {/* COLLECTIVES */}
                <li
                    className={`menu-item ${activeMenu === "collectives" ? "active" : ""}`}
                    onClick={() => handleMenuClick("collectives")}
                >
                    <a href="#collectives"><i className="bi bi-tags"></i> COLLECTIVES</a>
                </li>
                <ul className="sub-menu">
                    <li
                        className={`${activeMenu === "exploreJobs" ? "active" : ""}`}
                        onClick={() => handleMenuClick("exploreJobs")}
                    >
                        <a href="/">Explore Jobs</a>
                    </li>
                </ul>

                {/* FIND JOBS */}
                <li
                    className={`menu-item ${activeMenu === "jobs" ? "active" : ""}`}
                    onClick={() => handleMenuClick("jobs")}
                >
                    <a href="#find-jobs"><i className="bi bi-briefcase"></i> FIND JOBS</a>
                </li>
                <ul className="sub-menu">
                    <li
                        className={`${activeMenu === "jobsList" ? "active" : ""}`}
                        onClick={() => handleMenuClick("jobsList")}
                    >
                        <a href="/">Jobs</a>
                    </li>
                    <li
                        className={`${activeMenu === "companies" ? "active" : ""}`}
                        onClick={() => handleMenuClick("companies")}
                    >
                        <a href="/">Companies</a>
                    </li>
                </ul>

                {/* TEAMS */}
                <li
                    className={`menu-item ${activeMenu === "teams" ? "active" : ""}`}
                    onClick={() => handleMenuClick("teams")}
                >
                    <a href="#teams"><i className="bi bi-plus-circle"></i> TEAMS</a>
                </li>
                <ul className="sub-menu">
                    <li
                        className={`${activeMenu === "createTeam" ? "active" : ""}`}
                        onClick={() => handleMenuClick("createTeam")}
                    >
                        <a href="/">+ Create a Team</a>
                    </li>
                </ul>
            </ul>
        </aside>
    );
};

export default Sidebar;
