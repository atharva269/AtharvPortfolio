import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/Business.png';
import mock08 from '../assets/images/Finwise.png';
import mock09 from '../assets/images/Travel.png';
import mock10 from '../assets/images/Homeservice.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Smart Serve AI: Smart Matching Service</h2>
                <h5>[React.js, Node.js, AI-ML, BART-Large-MNLI]</h5>
                <p>Developed real-time booking status tracking to improve service scheduling and customer interaction.  Developed an end-to-end intelligent service scheduling platform using React.js, Node.js, MongoDB, and AI/ML
technologies. Implemented AI-based service recommendations and chatbot functionality for customer support. Integrated BART-Large-MNLI for zero-shot intent classification, Gemini API as a semantic fallback mechanism.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
                <h2>TravelEase: Indian Tourism Portal</h2>
                <h5>[React.js, Node.js, Tailwind CSS, MySQL]</h5>
                <p> Developed a web-based Indian tourism platform for exploring destinations,travel plans,pricing, travel information.  Created dynamic destination pages with structured travel details and responsive user interfaces. Developed RESTful APIs to manage travel data, user bookings, and itinerary-related operations using Node.js and
MySQL.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Finwise- Finance Management Platform </h2>
                <h5>[React.js, Node.js, Express.js, MongoDB]</h5>
                <p> Developed a web-based finance platform for managing income and expense transactions using CRUD functionality. Built interactive dashboards to visualize income, expenses, and balance trends for improved financial tracking.  Implemented transaction management features including add, update, delete, and view operations.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
                <h2>Buisness Web Application</h2>
                <h5>[React.js, Node.js, MySQL]</h5>
                <p>This is an online business management platform, Users can book or managed buisness related services. With easy interface which helpful for customers to managed services easily and smoothly.</p>
            </div>
            
            
            
            
            
            
        </div>
    </div>
    );
}

export default Project;