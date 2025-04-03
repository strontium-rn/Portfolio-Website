import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        <div className="project">
          <h3>Netra.ai</h3>
          <p>
            A deep learning-based application for detecting eye diseases using transfer learning (ResNet50 and ResNet152), deployed via a Streamlit interface.
          </p>
          <a href="https://github.com/strontium-rn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Chess Engine</h3>
          <p>
            A fully functional chess game implemented in Python, featuring a graphical user interface using Pygame and an AI opponent with move evaluation capabilities (Negamax with Alpha-Beta pruning, depth of 3).
          </p>
          <a href="https://github.com/strontium-rn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Heart Disease Detection</h3>
          <p>
            A machine learning model for heart disease detection using binary classification techniques to identify potential cardiovascular issues from patient data.
          </p>
        </div>
        <div className="project">
          <h3>Weeber</h3>
          <p>
            A web scraping project using Python and Beautiful Soup. The script scrapes news article titles and links from the OnlineKhabar website, saves the data to a file, and is available on GitHub.
          </p>
          <a href="https://github.com/strontium-rn" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;