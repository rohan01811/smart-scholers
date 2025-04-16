import React, { useEffect, useState } from "react";
import "./App.css"
import { NavLink } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

function Home() {
    const [chatbotWindow,setChatbotWindow] = useState(false);
    const [messages,setMessages] = useState([{sender : "bot" , text : "Hi! How can I help you today?"}])

    useEffect(()=>{
        const cbWindow = document.getElementById("chatbot_window")

        if(chatbotWindow == true){
            cbWindow.style.display = "inline"
        }
        else{
            cbWindow.style.display = "none"
        }
    },[chatbotWindow])

    

    function handleChatbotClick(){
        if(chatbotWindow == false){
            setChatbotWindow(true)
        }else{
            setChatbotWindow(false)
        }
    }

    function handelChatbotHover(){
        const notify = document.getElementById("chatbot_notify")
        if(chatbotWindow == false){
            notify.style.display = "inline"

        }
    }

    function handelChatbotLeave(){
        const notify = document.getElementById("chatbot_notify")
        notify.style.display = "none"
    }

    async function handleSendMessage(){

        const message = document.getElementById("type_message").value

        const newMessages1 = [...messages , {sender : "user" ,text :message}]
        setMessages(newMessages1)

        document.getElementById("type_message").value = ""

        const response = await fetch("http://127.0.0.1:8000/chatbot",{
            method : "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question: message
            }),
        })

        const answer = await response.json()
        const newMessages2 = [...newMessages1 , {sender : "bot" ,text :answer}]
        setMessages(newMessages2)
    }
    

    return (
        <>
            <div className="headings1">
                <div className="heading1">
                    Crack NEET with AI Based Solutions By Edureka🚀
                </div>
                <div className="head_image1">
                    <img id="main_img" src="src\assets\homepage_background.png" alt="" />
                </div>

                <div className="chatbot_window1" id = "chatbot_window">
                    <div className="messages1">
                        {messages.map((msg,index)=>(
                            <div
                            key={index}
                            className={`${msg.sender === 'user' ? 'user' : 'bot'}`}
                          >
                          <span><ReactMarkdown>{msg.text}</ReactMarkdown></span>
                            
                          </div>))}
                    </div>
                    <div className="inputs_home1">
                        <img id = "upload" src="src\assets\add.png" alt="" />
                        <input id = "type_message" type="text" placeholder = "Enter your Message"  />
                        <img id = "send" src="src\assets\send.png" alt="" onClick={handleSendMessage} />
                    </div>
                </div>
                <div onClick = {handleChatbotClick} onMouseEnter  = {handelChatbotHover} onMouseLeave={handelChatbotLeave} className="chatbot1">
                    <img id = "chatbot_notify" src="src\assets\helpful-tips.png" alt="" />
                    <img id = "chatbot_img" src="src\assets\robot.png" alt="" />
                </div>

                <div className="cards1">
                        <div className="card1">
                            <div>Study Material</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit repellendus rem aut maxime magni ad cupiditate porro dolores obcaecati.</p>
                            <div className="btn1">
                                 <NavLink to={"/studyMaterial"}><button>Click Here</button></NavLink>
                            </div>
                            
                        </div>
                        <div className="card1">
                            <div>Mind Maps</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit repellendus rem aut maxime magni ad cupiditate porro dolores obcaecati.</p>

                            <div className="btn1">
                                <NavLink to={"/mindmap"}><button>Click Here</button></NavLink>
                            </div>
                        </div>

                        <div className="card1">
                            <div>To Do List</div>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit repellendus rem aut maxime magni ad cupiditate porro dolores obcaecati.</p>

                            <div className="btn1">
                            <NavLink to={"/todo"}><button>Click Here</button></NavLink>
                           </div>
                        </div>
                    </div>

                </div>
            

        </>
    )
}

export default Home;