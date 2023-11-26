import React, { useState } from 'react';
import './contactus.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

const [phone, setPhone] = useState('');
  const [questionOrComment, setQuestionOrComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the form data to the server
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        questionOrComment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSubmitted(true);
          setName('');
          setEmail('');
          setPhone('');
          setQuestionOrComment('');
        } else {
          alert('Error submitting form');
        }
      });
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <p>Have any questions about our adventures, or just wanna chat or comment? Leave us a message and we'll get back to you!</p>
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <label>Question or Comment:</label>
        <textarea value={questionOrComment} onChange={(event) => setQuestionOrComment(event.target.value)} required />
        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div className="success-message">
          <p>Thank you for your message!</p>
          <p>We will get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default ContactUs;