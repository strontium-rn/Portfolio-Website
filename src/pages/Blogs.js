import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const blogData = [
  {
    id: 1,
    title: 'Cycling around 7 UNESCO World Heritage Sites in a day',
    description: 'A cycling journey of 70KM to explore 7 UNESCO world heritage sites, starting from Kirtipur.',
    date: 'August 23, 2022',
  },
  {
    id: 2,
    title: 'How becoming a cognitive scientist will make you feel like Harvey Specter',
    description: 'An unsual talent I noticed in my friend which led to me explore cognitive science deeper',
    date: 'April 16, 2025',
  },
  // Add more blogs here
];

const Blogs = () => {
  return (
    <div className="container">
      <h2>My Blogs</h2>
      <div className="blog-grid">
        {blogData.map((blog) => (
          <Link to={`/blog/${blog.id}`} className="blog-card" key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="date">Published on {blog.date}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;