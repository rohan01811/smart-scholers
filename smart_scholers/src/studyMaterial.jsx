import React from "react";
import "./studyMaterial.css"

function StudyMaterial(){

    function toggleContent(event) {
        const header = event.currentTarget;
        const content = header.nextElementSibling;
        const icon = header.querySelector('.toggle-icon');
        const isExpanded = content.style.maxHeight;
    
        if (isExpanded) {
            content.style.maxHeight = null;
            content.style.padding = '0 15px';
            icon.textContent = '▼';
            header.setAttribute('aria-expanded', 'false');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '0 15px 15px 15px';
            icon.textContent = '▲';
            header.setAttribute('aria-expanded', 'true');
        }
    }
    
    // document.getElementById('expandAll').addEventListener('click', function () {
        // document.querySelectorAll('.subject-header').forEach(header => {
            // const content = header.nextElementSibling;
            // const icon = header.querySelector('.toggle-icon');
            // if (!content.style.maxHeight) {
                // content.style.maxHeight = content.scrollHeight + 'px';
                // content.style.padding = '0 15px 15px 15px';
                // icon.textContent = '▲';
                // header.setAttribute('aria-expanded', 'true');
            // }
        // });
    // });
    // 
    // document.getElementById('collapseAll').addEventListener('click', function () {
        // document.querySelectorAll('.subject-header').forEach(header => {
            // const content = header.nextElementSibling;
            // const icon = header.querySelector('.toggle-icon');
            // if (content.style.maxHeight) {
                // content.style.maxHeight = null;
                // content.style.padding = '0 15px';
                // icon.textContent = '▼';
                // header.setAttribute('aria-expanded', 'false');
            // }
        // });
    // });
// 
    function handleExplanAll(){
        document.querySelectorAll('.subject-header').forEach(header => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            if (!content.style.maxHeight) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '0 15px 15px 15px';
                icon.textContent = '▲';
                header.setAttribute('aria-expanded', 'true');
            }
        });
    }
// 
    function handleCollapsApp(){
        document.querySelectorAll('.subject-header').forEach(header => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.toggle-icon');
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = '0 15px';
                icon.textContent = '▼';
                header.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    return(
        <>
        <header>
        <h1>SMART SCHOLARS</h1>
        <nav>
            <a href="index.html">Home</a>
            <a href="mindmaps.html">Mind Maps</a>
            <a href="study-material.html" className="active">Study Material</a>
            <a href="login.html">Login</a>
            <a href="signup.html">Sign Up</a>
        </nav>
    </header>
    
    <section className="container">
        <h2>Study Material for JEE & NEET</h2>
        
        <div className="controls">
            <button onClick = {handleExplanAll} id="expandAll">Expand All</button>
            <button  onClick = {handleCollapsApp} id="collapseAll">Collapse All</button>
        </div>
        
        
        <div className="subject">
            <div className="subject-header" onClick={toggleContent} aria-expanded="false" aria-controls="physics-content">
                <h3>Physics 📘</h3>
                <span className="toggle-icon">▼</span>
            </div>
            <div className="content" id="physics-content">
                <div className="content-inner">
                    <div className="subject-summary">
                        <p><strong>Topics covered:</strong> Units and Dimensions, Vectors, Measurement, Dimensional Analysis</p>
                    </div>
                    <div className="pdf-container">
                        <h4>Download Physics Resources:</h4>
                        <a href="121122-JEE-Main-2024-Physics-and-Measurement-Revision-Notes-Free-PDF-Download.pdf" className="pdf-link" download>
                            <span className="pdf-icon">📄</span> Physics and Measurement Notes
                        </a>
                        <p className="pdf-description">Covers: Fundamental and derived units, dimensional analysis, applications of dimensional analysis, least count of instruments</p>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div className="subject">
            <div className="subject-header" onClick={toggleContent} aria-expanded="false" aria-controls="chemistry-content">
                <h3>Chemistry 🧪</h3>
                <span className="toggle-icon">▼</span>
            </div>
            <div className="content" id="chemistry-content">
                <div className="content-inner">
                    <div className="subject-summary">
                        <p><strong>Topics covered:</strong> Coordination Compounds, Valence Bond Theory, Isomerism in Coordination Compounds</p>
                    </div>
                    <div className="pdf-container">
                        <h4>Download Chemistry Resources:</h4>
                        <a href="133650-JEE-Main-Coordination-Compounds-Revision-Notes-Free-PDF-Download.pdf" className="pdf-link" download>
                            <span className="pdf-icon">📄</span> Coordination Compounds Notes
                        </a>
                        <p className="pdf-description">Covers: Terms in coordination chemistry, VBT, isomerism (ionization, hydrate, linkage), applications in metallurgy and biology</p>
                    </div>
                </div>
            </div>
        </div>
        
       
        <div className="subject">
            <div className="subject-header" onClick = {toggleContent} aria-expanded="false" aria-controls="maths-content">
                <h3>Mathematics ➗</h3>
                <span className="toggle-icon">▼</span>
            </div>
            <div className="content" id="maths-content">
                <div className="content-inner">
                    <div className="subject-summary">
                        <p><strong>Topics covered:</strong> Vector Algebra, Scalar and Cross Products, Vector Triple Products</p>
                    </div>
                    <div className="pdf-container">
                        <h4>Download Maths Resources:</h4>
                        <a href="131524-JEE-Main-Vector-Algebra-Revision-Notes-Free-PDF-Download.pdf" className="pdf-link" download>
                            <span className="pdf-icon">📄</span> Vector Algebra Notes
                        </a>
                        <p className="pdf-description">Covers: Vector operations, section formula, properties of cross and dot products, scalar triple product applications</p>
                    </div>
                </div>
            </div>
        </div>
        
       
        <div className="subject">
            <div className="subject-header" onClick = {toggleContent} aria-expanded="false" aria-controls="biology-content">
                <h3>Biology 🧬</h3>
                <span className="toggle-icon">▼</span>
            </div>
            <div className="content" id="biology-content">
                <div className="content-inner">
                    <div className="subject-summary">
                        <p><strong>Topics covered:</strong> Human Health and Disease, Immunity, AIDS, Cancer, Drug Abuse</p>
                    </div>
                    <div className="pdf-container">
                        <h4>Download Biology Resources:</h4>
                        <a href="153024-Human-Health-and-Disease-NEET-Notes-2024-Free-PDF-Download.pdf" className="pdf-link" download>
                            <span className="pdf-icon">📄</span> Human Health and Disease Notes
                        </a>
                        <p className="pdf-description">Covers: Types of diseases, common pathogens, immune system, AIDS lifecycle, cancer types and causes, drug abuse effects</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
        </>


    )


}

export default StudyMaterial;