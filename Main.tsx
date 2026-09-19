import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileimage from'../assets/images/Profile.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileimage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/atharva269" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/atharv-khairnar-5438ba294" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Atharv Khairnar</h1>
          <p>Full Stack Developer</p>
          <h5>Passionate Computer Engineering graduate with knowledge of full-stack web development and Artificial Intelligence. Skilled in React.js, Node.js, Express.js, databases, Python, and AI fundamentals. Completed internships as a Full Stack Developer and developed practical web applications. Eager to apply my technical and AI skills while growing as a Software Developer.</h5>


          <div className="mobile_social_icons">
            <a href="https://github.com/atharva269" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/atharv-khairnar-5438ba294" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;