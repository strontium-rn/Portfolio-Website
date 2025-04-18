import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/aarya-pathak-421aa1269/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="social-icon linkedin-icon" />
        </a>
        <a href="https://github.com/strontium-rn" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="social-icon github-icon" />
        </a>
        <a href="https://x.com/pathakaarya23" target="_blank" rel="noopener noreferrer" aria-label="X">
          <FaTwitter className="social-icon twitter-icon" />
        </a>
        <a href="https://www.youtube.com/@aryanpathak23" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube className="social-icon youtube-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;