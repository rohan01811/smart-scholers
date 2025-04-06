import React, { useEffect, useState } from "react";
import "./home.css"
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
            <div className="headings">
                <div className="heading">
                    Crack NEET with AI Based Solutions🚀
                </div>
                <div className="head_image">
                    <img id="main_img" src="src\assets\homepage_background.png" alt="" />
                </div>

                <div className="chatbot_window" id = "chatbot_window">
                    <div className="messages">
                        {messages.map((msg,index)=>(
                            <span
                            key={index}
                            className={`${msg.sender === 'user' ? 'user' : 'bot'}`}
                          >
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                          </span>))}
                    </div>
                    <div className="inputs">
                        <img id = "upload" src="src\assets\add.png" alt="" />
                        <input id = "type_message" type="text" placeholder = "Enter your Message"  />
                        <img id = "send" src="src\assets\send.png" alt="" onClick={handleSendMessage} />
                    </div>
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