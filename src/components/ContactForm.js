import React, { useState } from "react";
import './ContactForm.scss';

const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send Message");
    let result = await response.json();
    alert(result.status);
  };
  return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form-header">CONTACT US</h2>
            <input className="contact-form-input" type="text" id="name" placeholder="Name" required />
            <input className="contact-form-input" type="email" id="email" placeholder="E-mail" required />
            <textarea className="contact-form-input" id="message" placeholder="Additional info..." required />
            <button className="contact-form-button" type="submit">{status}</button>
        </form>
  );
};

export default ContactForm;