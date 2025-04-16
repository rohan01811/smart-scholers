import React from "react";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import App from "./App";
import Navbar from "./components/navbar";
import Navbar1 from "./components/navbar_login";
import LoginPage from "./login";
import StudyMaterial from "./studyMaterial";

import Mindmaps from "./mindmap";
import SignUpPage from "./signup";
import TodoApp from "./todo";
import History from "./history";



function RouterPage(){
    return(
        <Router>
            <Routes>
                <Route path = "/" element = {<><Navbar/> <App/></>} />
                <Route path = "/login" element = {<><LoginPage/></>}/>
                <Route path = "/signup" element = {<><SignUpPage/></>}/>

                <Route path = "/mindmap" element = {<> <Mindmaps/></>} />
                <Route path = "/studyMaterial" element = {<> <StudyMaterial/></>} />
                <Route path = "/todo" element = {<><TodoApp/></>} />
                <Route path = "/history" element = {<><History/></>} />
                


            </Routes>
        </Router>
    )
}

export default RouterPage;



