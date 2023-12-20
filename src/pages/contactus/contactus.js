import React, { useState } from 'react';
import useWeb3Forms from '@web3forms/react';
import { useForm } from 'react-hook-form';
import './contactus.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({}); // Manage form data
  const [message, setMessage] = useState('');

  const { register, handleSubmit } = useForm();
  const { submit: onSubmit } = useWeb3Forms({
    access_key: 'ccb0b42e-35c7-4c3a-93d0-b35bc215996e',
    settings: {
      from_name: 'Adventure for 2 Please',
      subject: 'New Contact Message from your Website',
    },
    onSuccess: (msg, data) => {
      console.log(msg);
      setMessage('Message sent successfully!'); // Set success message
      setFormData({}); // Reset form data
    },
    onError: (msg, data) => {
      console.error(msg);
      setMessage('Error sending message: ' + msg); // Set error message
    },
  });

  return (
    <div className='contact-us'>
      <h1>Leave us a message or a question!</h1>
      <form onSubmit={handleSubmit(onSubmit)}> {/* Pass onSubmit to handleSubmit */}
        <p>Have any questions about our adventures, or just wanna chat or comment? Leave us a message and we'll get back to you!</p>
        <input
          type='text'
          {...register('name', {
            required: 'Full name is required',
            maxLength: 80,
          })}
          value={formData.name} // Bind input values to formData
          placeholder="Full Name"
        />
        <input
          type='email'
          {...register('email', {
            required: 'Enter your email',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email',
            },
          })}
          value={formData.email}
          placeholder="Email Address"
        />
        <textarea
          {...register('message', {
            required: 'Enter your Message',
          })}
          value={formData.message}
          placeholder="Leave us a message"
        />
        <button type='submit'>Submit Form</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ContactUs;