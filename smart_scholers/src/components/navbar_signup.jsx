import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";

function Navbar2() {

    return (
        <div className="navbar">
            <div className="name">
            SMART SCHOLARS
            </div>

            <div className="log_buttons">
                <NavLink to={"/"}><button>Home</button></NavLink>
                <NavLink to={"/login"}><button>Login</button></NavLink>
            </div>
            
        </ div>
    )
}

export default Navbar2;
