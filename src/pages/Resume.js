import React from 'react';

function Resume() {
  return (
    <section className="resume">
      <h1>My Resume</h1>
      <div className="resume-content">
        <h2>Education</h2>
        <p>
          <strong>Bachelor of Science in Computer Science</strong><br />
          Kathmandu University, Dhulikhel<br />
          Expected Graduation: 2027
        </p>

        <h2>Experience</h2>
        <p>
          <strong>Junior Developer</strong><br />
          AIPlans.com<br />
          - Developed frontend features using Vue.js.<br />
          - Collaborated on API integration and responsive design.
        </p>
        <p>
          <strong>Research Intern</strong><br />
          Cognitive Science and Psycholinguistics Lab, Tribhuvan University<br />
          - Supported research through data analysis and data collection.
        </p>
        <p>
          <strong>Social Media Manager</strong><br />
          Sagravia (US based Newsletter Company)<br />
          -Managed social media for a Newsletter company.
        </p>

        <h2>Skills</h2>
        <p>
          <strong>Programming:</strong> Python, C/C++, JavaScript, HTML/CSS<br />
          <strong>Tools/Frameworks:</strong> Git, TensorFlow, Vue.js, Scikit-Learn, Pandas<br />
          <strong>Soft Skills:</strong> Teamwork, problem-solving, quick learner
        </p>

        <h2>Download My Resume</h2>
        <p>
          <a href="/assets/resume.pdf" download target="_blank" rel="noopener noreferrer">
            Download PDF
          </a>
        </p>
      </div>
    </section>
  );
}

export default Resume;