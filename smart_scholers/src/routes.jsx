import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./home";
import Navbar from "./components/navbar";
import LoginPage from "./login";
import StudyMaterial from "./studyMaterial";

import Mindmaps from "./mindmap";



function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<><Navbar/> <Home/></>} />
                <Route path = "/login" element = {<><LoginPage/></>}/>
                <Route path = "/mindmap" element = {<> <Mindmaps/></>} />
                <Route path = "/studyMaterial" element = {<> <StudyMaterial/></>} />
            </Routes>
        </Router>
    )
}

export default RouterPage;



