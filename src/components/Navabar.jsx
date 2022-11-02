import React from "react";
import './css/Navbar.css'

const Navbar = () => {
    return(
    <div className="navbar">
        <img className="navbar--logo" src="src/assets/Group 22.svg" alt="navbar-logo" />
        <div className="navbar--menu">
            <a>Work</a>
            <a>Articles</a>
            <a>Resume</a>
            <a>Contact</a>
        </div>
    </div>
    )
}

export default Navbar;