import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJava, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "HTML5",
    "CSS3",
    "Tailwind CSS"
];

const labelsSecond = [
    "Node.js",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Postman",
    "RESTful API",
    "Database Administration"
];

const labelsThird = [
    "Java",
    "Javascript",
    "Python",
    "SQL"
];

const labelsForth = [
    "Git",
    "Github",
    "VS Code",
    "SDLC",
    "OOP",
    "DBMS"
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Frontend</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Node. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Backend and Databases</h3>
                    <p>Integrated backend using database like MySQl and MongoDB.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faJava} size="3x"/>
                    <h3>Languages</h3>
                    <p>Proficient in Programming languages.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGitAlt} size="3x"/>
                    <h3>Tools and Concepts</h3>
                    <p>Development tools and Software development concepts.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsForth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>



            </div>
        </div>
    </div>
    );
}

export default Skills;