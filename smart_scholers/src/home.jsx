import React from "react";
import Navbar from "./components/navbar";
import "./home.css"

function Home() {
    return (
        <>
            <div className="headings">
                <div className="heading">
                    Crack NEET with AI Based Solutions🚀
                </div>
                <div className="head_image">
                    <img src="src\assets\homepage_background.png" alt="" />
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
                                <button>Click Here</button>
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