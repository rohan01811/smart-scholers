import React from "react";
import "./navbar.css"

function Navbar() {

    return (
        <div className="navbar">
            <div className="name">
            SMART SCHOLARS
            </div>

            <div className="log_buttons">
                <button>LogIn</button>
                <button>SignUp</button>
            </div>
            
        </ div>
    )
}

export default Navbar;
