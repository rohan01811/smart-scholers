import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Home from "./home";
import Navbar from "./components/navbar";
import LoginPage from "./login";
import StudyMaterial from "./studyMaterial";

import Mindmaps from "./mindmap";
import SignUpPage from "./signup";
import TodoApp from "./todo";



function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<><Navbar/> <Home/></>} />
                <Route path = "/login" element = {<><LoginPage/></>}/>
                <Route path = "/signup" element = {<><SignUpPage/></>}/>

                <Route path = "/mindmap" element = {<> <Mindmaps/></>} />
                <Route path = "/studyMaterial" element = {<> <StudyMaterial/></>} />
                <Route path = "/todo" element = {<> <TodoApp/></>} />


            </Routes>
        </Router>
    )
}

export default RouterPage;



