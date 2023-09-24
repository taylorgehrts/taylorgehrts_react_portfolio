import React from 'react';
import './Footer.css'; // Import the CSS file
import gitHubLogo from "../Assets/images/githubLogo.png" ;
import soundCloudLogo from "../Assets/images/soundCloudLogo.png" ;
import linkedInLogo from "../Assets/images/linkedInLogo.png" ;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/taylorgehrts" target="_blank" rel="noopener noreferrer">
          <img src= {gitHubLogo}  alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://soundcloud.com/arohanpdx" target="_blank" rel="noopener noreferrer">
          <img src={soundCloudLogo} alt="SoundCloud" className="footer-icon" />
        </a>
        <a href="https://linkedin.com/in/taylor-gehrts-8768b1196" target="_blank" rel="noopener noreferrer">
          <img src= {linkedInLogo} alt="LinkedIn" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
