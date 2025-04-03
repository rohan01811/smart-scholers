import React from "react";
import Navbar from "./components/navbar";
import "./home.css"

function Home() {
    return (
        <>
            <Navbar />
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
                            <button>Go</button>
                        </div>
                        <div className="card">
                            <div>Mind Maps</div>
                            <button>Go</button>
                        </div>

                        <div className="card">
                            <div>To Do List</div>
                            <button>Go</button>
                        </div>

                        <div className="card">
                            <div>Document QnA</div>
                            <button>Go</button>
                        </div>
                    </div>

                </div>
            

        </>
    )
}

export default Home;