import React from 'react';
import '../App.css'; // Ensure App.css is imported

function Projects() {
  return (
    <section className="projects">
      <h1 className="section-title">My Projects</h1>
      <div className="project-grid">
        <div className="project-card">
          <h3 className="project-title">Netra.ai</h3>
          <p className="project-description">
            A deep learning-based application for detecting eye diseases using transfer learning (ResNet50 and ResNet152), deployed via a Streamlit interface.
          </p>
          <a
            href="https://github.com/strontium-rn/Netra-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span className="github-icon">🔗</span> View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3 className="project-title">Chess Engine</h3>
          <p className="project-description">
            A fully functional chess game implemented in Python, featuring a graphical user interface using Pygame and an AI opponent with move evaluation capabilities (Negamax with Alpha-Beta pruning, depth of 3).
          </p>
          <a
            href="https://github.com/strontium-rn/Chess-Engine"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span className="github-icon">🔗</span> View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3 className="project-title">Heart Disease Detection</h3>
          <p className="project-description">
            A machine learning model for heart disease detection using binary classification techniques to identify potential cardiovascular issues from patient data.
          </p>
          <a
            href="https://github.com/strontium-rn/heart_disease"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span className="github-icon">🔗</span> View on GitHub
          </a>
        </div>
        <div className="project-card">
          <h3 className="project-title">Weeber</h3>
          <p className="project-description">
            A web scraping project using Python and Beautiful Soup. The script scrapes news article titles and links from the OnlineKhabar website, saves the data to a file, and is available on GitHub.
          </p>
          <a
            href="https://github.com/strontium-rn/weeber"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <span className="github-icon">🔗</span> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;