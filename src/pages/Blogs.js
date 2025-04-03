import React from 'react';

function Blogs() {
  return (
    <section className="blogs">
      <h1>My Blogs</h1>
      <div className="blog-list">
        <div className="blog">
          <h3>Exploring the Intersection of AI and Cognitive Science</h3>
          <p>
            A deep dive into how AI can learn from human cognition to create more intuitive systems.
          </p>
          <a href="#">Read More</a>
        </div>
        <div className="blog">
          <h3>Building My First Chess Engine: Lessons Learned</h3>
          <p>
            Sharing my journey of building a chess engine with Python and Pygame, including challenges and solutions.
          </p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Blogs;