import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJava, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';



function Achievement() {
    return (
    <div className="container" id="Achieve">
        <div className="skills-container">
            <h1>Certificates and Achievement</h1>
            <div className="skills-grid">
                <div className="skill">
                    
                    <h3>Java Programming Certification - Infosys Springboard, 2025</h3>
                    
                </div>

                <div className="skill">
                    <h3>Unstop Flipkart Grid Hackathon</h3>
                    
                </div>

                <div className="skill">
                    <h3>Google Cloud Digital Leader</h3>
                    
                </div>

                <div className="skill">
                    <h3>Smart India Hackathon Participation (SIH 2025)</h3>
                    
                </div>

                <div className="skill">
                    <h3>AWS Cloud for beginner</h3>
                    
                </div>

                <div className="skill">
                    <h3>Tabla Player (Shastriya Sangeet)</h3>
                    
                </div>



            </div>
        </div>
    </div>
    );
}

export default Achievement;