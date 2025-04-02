import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Aarushi Kalia</h1>
        <p>Software Developer | Film Enthusiast | Music Explorer</p>
        <Link to="contact" smooth={true} duration={500} className="cta-button">
          Let's Connect
        </Link>
      </div>
    </section>
  );
};

export default Hero; 