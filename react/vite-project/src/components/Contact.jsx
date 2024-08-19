// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contacto</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit" className="btn">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
