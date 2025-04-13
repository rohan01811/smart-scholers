import React from "react";
import "./navbar.css"
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div className="navbar">
            <div className="name">
            SMART SCHOLARS
            </div>

            <div className="log_buttons">
                <NavLink to={"/login"}><button>LogIn</button></NavLink>
              
                <NavLink to={"/signup"}><button>Signup</button></NavLink>
            </div>
            
        </ div>
    )
}

export default Navbar;
