import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./home";
import Navbar from "./components/navbar";



function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<><Navbar/> <Home/></>} />
            </Routes>
        </Router>
    )
}

export default RouterPage;



