import React, { useState } from "react";
import axios from "axios";
import "./mindmap.css"


function Mindmaps() {
    const [mindmap, setMindMap] = useState(null)


    async function handleSubmit(event) {
        const file = event.target.files[0];
        const formdata = new FormData();


        formdata.append("pdf", file)

        const response = await axios.post("http://127.0.0.1:8000/generateMindmap", formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        console.log(response.data)
        setMindMap(response.data)


    }

    return (
        <div className="mindmaps4">
            <div className="title4">
                Generate MindMap of any pdf
            </div>
            <div className="inputs4">
                <label htmlFor="pdf">Submit your PDF</label>
                <input onChange={handleSubmit} id="pdf" type="file" />
            </div>
            <div className="mindmap4">
                <iframe src={mindmap} >

                </iframe>
            </div>


        </div>
    )
}

export default Mindmaps;