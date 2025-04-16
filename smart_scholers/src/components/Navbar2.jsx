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
             <NavLink to={"/"}><button className="btn12">Home</button></NavLink>
                <NavLink to={"/login"}><button className="btn12">Login</button></NavLink>
              
                <NavLink to={"/signup"}><button className="btn12">Signup</button></NavLink>
            </div>
            
        </ div>
    )
}

export default Navbar2;
