import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./home";
import Navbar from "./components/navbar";
import Login from "./login";



function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<><Navbar/> <Home/></>} />
                <Route path = "/login" element = {<> <Login/></>} />
            </Routes>
        </Router>
    )
}

export default RouterPage;



