import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/atharva269" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/atharv-khairnar-5438ba294" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/atharv_the.vedas/?hl=en" target="_blank" rel="noreferrer"><InstagramIcon/></a>
        <a href="mailto:khairnaratharv476@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>

      </div>
      <p>A portfolio designed & built by Atharv Khairnar with 💜 2026</p>
    </footer>
  );
}

export default Footer;