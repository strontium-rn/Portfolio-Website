import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .send(
        'service_sd689gb', //  Service ID 
        'template_vb05dkr', //  Template ID 
        formData,
        'YOUR_PUBLIC_KEYTb3G4TWkhBJI86uzI' // Public Key
      )
      .then(
        (result) => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          setStatus('Failed to send message. Please try again later.');
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out via the form below or email me directly at{' '}
        <a href="mailto:pathakaaryan23@gmail.com">pathakaaryan23@gmail.com</a>.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
}

export default Contact;