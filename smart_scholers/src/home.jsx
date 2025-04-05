import React from "react";
import Navbar from "./components/navbar";
import "./home.css"
import { NavLink } from "react-router-dom";

function Home() {
    function handleChatbotClick(){
        alert("Chatbot is clicked!!")
    }

    function handelChatbotHover(){
        const notify = document.getElementById("chatbot_notify")
        notify.style.display = "inline"
    }

    function handelChatbotLeave(){
        const notify = document.getElementById("chatbot_notify")
        notify.style.display = "none"
    }

    return (
        <>
            <div className="headings">
                <div className="heading">
                    Crack NEET with AI Based Solutions🚀
                </div>
                <div className="head_image">
                    <img id="main_img" src="src\assets\homepage_background.png" alt="" />
                </div>
                <div onClick = {handleChatbotClick} onMouseEnter  = {handelChatbotHover} onMouseLeave={handelChatbotLeave} className="chatbot">
                    <img id = "chatbot_notify" src="src\assets\helpful-tips.png" alt="" />
                    <img id = "chatbot_img" src="src\assets\robot.png" alt="" />
                </div>

                <div className="cards">
                        <div className="card">
                            <div>Study Material</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit repellendus rem aut maxime magni ad cupiditate porro dolores obcaecati.</p>
                            <div className="btn">
                                <button>Click Here</button>
                            </div>
                            
                        </div>
                        <div className="card">
                            <div>Mind Maps</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit repellendus rem aut maxime magni ad cupiditate porro dolores obcaecati.</p>

                            <div className="btn">
                                <NavLink to={"/mindmap"}><button>Click Here</button></NavLink>
                            </div>
                        </div>

                        <div className="card">
                            <div>To Do List</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit repellendus rem aut maxime magni ad cupiditate porro dolores obcaecati.</p>

                            <div className="btn">
                                <button>Click Here</button>
                            </div>
                        </div>
                    </div>

                </div>
            

        </>
    )
}

export default Home;