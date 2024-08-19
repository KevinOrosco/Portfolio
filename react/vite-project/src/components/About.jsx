// src/components/About.jsx
import React from 'react';
import './About.css';
import profileImage from '../assets/Capi.png';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <img src= {profileImage} alt="asas" />
        <h2>Sobre mí</h2>
        <p>¡Hola! Soy un desarrollador web con experiencia en React, JavaScript y más. Mi pasión Chat-GPT y me identifico como un capibara</p>
      </div>
    </section>
  );
};

export default About;
